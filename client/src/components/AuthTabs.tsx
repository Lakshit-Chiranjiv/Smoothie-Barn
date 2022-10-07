import { Tabs } from '@mantine/core';
import { IconUserPlus,IconUserCircle } from '@tabler/icons';
import { userStateType } from '../lib/Types.js';
import AuthForm from './AuthForm';

type AuthTabsProps = {
  authTab: 'signup' | 'login',
  setAuthTab: React.Dispatch<React.SetStateAction<"signup" | "login">>,
  setUser: React.Dispatch<React.SetStateAction<userStateType | null>>
}

function AuthTabs({authTab,setAuthTab,setUser}: AuthTabsProps) {
  return (
    <Tabs variant='pills' defaultValue='signup' value={authTab} py={20} color='indigo.4'>
      <Tabs.List px={40} position='center'>
        <Tabs.Tab value="signup" icon={<IconUserPlus size={16} />} onClick={()=>setAuthTab('signup')}>Sign Up</Tabs.Tab>
        <Tabs.Tab value="login" icon={<IconUserCircle size={22} />} onClick={()=>setAuthTab('login')}>Login</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="signup" pt="xs">
        <AuthForm formFor='signup' setUser={setUser}/>
      </Tabs.Panel>

      <Tabs.Panel value="login" pt="xs">
        <AuthForm formFor='login' setUser={setUser}/>
      </Tabs.Panel>
    </Tabs>
  );
}

export default AuthTabs;