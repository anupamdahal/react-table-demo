const safeResolve = async (callback) => {
  try{
    const data = await callback;
    return [data, null]
  }catch (error){
    console.error(error)
    return [null, error]
  }
}

export { safeResolve }

