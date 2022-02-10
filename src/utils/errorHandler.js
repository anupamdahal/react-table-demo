const safeResolve = async (callback) => {
  try{
    const data = await callback;
    return [data, null]
  }catch (error){
    console.log(error)
    return [null, error]
  }
}

export { safeResolve }

