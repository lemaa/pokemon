
export default (array: any, params: any) => {
  try {
    const filters = {
      containText: (item: any) => item.name.includes(params.search),
      hasId: (item: any) => item.id === parseInt(params.search),
      isType: (item: any) => item.types.includes(params.type),
      heightXp: (item: any) => item.xp > 120,
      mediumXp: (item: any) => item.xp > 50 && item.xp <= 120,
      lowXp: (item: any) => item.xp < 50
    }
    const selected: Array<any> = []
    if (params.search && isNaN(parseInt(params.search))) {
      selected.push(filters.containText)
    } else if (params.search && !isNaN(parseInt(params.search))) {
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

    return filtredArray.sort((a: any, b: any) => {
      if (a.stats[1].base_stat !== b.stats[1].base_stat) {
        return b.stats[1].base_stat - a.stats[1].base_stat
      } else if (a.stats[2].base_stat !== b.stats[2].base_stat) {
        return b.stats[2].base_stat - a.stats[2].base_stat
      } else {
        return b.stats[5].base_stat - a.stats[5].base_stat
      }
    })
  } catch (error) {
    console.log(error)
  }
}
