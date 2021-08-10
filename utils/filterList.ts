import Pokemon from '~/types/pokemon'

export default (array: Array<Pokemon>, params: {searchText:string, type: string, xp: string}) => {
  try {
    const filters = {
      containText: (item: Pokemon) => item.name.includes(params.searchText),
      hasId: (item: Pokemon) => item.id === parseInt(params.searchText),
      isType: (item: Pokemon) => item.types.includes(params.type),
      heightXp: (item: Pokemon) => item.xp > 120,
      mediumXp: (item: Pokemon) => item.xp > 50 && item.xp <= 120,
      lowXp: (item: Pokemon) => item.xp < 50
    }
    const selected: Array<any> = []
    if (params.searchText && isNaN(parseInt(params.searchText))) {
      selected.push(filters.containText)
    } else if (params.searchText && !isNaN(parseInt(params.searchText))) {
      selected.push(filters.hasId)
    }
    if (params.type) {
      selected.push(filters.isType)
    }

    if (params.xp && params.xp === 'high') {
      selected.push(filters.heightXp)
    } else if (params.xp && params.xp === 'medium') {
      selected.push(filters.mediumXp)
    } else if (params.xp && params.xp === 'low') {
      selected.push(filters.lowXp)
    }
    const filtredArray = array.filter((item: any) => selected.every(f => f(item)))
    if (filtredArray.length === 0) {
      return []
    }
    return filtredArray.sort((a: Pokemon, b: Pokemon) => {
      if (a.stats[1].baseStat !== b.stats[1].baseStat) {
        return b.stats[1].baseStat - a.stats[1].baseStat
      } else if (a.stats[2].baseStat !== b.stats[2].baseStat) {
        return b.stats[2].baseStat - a.stats[2].baseStat
      } else {
        return b.stats[5].baseStat - a.stats[5].baseStat
      }
    })
  } catch (error) {
    console.warn(error)
  }
}
