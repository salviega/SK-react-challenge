import { Input } from 'antd'
import './PokeShopSearcher.scss'

export function PokeShopSearcher() {
  return <Input.Search className='searcher' placeholder='search...'/>
}