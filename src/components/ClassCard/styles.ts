import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
  contentContainer: {
    width: 0,
    flexGrow: 1,
  },
})
