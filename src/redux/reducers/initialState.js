export const initialState = {
  products: [],
  categories: [
    { category: 'All', icon: 'list' },
    { category: 'Tech', icon: 'laptop' },
    { category: 'Services', icon: 'build' },
    { category: 'Office', icon: 'folder' }
  ],
  categorySelected: {
    category: undefined
  }
}
