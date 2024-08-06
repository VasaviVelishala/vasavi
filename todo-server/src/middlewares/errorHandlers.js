const errorHandler = (err,  res) => {
    console.error(err.stack);
    res.status(500).json({ message: 'An error occurred', error: err.message });
  };
  
  export default errorHandler;
  