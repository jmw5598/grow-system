'using strict';

class ComponentController {

    constructor() {}

    create(req, res) {
        return res.status(200).send({ status: 'Component created' });
    }

    upate(req, res) {
        return res.status(200).send({ status: 'Component updated' });
    }

    delete(req, res) {
        return res.status(200).send({ status: 'Component removed' });
    }

}

module.exports = new ComponentController();