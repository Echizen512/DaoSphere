/**
 * This file is autogenerated by Scaffold-Stark.
 * You should not edit it manually or your changes might be overwritten.
 */

const deployedContracts = {
  devnet: {
    DaoSphereFabric: {
      address:
        "0x4ce6c8b216839a0763cb93b83e04f1d3a62a3d0b707042074f23167bb96acd6",
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
          ],
        },
      ],
      classHash:
        "0x33b5076efbd26d4faa7219b160e3193ff9e42af45ed2ccb2036d60c009c245a",
    },
    DaoSphere: {
      address:
        "0x357d33dfda666e926e1baee331271a86f6140825e99041da292a0b9b05e76b4",
      abi: [
        {
          type: "impl",
          name: "DaoSphere",
          interface_name: "contracts::DaoSphere::IDaoSphere",
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
          ],
        },
        {
          type: "interface",
          name: "contracts::DaoSphere::IDaoSphere",
          items: [
            {
              type: "function",
              name: "create_proposal",
              inputs: [
                {
                  name: "description",
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
              name: "user_exist",
              inputs: [
                {
                  name: "address",
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
          ],
        },
        {
          type: "event",
          name: "contracts::DaoSphere::DaoSphere::CreatedUser",
          kind: "struct",
          members: [
            {
              name: "id",
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
        "0x5b453a14e8d3b21208f0e1a518db2b6eb06435b54e0e8f89b7697824bbb4d01",
    },
  },
} as const;

export default deployedContracts;
