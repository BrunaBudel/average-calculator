import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#283618',
    padding: 24,
  },
  title: {
    color: '#fefae0',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  subtitle: {
    color: '#faedcd',
    fontSize: 16,
  },
  input: {
    height: 45,
    backgroundColor: '#606c38',
    borderRadius: 8,
    color: '#fefae0',
    padding: 16,
    fontSize: 16,
  },
  buttonText: {
    color: '#fefae0',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#bc6c25',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  icon: {
    color: '#fefae0',
  },
})
