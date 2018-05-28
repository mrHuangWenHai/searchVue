import fetch from './fetch'

export const SearchData = data => fetch('/product/search',data,'get')
