const express = require("express");




router.get('/', (req, res) => {
 res.send({ data: [] });
});

export default router;