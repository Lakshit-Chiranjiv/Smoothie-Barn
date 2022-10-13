import { Avatar, Group, Image, Text, Title, Card, Button } from '@mantine/core'
import { Link } from 'react-router-dom'

type SmoothieCardProps = {
    smoothieId: string,
    createdBy: string,
    name: string,
    price: number,
}

const SmoothieCard = ({smoothieId,createdBy,name,price}: SmoothieCardProps) => {
  return (
    <Card shadow="sm" p="lg" radius="md" my={20}>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Title order={4} sx={{fontFamily: 'Poppins, sans-serif'}}>{name}</Title>
        <Avatar src={null} alt="Vitaly Rtishchev" color="violet">{createdBy[0].toUpperCase()}</Avatar>
      </Group>

      <Text weight={600} color="green.6" sx={{fontFamily: 'Poppins, sans-serif'}}>̥₹ {price}</Text>

      <Link to={`/smoothies/${smoothieId}`} className='link'>
        <Button variant="light" color="pink" fullWidth mt="md" radius="md">
          Know More
        </Button>
      </Link>
    </Card>
  )
}

export default SmoothieCard