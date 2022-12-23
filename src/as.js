const sort = {
  init: '',
  type: {
    price: 'цене',
    title: 'алфавиту',
    rating: 'популярности'
  }
}

console.log(Object.values(sort.type));

sort.init = Object.keys(sort.type).find(item => sort.type[item] === 'алфавиту' ? item : '')

console.log(sort.init)