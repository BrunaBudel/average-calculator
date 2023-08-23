import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#283618',
    padding: 24,
  },
  pageContent: {
    gap: 56,
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
  form: {
    gap: 24,
    marginTop: 42,
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
  resultContainer: {
    backgroundColor: '#ccd5ae',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 36,
    gap: 18,
  },
  resultTitle: {
    color: '#606c38',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  resultIsEmpty: {
    color: '#606c38',
  },
  resultContent: {
    color: '#283618',
    fontSize: 36,
    fontWeight: 'bold',
  },
})
