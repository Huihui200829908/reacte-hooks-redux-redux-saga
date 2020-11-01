export function createActionTypes(base:any, actions:string[]= []) {
  return actions.reduce((acc:any, type:any) => {
    acc[type] = `${base}_${type}`

    return acc
  }, {})
}

export function createAction(type:string, data = {}) {
  return { type, payload: data }
}
