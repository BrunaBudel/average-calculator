import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 54,
  },
  list: {
    width: '100%',
    flex: 1,
    borderRadius: 32,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  header: {
    paddingBottom: 16,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subtitle: {
    color: '#656F77',
    fontSize: 16,
  },
  classContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    gap: 4,
    marginBottom: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  classIcon: {
    backgroundColor: '#C9B1E0',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 8,
  },
  className: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  classDescription: {
    color: '#656F77',
    fontSize: 12,
  },
})
