import AntDesign from '@expo/vector-icons/AntDesign';

type IconsProps = {
  size: number,
  color: 'white' | 'black'
}

export const LoginIcon = ({ size, color }: IconsProps) => (
  <AntDesign name="login" size={size} color={color} />
)

export const RegisterIcon = ({ size, color }: IconsProps) => (
  <AntDesign name="addusergroup" size={size} color={color} />
)

export const UserIcon = ({ size, color }: IconsProps) => (
  <AntDesign name="user" size={size} color={color} />
)

export const HomeIcon = ({ size, color }: IconsProps) => (
  <AntDesign name="home" size={size} color={color} />
)

