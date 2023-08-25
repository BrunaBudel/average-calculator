import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 54,
  },
  pageContent: {
    gap: 56,
    padding: 24,
    backgroundColor: '#E8EEF3',
    flex: 1,
  },
  form: {
    gap: 24,
    marginTop: 42,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
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
  icon: {
    color: '#000',
  },
  resultContainer: {
    backgroundColor: '#5CC2D9',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 36,
    gap: 18,
  },
  resultTitle: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  resultIsEmpty: {
    color: '#fff',
  },
  resultContent: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
})
