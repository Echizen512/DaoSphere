use starknet::ContractAddress;
use super::models::DaoSphereModel;

#[starknet::interface]
trait IDaoSphere<TContractState> {
    fn create_proposal(ref self: TContractState, description: ByteArray, end_time: u64);
    fn is_admin(self: @TContractState, caller: ContractAddress) -> bool;

    // handle user
    fn create_user(ref self: TContractState, userAddress: ContractAddress);
    fn user_exist(self: @TContractState, address: ContractAddress) -> bool;
    fn get_users(self: @TContractState) -> Array<DaoSphereModel::User>;
    fn modify_user(ref self: TContractState, user_id: u64);
}

const USER_ROLE: felt252 = selector!("USER_ROLE");

#[starknet::contract]
mod DaoSphere {
    use starknet::event::EventEmitter;
    use starknet::storage::StoragePathEntry;
    use core::num::traits::Zero;
    use openzeppelin_access::accesscontrol::interface::IAccessControlCamel;
    use AccessControlComponent::InternalTrait;
    use openzeppelin_access::accesscontrol::{DEFAULT_ADMIN_ROLE, AccessControlComponent};
    use openzeppelin_introspection::src5::SRC5Component;
    use starknet::{get_caller_address, ContractAddress};
    use starknet::storage::{Map};
    use starknet::syscalls::call_contract_syscall;
    use super::{USER_ROLE};
    use super::DaoSphereModel::{User};

    component!(path: AccessControlComponent, storage: accesscontrol, event: AccessControlEvent);
    component!(path: SRC5Component, storage: src5, event: SRC5Event);

    // AccessControl
    #[abi(embed_v0)]
    impl AccessControlImpl =
        AccessControlComponent::AccessControlImpl<ContractState>;
    impl AccessControlInternalImpl = AccessControlComponent::InternalImpl<ContractState>;

    // SRC5
    #[abi(embed_v0)]
    impl SRC5Impl = SRC5Component::SRC5Impl<ContractState>;

    //!LA IDEA QUE TENGO A FUTURO ES CREAR PROPUESTAS BASICAS CON 2 OPCIONES Y PROPUESTAS AVANZADAS
    //!QUE TENDRAN MUCHAS OPCIONES

    #[derive(Drop, Serde, starknet::Store)]
    struct Proposal {
        proposal_id: u64,
        creator_address: ContractAddress,
        description: ByteArray,
        start_time: u64,
        end_time: u64,
    }

    #[derive(Drop, Serde, starknet::Store)]
    struct OptionProposal {
        description: ByteArray,
        votes: u64,
    }


    #[storage]
    struct Storage {
        admin: ContractAddress,
        proposal_count: u64,
        proposal: Proposal,
        proposal_options: Map<(u64, u64), OptionProposal>,
        user_count: u64,
        users: Map<u64, User>,
        #[substorage(v0)]
        accesscontrol: AccessControlComponent::Storage,
        #[substorage(v0)]
        src5: SRC5Component::Storage,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        CreatedUser: CreatedUser,
        #[flat]
        AccessControlEvent: AccessControlComponent::Event,
        #[flat]
        SRC5Event: SRC5Component::Event,
    }

    #[derive(Drop, starknet::Event)]
    struct CreatedUser {
        id: u64,
        address: ContractAddress,
    }

    #[constructor]
    fn constructor(ref self: ContractState, admin: ContractAddress) {
        self.accesscontrol.initializer();
        self.accesscontrol._grant_role(DEFAULT_ADMIN_ROLE, admin);
    }

    fn has_any_role(self: @ContractState, caller: ContractAddress, roles: Array<felt252>) -> bool {
        let mut i: u32 = 0;
        // let len = roles.len();

        let res = loop {
            // if len == i {
            //     break false;
            // }
            if self.accesscontrol.hasRole(*roles.at(i), caller) {
                break true;
            }
            i += 1;
        };
        res
    }

    #[abi(embed_v0)]
    impl DaoSphere of super::IDaoSphere<ContractState> {
        fn create_proposal(ref self: ContractState, description: ByteArray, end_time: u64) {
            assert(description.len() > 3, 'Description is too short');

            // let proposal_id = self.proposal_count.read();
            // self.proposal_count.write(proposal_id + 1);

            let caller = get_caller_address();
            let jose = call_contract_syscall(
                caller, selector!("is_valid_signature"), array![0_felt252, 0_felt252].span(),
            );

            assert(jose.is_err(), 'la cagaste chamo');
            // let juan2 = jose.expect('juan');

            // let res = *juan2.at(0);
        // println!("juan2 {:?}", res);

        }


        fn is_admin(self: @ContractState, caller: ContractAddress) -> bool {
            assert(caller.is_non_zero(), 'admin address is not valid');
            let isAdmin = self.accesscontrol.hasRole(DEFAULT_ADMIN_ROLE, caller);

            isAdmin
        }

        //handle user
        fn create_user(ref self: ContractState, userAddress: ContractAddress) {
            let caller = get_caller_address();
            assert(self.accesscontrol.hasRole(DEFAULT_ADMIN_ROLE, caller), 'Caller is not admin');
            assert(userAddress.is_non_zero(), 'Invalid user address');
            assert(!self.accesscontrol.hasRole(USER_ROLE, userAddress), 'User already exists');

            assert(userAddress != caller, 'Admin cannot be a user');

            self.accesscontrol.grantRole(USER_ROLE, userAddress);

            let user_id = self.user_count.read();
            self
                .users
                .entry(user_id)
                .write(User { user_id: user_id, address: userAddress, unlock: true });

            self.emit(CreatedUser { id: user_id, address: userAddress });
            self.user_count.write(user_id + 1);
        }

        fn user_exist(self: @ContractState, address: ContractAddress) -> bool {
            let isUser = self.accesscontrol.hasRole(USER_ROLE, address);

            isUser
        }

        fn get_users(self: @ContractState) -> Array<User> {
            let mut user_arr: Array<User> = ArrayTrait::<User>::new();

            let limit: u64 = self.user_count.read();
            let mut i: u64 = 0;

            loop {
                if i == limit {
                    break;
                }
                user_arr.append(self.users.entry(i).read());
                i += 1;
            };

            user_arr
        }

        fn modify_user(ref self: ContractState, user_id: u64) {
            let caller = get_caller_address();
            assert(self.accesscontrol.hasRole(DEFAULT_ADMIN_ROLE, caller), 'Caller is not admin');

            let mut user = self.users.entry(user_id).read();
            user.unlock = !user.unlock;
            self.users.entry(user_id).write(user);
        }
    }
}
