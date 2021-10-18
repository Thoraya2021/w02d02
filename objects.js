const checkValues = (obj, value) => {
    for (const key in obj){
        if (value === obj[key]){
            return true
        }
    }
    return false
  };