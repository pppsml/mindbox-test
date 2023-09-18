

export const generateId = () => {
  let id = "id" + Math.random().toString(16).slice(2)
    
  return id
}