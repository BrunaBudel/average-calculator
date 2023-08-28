import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  counter: {
    gap: 8,
  },
  button: {
    backgroundColor: '#CDE41E',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 8,
    color: '#656F77',
    padding: 16,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#656F77',
  },
  inputError: {
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 8,
    color: '#656F77',
    padding: 16,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#bc4749',
  },
  error: {
    color: '#bc4749',
    marginTop: 2,
  },
  label: {
    color: '#000',
    fontSize: 18,
    marginBottom: 2,
  },
})
