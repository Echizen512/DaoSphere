/**
 * This file is autogenerated by Scaffold-Stark.
 * You should not edit it manually or your changes might be overwritten.
 */

const deployedContracts = {
  devnet: {
    DaoSphereFabric: {
      address:
        "0x8a4ea5f0a7415380941a70dc05a1ea3a78252f14d83a80448a6c1ba2567da6",
      abi: [
        {
          type: "impl",
          name: "DaoSphereFabric",
          interface_name: "contracts::DaoSphereFabric::IDaoSphereFabric",
        },
        {
          type: "struct",
          name: "core::byte_array::ByteArray",
          members: [
            {
              name: "data",
              type: "core::array::Array::<core::bytes_31::bytes31>",
            },
            {
              name: "pending_word",
              type: "core::felt252",
            },
            {
              name: "pending_word_len",
              type: "core::integer::u32",
            },
          ],
        },
        {
          type: "interface",
          name: "contracts::DaoSphereFabric::IDaoSphereFabric",
          items: [
            {
              type: "function",
              name: "create_dao",
              inputs: [
                {
                  name: "name_dao",
                  type: "core::byte_array::ByteArray",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "dao_id",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u64",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_deploy_block",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u64",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "add_owner",
              inputs: [
                {
                  name: "owner",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "withdraw",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [
            {
              name: "owner",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::DaoSphereFabric::DaoSphereFabric::DaoCreated",
          kind: "struct",
          members: [
            {
              name: "dao_id",
              type: "core::integer::u64",
              kind: "data",
            },
            {
              name: "name_dao",
              type: "core::byte_array::ByteArray",
              kind: "data",
            },
            {
              name: "dao_address",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
            {
              name: "deploy_block",
              type: "core::integer::u64",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::DaoSphereFabric::DaoSphereFabric::OwnerAdded",
          kind: "struct",
          members: [
            {
              name: "owner_id",
              type: "core::integer::u64",
              kind: "data",
            },
            {
              name: "owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::DaoSphereFabric::DaoSphereFabric::Event",
          kind: "enum",
          variants: [
            {
              name: "DaoCreated",
              type: "contracts::DaoSphereFabric::DaoSphereFabric::DaoCreated",
              kind: "nested",
            },
            {
              name: "OwnerAdded",
              type: "contracts::DaoSphereFabric::DaoSphereFabric::OwnerAdded",
              kind: "nested",
            },
          ],
        },
      ],
      classHash:
        "0x1d0a32f99efcb33ce52167b7149a14380fb2b02109064afd30b7e4e09458009",
    },
    DaoSphere: {
      address:
        "0x708977d6eec836a37790790c0dbc993092a6b0e0e31310795abf295b4a5a9d9",
      abi: [
        {
          type: "impl",
          name: "DaoSphere",
          interface_name: "contracts::DaoSphere::IDaoSphere",
        },
        {
          type: "enum",
          name: "core::bool",
          variants: [
            {
              name: "False",
              type: "()",
            },
            {
              name: "True",
              type: "()",
            },
          ],
        },
        {
          type: "enum",
          name: "contracts::models::DaoSphereModel::VoteCreationAccess",
          variants: [
            {
              name: "Admin",
              type: "core::bool",
            },
            {
              name: "AdminOrAdvisor",
              type: "core::bool",
            },
            {
              name: "All",
              type: "core::bool",
            },
          ],
        },
        {
          type: "struct",
          name: "contracts::models::DaoSphereModel::User",
          members: [
            {
              name: "user_id",
              type: "core::integer::u64",
            },
            {
              name: "address",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "unlock",
              type: "core::bool",
            },
            {
              name: "date",
              type: "core::integer::u64",
            },
          ],
        },
        {
          type: "struct",
          name: "contracts::models::DaoSphereModel::Advisor",
          members: [
            {
              name: "advisor_id",
              type: "core::integer::u64",
            },
            {
              name: "address",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "unlock",
              type: "core::bool",
            },
            {
              name: "date",
              type: "core::integer::u64",
            },
          ],
        },
        {
          type: "struct",
          name: "core::byte_array::ByteArray",
          members: [
            {
              name: "data",
              type: "core::array::Array::<core::bytes_31::bytes31>",
            },
            {
              name: "pending_word",
              type: "core::felt252",
            },
            {
              name: "pending_word_len",
              type: "core::integer::u32",
            },
          ],
        },
        {
          type: "struct",
          name: "contracts::models::DaoSphereModel::Proposal",
          members: [
            {
              name: "proposal_id",
              type: "core::integer::u64",
            },
            {
              name: "creator_address",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "title",
              type: "core::byte_array::ByteArray",
            },
            {
              name: "start_time",
              type: "core::integer::u64",
            },
            {
              name: "end_time",
              type: "core::integer::u64",
            },
          ],
        },
        {
          type: "interface",
          name: "contracts::DaoSphere::IDaoSphere",
          items: [
            {
              type: "function",
              name: "proposal_count",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u64",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "vote_selected_access",
              inputs: [],
              outputs: [
                {
                  type: "contracts::models::DaoSphereModel::VoteCreationAccess",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "dao_sphere_fabric",
              inputs: [],
              outputs: [
                {
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "is_admin",
              inputs: [
                {
                  name: "caller",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "is_advisor",
              inputs: [
                {
                  name: "caller",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "is_user",
              inputs: [
                {
                  name: "caller",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "create_user",
              inputs: [
                {
                  name: "userAddress",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_users",
              inputs: [],
              outputs: [
                {
                  type: "core::array::Array::<contracts::models::DaoSphereModel::User>",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "modify_user",
              inputs: [
                {
                  name: "user_id",
                  type: "core::integer::u64",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_user",
              inputs: [
                {
                  name: "userAddress",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "contracts::models::DaoSphereModel::User",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "create_advisor",
              inputs: [
                {
                  name: "advisorAddress",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_advisors",
              inputs: [],
              outputs: [
                {
                  type: "core::array::Array::<contracts::models::DaoSphereModel::Advisor>",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "modify_advisor",
              inputs: [
                {
                  name: "advisor_id",
                  type: "core::integer::u64",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_advisor",
              inputs: [
                {
                  name: "advisorAddress",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "contracts::models::DaoSphereModel::Advisor",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "modify_vote_creation_access",
              inputs: [
                {
                  name: "new_access",
                  type: "core::byte_array::ByteArray",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "create_proposal_basic",
              inputs: [
                {
                  name: "title",
                  type: "core::byte_array::ByteArray",
                },
                {
                  name: "end_time",
                  type: "core::integer::u64",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_my_proposals",
              inputs: [
                {
                  name: "caller",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::array::Array::<contracts::models::DaoSphereModel::Proposal>",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "set_vote_proposal",
              inputs: [
                {
                  name: "proposal_id",
                  type: "core::integer::u64",
                },
                {
                  name: "vote_choice",
                  type: "core::bool",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "impl",
          name: "AccessControlImpl",
          interface_name:
            "openzeppelin_access::accesscontrol::interface::IAccessControl",
        },
        {
          type: "interface",
          name: "openzeppelin_access::accesscontrol::interface::IAccessControl",
          items: [
            {
              type: "function",
              name: "has_role",
              inputs: [
                {
                  name: "role",
                  type: "core::felt252",
                },
                {
                  name: "account",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_role_admin",
              inputs: [
                {
                  name: "role",
                  type: "core::felt252",
                },
              ],
              outputs: [
                {
                  type: "core::felt252",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "grant_role",
              inputs: [
                {
                  name: "role",
                  type: "core::felt252",
                },
                {
                  name: "account",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "revoke_role",
              inputs: [
                {
                  name: "role",
                  type: "core::felt252",
                },
                {
                  name: "account",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "renounce_role",
              inputs: [
                {
                  name: "role",
                  type: "core::felt252",
                },
                {
                  name: "account",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "impl",
          name: "SRC5Impl",
          interface_name: "openzeppelin_introspection::interface::ISRC5",
        },
        {
          type: "interface",
          name: "openzeppelin_introspection::interface::ISRC5",
          items: [
            {
              type: "function",
              name: "supports_interface",
              inputs: [
                {
                  name: "interface_id",
                  type: "core::felt252",
                },
              ],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [
            {
              name: "admin",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "dao_sphere_fabric",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::DaoSphere::DaoSphere::CreatedUser",
          kind: "struct",
          members: [
            {
              name: "user_id",
              type: "core::integer::u64",
              kind: "data",
            },
            {
              name: "address",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::DaoSphere::DaoSphere::CreatedAdvisor",
          kind: "struct",
          members: [
            {
              name: "advisor_id",
              type: "core::integer::u64",
              kind: "data",
            },
            {
              name: "address",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::DaoSphere::DaoSphere::CreatedProposal",
          kind: "struct",
          members: [
            {
              name: "proposal_id",
              type: "core::integer::u64",
              kind: "data",
            },
            {
              name: "creator_address",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
            {
              name: "title",
              type: "core::byte_array::ByteArray",
              kind: "data",
            },
            {
              name: "start_time",
              type: "core::integer::u64",
              kind: "data",
            },
            {
              name: "end_time",
              type: "core::integer::u64",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::DaoSphere::DaoSphere::VotedProposal",
          kind: "struct",
          members: [
            {
              name: "proposal_id",
              type: "core::integer::u64",
              kind: "data",
            },
            {
              name: "voter_address",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
            {
              name: "vote_choice",
              type: "core::bool",
              kind: "data",
            },
            {
              name: "date",
              type: "core::integer::u64",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleGranted",
          kind: "struct",
          members: [
            {
              name: "role",
              type: "core::felt252",
              kind: "data",
            },
            {
              name: "account",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
            {
              name: "sender",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleRevoked",
          kind: "struct",
          members: [
            {
              name: "role",
              type: "core::felt252",
              kind: "data",
            },
            {
              name: "account",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
            {
              name: "sender",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleAdminChanged",
          kind: "struct",
          members: [
            {
              name: "role",
              type: "core::felt252",
              kind: "data",
            },
            {
              name: "previous_admin_role",
              type: "core::felt252",
              kind: "data",
            },
            {
              name: "new_admin_role",
              type: "core::felt252",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::Event",
          kind: "enum",
          variants: [
            {
              name: "RoleGranted",
              type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleGranted",
              kind: "nested",
            },
            {
              name: "RoleRevoked",
              type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleRevoked",
              kind: "nested",
            },
            {
              name: "RoleAdminChanged",
              type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleAdminChanged",
              kind: "nested",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin_introspection::src5::SRC5Component::Event",
          kind: "enum",
          variants: [],
        },
        {
          type: "event",
          name: "contracts::DaoSphere::DaoSphere::Event",
          kind: "enum",
          variants: [
            {
              name: "CreatedUser",
              type: "contracts::DaoSphere::DaoSphere::CreatedUser",
              kind: "nested",
            },
            {
              name: "CreatedAdvisor",
              type: "contracts::DaoSphere::DaoSphere::CreatedAdvisor",
              kind: "nested",
            },
            {
              name: "CreatedProposal",
              type: "contracts::DaoSphere::DaoSphere::CreatedProposal",
              kind: "nested",
            },
            {
              name: "VotedProposal",
              type: "contracts::DaoSphere::DaoSphere::VotedProposal",
              kind: "nested",
            },
            {
              name: "AccessControlEvent",
              type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::Event",
              kind: "flat",
            },
            {
              name: "SRC5Event",
              type: "openzeppelin_introspection::src5::SRC5Component::Event",
              kind: "flat",
            },
          ],
        },
      ],
      classHash:
        "0x1f98ace99d1623d500a507b8d66cce28261f6e8a64483b5c5067ae82fd2288a",
    },
  },
} as const;

export default deployedContracts;
