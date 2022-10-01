import { Tabs } from '@mantine/core';
import { IconUserPlus,IconUserCircle } from '@tabler/icons';
import AuthForm from './AuthForm';

type AuthTabsProps = {
  authTab: 'signup' | 'login',
  setAuthTab: React.Dispatch<React.SetStateAction<"signup" | "login">>
}

function AuthTabs({authTab,setAuthTab}: AuthTabsProps) {
  return (
    <Tabs variant='pills' defaultValue='signup' value={authTab} py={20} color='indigo.4'>
      <Tabs.List px={40} position='center'>
        <Tabs.Tab value="signup" icon={<IconUserPlus size={16} />} onClick={()=>setAuthTab('signup')}>Sign Up</Tabs.Tab>
        <Tabs.Tab value="login" icon={<IconUserCircle size={22} />} onClick={()=>setAuthTab('login')}>Login</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="signup" pt="xs">
        <AuthForm formFor='signup'/>
      </Tabs.Panel>

      <Tabs.Panel value="login" pt="xs">
        <AuthForm formFor='login'/>
      </Tabs.Panel>
    </Tabs>
  );
}

export default AuthTabs;