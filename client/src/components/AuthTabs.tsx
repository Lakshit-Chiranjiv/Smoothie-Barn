import { Tabs } from '@mantine/core';
import { IconUserPlus,IconUserCircle } from '@tabler/icons';
import AuthForm from './AuthForm';

function AuthTabs() {
  return (
    <Tabs variant='pills' defaultValue="signup" py={20} color='indigo.4'>
      <Tabs.List px={40} position='center'>
        <Tabs.Tab value="signup" icon={<IconUserPlus size={14} />}>Sign Up</Tabs.Tab>
        <Tabs.Tab value="login" icon={<IconUserCircle size={14} />}>Login</Tabs.Tab>
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