import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useScaffoldEventHistory } from '~~/hooks/scaffold-stark/useScaffoldEventHistory';
import {
  COUNT_CREATE_USER_KEY,
  DAO_ADDRESS_LOCALSTORAGE_KEY,
  DAO_DEPLOY_BLOCK_LOCALSTORAGE_KEY,
} from '~~/utils/Constants';
import { motion, AnimatePresence } from 'motion/react';

const Toast: NextPage = () => {
  //states
  const [addressParsed, setAddressParsed] = useState<`0x${string}`>('0x0');
  const [deployBlock, setDeployBlock] = useState<bigint>(0n);

  const [showToastUser, setShowToastUser] = useState<boolean>(false);
  const [showToastAdvisor, setShowToastAdvisor] = useState<boolean>(false);

  //smart contract
  const { data: userEvent } = useScaffoldEventHistory({
    contractName: 'DaoSphere',
    eventName: 'contracts::DaoSphere::DaoSphere::CreatedUser',
    fromBlock: deployBlock,
    contractAddress: addressParsed,
    watch: true,
  });

  const { data: advisorEvent } = useScaffoldEventHistory({
    contractName: 'DaoSphere',
    eventName: 'contracts::DaoSphere::DaoSphere::CreatedAdvisor',
    fromBlock: 0n,
    contractAddress: addressParsed,
    watch: true,
  });

  //efects
  useEffect(() => {
    const address = localStorage.getItem(DAO_ADDRESS_LOCALSTORAGE_KEY);
    const deployBlock = localStorage.getItem(DAO_DEPLOY_BLOCK_LOCALSTORAGE_KEY);
    setDeployBlock(BigInt(deployBlock ?? 0));

    if (address !== null) {
      const addressParsed: `0x${string}` = `0x${address.slice(2)}`;
      setAddressParsed(addressParsed);
    }
  }, []);

  useEffect(() => {
    const countUser = localStorage.getItem(COUNT_CREATE_USER_KEY);

    if (userEvent !== undefined) {
      console.log(userEvent);
      console.log('countUser', countUser);
      // if (userEvent.length > parseInt(countUser?.toString() ?? '1')) {
      setShowToastUser(true);
      // localStorage.setItem(
      //   COUNT_CREATE_USER_KEY,
      //   userEvent.length.toString()
      // );

      setTimeout(() => {
        setShowToastUser(false);
      }, 2000);
      // }
    }
  }, [userEvent]);

  // useEffect(() => {
  //   const countUser = localStorage.getItem(COUNT_CREATE_USER_KEY);

  //   if (userEvent !== undefined) {
  //     if (userEvent.length > parseInt(countUser?.toString() ?? '0')) {
  //       setShowToastAdvisor(true);
  //       localStorage.setItem('count', userEvent.length.toString());
  //     }
  //   }

  //   setTimeout(() => {
  //     setShowToastAdvisor(false);
  //   }, 2000);
  // }, [userEvent]);

  return (
    <>
      <AnimatePresence>
        {showToastUser && (
          <motion.div
            className='toast'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='alert alert-info'>
              <span>New user created</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* <AnimatePresence>
        {showToast && (
          <motion.div
            className='toast'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='alert alert-info'>
              <span>New user created</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
};

export default Toast;
