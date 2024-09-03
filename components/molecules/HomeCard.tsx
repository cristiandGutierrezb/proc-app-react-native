import { View, StyleSheet } from "react-native"
import { Link } from "expo-router"

type HomeCardProps = {
  text: string,
  href: string,
  color: 'red' | 'green' | 'blue'
}

export default function HomeCard({ text, href, color }: HomeCardProps) {
  return (
    <View style={[styles.button, styles[color]]}>
      <Link href={href} style={styles.link}>
        { text }
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: 100,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto'
  },
  link: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  red: {
    backgroundColor: 'red'
  },
  green: {
    backgroundColor: 'green'
  },
  blue: {
    backgroundColor: 'blue'
  }
})
