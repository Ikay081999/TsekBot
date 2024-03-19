const con = require('../connection/database');
const bcrypt = require('bcrypt');

//const salt = 10;

// exports.register = async (req, res) => {

//     const { email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const f_name = 'Chrissha';
//     const m_name = 'Espenueva';
//     const s_name = 'Balbin';
//     const sql = "INSERT INTO employee (f_name, m_name, s_name, email, password) VALUES (?,?,?,?,?)";

//     con.query(sql, [f_name, m_name, s_name, email, hashedPassword], (err, results) => {
//         if (err) return res.json({ Error: "Inserting data Error in server" });
//         return res.json({ Status: "Success" });
//     });
// }




exports.login = (req, res) => {

    const { email, password } = req.body;
    const sql = 'SELECT * FROM employee WHERE email = ?';

    con.query(sql, [email], async (err, results) => {
        if (err) return res.json({ Error: "Login error in server" });
        if (results.length > 0) {

            const validPassword = await bcrypt.compare(password, results[0].password);
            if (validPassword) {
                req.session.user = results[0];
                const user = req.session.user
                console.log(req.session.user);
                return res.json({ Login: true, user: user });
            }
            else {
                return res.json({ Error: "Incorrect Password" });
            }
        } else {
            return res.json({ Error: "No email existed" })
        }
    });

}


exports.authentication = (req, res) => {

    if (req.session.user) {
        return res.json({ valid: true, user: req.session.user })
    } else {
        return res.json({ valid: false })
    }
}


exports.logout = (req, res) => {
    if (req.session.user) {
        res.clearCookie("intern");
        req.session.destroy();
        num = 0;
        return res.json({ Status: "Successful Logout" });
    }
}


//controller to fetch type of concerns
exports.fetchConcerns = (req, res) => {
    const sql = "SELECT * FROM  concern_category"
    con.query(sql, (err, result) => {
        if (err) return res.json({ Error: "Error fetching Types of Concerns in server" });
        return res.json(result);
    });
}

//controller to add request agent
exports.requestAgent = (req, res) => {
    const { category, description } = req.body;
    const id = req.session.user.emp_id;

    const sql = "INSERT INTO request_agent(category_id, emp_id, concern_desc) VALUES (?,?,?)";

    con.query(sql, [category, id, description], (err) => {
        if (err) return res.json({ Error: "Error Inserting Data in server" });
        return res.json({ Status: "Successful Request for Agent" });
    });

}


//controller to check if a user  has ongoing request
//it will return the row count
exports.checkOngoingRequest = (req, res) => {
    const id = req.session.user.emp_id;
    const sql = "SELECT * FROM request_agent where emp_id = ? AND (status = ? OR status = ?)";
    con.query(sql, [id, 0, 1], (err, result) => {

        if (err) return res.json({ Error: "Error Fetching Data in server" });

        return res.json({ result: result.length });
    });
}

//controller to fetch the list of agent request of the user
// exports.fetchUserConcerns = (req, res) => {
//     const id = req.session.user.emp_id;
//     const sql = "SELECT * FROM request_agent where emp_id = ?";
//     con.query(sql, [id], (err, result) => {
//         if (err) return res.json({ Error: "Error Fetching Data in server" });
//         return res.json({ result });
//     });
// }


exports.fetchUserConcerns = (req, res) => {
    const id = req.session.user.emp_id;
    const sql = "SELECT request_agent.*, concern_category.category_name FROM request_agent INNER JOIN concern_category ON request_agent.category_id = concern_category.category_id where request_agent.emp_id = ? AND NOT request_agent.archive= ? ORDER BY request_agent.created_at DESC";
    con.query(sql, [id, 2], (err, result) => {
        if (err) return res.json({ Error: "Error fetching Types of Concerns in server" });
        return res.json(result);
    });
}