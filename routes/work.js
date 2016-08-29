var express = require('express');
var router = express.Router();

/* =====================================
  
   ===================================== */


/* GET work listing. */
router.get('/', function (req, res) {
    res.render('./pages/HTML1.html', { projet: "api.zéro" });
});

// tables simples
router.get('/A2', function (req, res) {
    res.render('./pages/page-1.html', { title: "Page 1" });
 //  res.render('./pages/microphone-streaming-auto-stop.html', { title: "Page 1"});
});

router.get('/A1', function (req, res) {
    res.render('./pages/HTML1.html', { projet: "Codepen Embded" });
});

router.get('/A3', function (req, res) {
    res.render('./page-lab/material-design-stopwatch-alarm-timer.html', {});
});

// Material Design
router.get('/A4', function (req, res) {
    res.render('./page-lab/bootstrap-elements.html', {});
});

// Page Template Material Design
router.get('/pagePTMD', function (req, res) {
    res.render('./pages/page_template.html', { title: "page.template" });
});

// ====================================
// 
// ====================================

// ....
router.get('/B0', function (req, res) {
    res.render('./pages/page-B0.html', { title: "Page B0" });
});

router.get('/B1', function (req, res) {
    res.render('./pages/page-B0-Socket.html', { title: "Page B1" });
});

// ====================================
// 
// ====================================

/* Get show page. */
router.get('/kb/:id', function (req, res, next) {
    console.log(req.params)
   
    if (req.params.id == "problems") {
        res.render('./pages/page-' + 1 + '.html', { title: "Problems" });
        return false
    }
    if (req.params.id == "autocomplete") {
        res.render('./pages/page-' + req.params.id + '.html', { projet: "Autocomplete" });
        return false
    }
    if (req.params.id == "autocomplete-simple") {
        res.render('./pages/autocomplete/index.html', { });  
        return false
    }
    if (req.params.id == "datatable") {
        res.render('./pages/dataTables/ajax.html', {});
      
        return false
    }
    res.render('./pages/page-'+ req.params.id + '.html', { projet: "kb.ai" });
});

/* POST ... page. */
router.post('/login', function (req, res) {
    var user_name = req.body.user;
    var password = req.body.password;
    console.log("From Client POST request: User name = " + user_name + " and password is " + password);
    res.end("yes");
});

function store_json() { 
    
return {
    "draw": 1,
    "recordsTotal": 10,
    "recordsFiltered": 15,
    "data": [
        [
            "Airi",
            "Satou",
            "Accountant",
            "Tokyo",
            "28th Nov 08",
            "$162,700"
        ],
        [
            "Angelica",
            "Ramos",
            "Chief Executive Officer (CEO)",
            "London",
            "9th Oct 09",
            "$1,200,000"
        ],
        [
            "Ashton",
            "Cox",
            "Junior Technical Author",
            "San Francisco",
            "12th Jan 09",
            "$86,000"
        ],
        [
            "Bradley",
            "Greer",
            "Software Engineer",
            "London",
            "13th Oct 12",
            "$132,000"
        ],
        [
            "Brenden",
            "Wagner",
            "Software Engineer",
            "San Francisco",
            "7th Jun 11",
            "$206,850"
        ],
        [
            "Brielle",
            "Williamson",
            "Integration Specialist",
            "New York",
            "2nd Dec 12",
            "$372,000"
        ],
        [
            "Bruno",
            "Nash",
            "Software Engineer",
            "London",
            "3rd May 11",
            "$163,500"
        ],
        [
            "Caesar",
            "Vance",
            "Pre-Sales Support",
            "New York",
            "12th Dec 11",
            "$106,450"
        ],
        [
            "Cara",
            "Stevens",
            "Sales Assistant",
            "New York",
            "6th Dec 11",
            "$145,600"
        ],
        [
            "Caravane 0",
            "Stevens",
            "Sales Assistant",
            "New York",
            "6th Dec 11",
            "$145,600"
        ],
        [
            "Caravane 1",
            "Stevens",
            "Sales Assistant",
            "New York",
            "6th Dec 11",
            "$145,600"
        ],
        [
            "Caravane 2",
            "Stevens",
            "Sales Assistant",
            "New York",
            "6th Dec 11",
            "$145,600"
        ],
        [
            "Cedric",
            "Kelly",
            "Senior Javascript Developer",
            "Edinburgh",
            "29th Mar 12",
            "$433,060"
        ],
        [
            "Caesar 0",
            "Vance",
            "Pre-Sales Support",
            "New York",
            "12th Dec 11",
            "$106,450"
        ],
        [
            "Caesar 1",
            "Vance",
            "Pre-Sales Support",
            "New York",
            "12th Dec 11",
            "$106,450"
        ],
        [
            "Caesar 2",
            "Vance",
            "Pre-Sales Support",
            "New York",
            "12th Dec 11",
            "$106,450"
        ]
    ]
};
}

/* Get ... page. */
router.get('/data-json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(store_json()));
});


// ====================================
// 
// ====================================

router.get('/nina', function (req, res) {
    res.render('./nina-2/nina_index.html', { title: "Nina" });
});



module.exports = router;

/* ==========================================================================
   x. General - Setting up some base styles
   ========================================================================== */
