var selectedAnswers = [0, 0, 0];
var questionFeedback = [["Feedback: Incorrect. While there is nothing wrong with changing passwords, that is not the biggest concern here.","Feedback: Incorrect. Letting an employee back up documents they do not need could increase the risk of data exfiltration. It does not matter how secure their storage service is. They could give documents full of important company secrets to others.","Feedback: Correct! This implements least privilege access and prevents privilege creep. Reference 7."],["Feedback: Correct! Even if a cybercriminal has access to the system, their freedom will be severely limited.","Feedback: Incorrect. Forcing people to change their passwords periodically can encourage them to create weak passwords that are hard to remember. Reference 10. Additionally, this will do nothing to slow down the cybercriminal if they legitimately have an account but decide to misuse it (for example, if they are a disgruntled employee).","Feedback: Incorrect. A VPN is aimed at protecting internet connection privacy, not internet content privacy. If the cybercriminal has access to an account, they can access all the content and privileges associated with it (for example, if it is an email account, emails, contacts, etc.)."],["Feedback: Correct! This is ZTA. People get what they need, and cybercriminals do not.", "Feedback: Incorrect. This describes the old model of cybersecurity. Reference 12. If all a cybercriminal needs to succeed is some logon credentials, they will succeed.", "Feedback: Incorrect. This is the exact opposite of zero trust architecture. Always trusting everything all the time is dangerous."]];

function outline(visibility, element1, element2) {
    if(visibility == 0) {
        document.getElementById(element1).setAttribute("visible", false);
    } else {
        document.getElementById(element1).setAttribute("visible", true);
        document.getElementById(element1).setAttribute("opacity", visibility);
    }
}

AFRAME.registerComponent('sec10answer1', {
    init: function () {
        var buttonEl = this.buttonEl = document.querySelector('#sec10outIn1');
        this.onClick = this.onClick.bind(this);
        buttonEl.addEventListener('click', this.onClick);
    },

    onClick: function (evt) {
        selectAnswer(1);
    },

});

AFRAME.registerComponent('sec10answer2', {
    init: function () {
        var buttonEl = this.buttonEl = document.querySelector('#sec10outIn2');
        this.onClick = this.onClick.bind(this);
        buttonEl.addEventListener('click', this.onClick);
    },

    onClick: function (evt) {
        selectAnswer(2);
    },
});

AFRAME.registerComponent('sec10answer3', {
    init: function () {
        var buttonEl = this.buttonEl = document.querySelector('#sec10outIn3');
        this.onClick = this.onClick.bind(this);
        buttonEl.addEventListener('click', this.onClick);
    },

    onClick: function (evt) {
        selectAnswer(3);
    },
});

AFRAME.registerComponent('sec11answer1', {
    init: function () {
        var buttonEl = this.buttonEl = document.querySelector('#sec11outIn1');
        this.onClick = this.onClick.bind(this);
        buttonEl.addEventListener('click', this.onClick);
    },

    onClick: function (evt) {
        selectAnswer(4);
    },
    
});

AFRAME.registerComponent('sec11answer2', {
    init: function () {
        var buttonEl = this.buttonEl = document.querySelector('#sec11outIn2');
        this.onClick = this.onClick.bind(this);
        buttonEl.addEventListener('click', this.onClick);
    },

    onClick: function (evt) {
        selectAnswer(5);
    },
    
});

AFRAME.registerComponent('sec11answer3', {
    init: function () {
        var buttonEl = this.buttonEl = document.querySelector('#sec11outIn3');
        this.onClick = this.onClick.bind(this);
        buttonEl.addEventListener('click', this.onClick);
    },

    onClick: function (evt) {
        selectAnswer(6);
    },
    
});

AFRAME.registerComponent('sec12answer1', {
    init: function () {
        var buttonEl = this.buttonEl = document.querySelector('#sec12outIn1');
        this.onClick = this.onClick.bind(this);
        buttonEl.addEventListener('click', this.onClick);
    },

    onClick: function (evt) {
        selectAnswer(7);
    },
    
});

AFRAME.registerComponent('sec12answer2', {
    init: function () {
        var buttonEl = this.buttonEl = document.querySelector('#sec12outIn2');
        this.onClick = this.onClick.bind(this);
        buttonEl.addEventListener('click', this.onClick);
    },

    onClick: function (evt) {
        selectAnswer(8);
    },
    
});

AFRAME.registerComponent('sec12answer3', {
    init: function () {
        var buttonEl = this.buttonEl = document.querySelector('#sec12outIn3');
        this.onClick = this.onClick.bind(this);
        buttonEl.addEventListener('click', this.onClick);
    },

    onClick: function (evt) {
        selectAnswer(9);
    },
    
});

AFRAME.registerComponent('sec10check', {
    init: function () {
        var buttonEl = this.buttonEl = document.querySelector('#sec10check');
        this.onClick = this.onClick.bind(this);
        buttonEl.addEventListener('click', this.onClick);
    },

    onClick: function (evt) {
        check("sec10", 0);
    },
});

AFRAME.registerComponent('sec11check', {
    init: function () {
        var buttonEl = this.buttonEl = document.querySelector('#sec11check');
        this.onClick = this.onClick.bind(this);
        buttonEl.addEventListener('click', this.onClick);
    },

    onClick: function (evt) {
        check("sec11", 1);
    },
});

AFRAME.registerComponent('sec12check', {
    init: function () {
        var buttonEl = this.buttonEl = document.querySelector('#sec12check');
        this.onClick = this.onClick.bind(this);
        buttonEl.addEventListener('click', this.onClick);
    },

    onClick: function (evt) {
        check("sec12", 2);
    },
});

function check(sec, questionNum) {

    if(selectedAnswers[questionNum] != 0) {
            document.getElementById(sec + "ansPanel").setAttribute("visible", false);
            document.getElementById(sec + "outIn1").removeAttribute("data-clickable");
            document.getElementById(sec + "outIn2").removeAttribute("data-clickable");
            document.getElementById(sec + "outIn3").removeAttribute("data-clickable");
            document.getElementById(sec + "ans1").removeAttribute("tabindex");
            document.getElementById(sec + "ans2").removeAttribute("tabindex");
            document.getElementById(sec + "ans3").removeAttribute("tabindex");
            document.getElementById(sec + "check").removeAttribute("tabindex");
            document.getElementById(sec + "reset").setAttribute("tabindex", "0");
            document.getElementById(sec + "reset").setAttribute("visible", true);
            document.getElementById(sec + "reset").setAttribute("data-clickable", "");
            document.getElementById(sec + "reset").setAttribute("position", {x: -9.29, y: 2.12711, z: 14.43});
            document.getElementById(sec + "check").setAttribute("position", {x: -9.29801, y: 2.12711, z: 14.44283});
            if(selectedAnswers[questionNum] == 1) {
                document.getElementById(sec + "feedback1").setAttribute("visible", true);
                document.getElementById(sec + "feedback1").innerHTML= questionFeedback[questionNum][0];
            }
            if(selectedAnswers[questionNum] == 2) {
                document.getElementById(sec + "feedback2").setAttribute("visible", true);
                document.getElementById(sec + "feedback2").innerHTML= questionFeedback[questionNum][1];
            }
            if(selectedAnswers[questionNum] == 3) {
                document.getElementById(sec + "feedback3").setAttribute("visible", true);
                document.getElementById(sec + "feedback3").innerHTML= questionFeedback[questionNum][2];
            }
    }
}

AFRAME.registerComponent('sec10reset', {
    init: function () {
        var buttonEl = this.buttonEl = document.querySelector('#sec10reset');
        this.onClick = this.onClick.bind(this);
        buttonEl.addEventListener('click', this.onClick);
    },

    onClick: function (evt) {
        hideFeedback("sec10");
        activateCheckButton("sec10", false);
        document.getElementById("sec10ansPanel").focus();
    },
});

AFRAME.registerComponent('sec11reset', {
    init: function () {
        var buttonEl = this.buttonEl = document.querySelector('#sec11reset');
        this.onClick = this.onClick.bind(this);
        buttonEl.addEventListener('click', this.onClick);
    },

    onClick: function (evt) {
        hideFeedback("sec11");
        activateCheckButton("sec11", false);
        document.getElementById("sec11ansPanel").focus();
    },
});

AFRAME.registerComponent('sec12reset', {
    init: function () {
        var buttonEl = this.buttonEl = document.querySelector('#sec12reset');
        this.onClick = this.onClick.bind(this);
        buttonEl.addEventListener('click', this.onClick);
    },

    onClick: function (evt) {
        hideFeedback("sec12");
        activateCheckButton("sec12", false);
        document.getElementById("sec12ansPanel").focus();
    },
});

function hideFeedback(sec) {
    document.getElementById(sec + "ansPanel").setAttribute("visible", true);
    document.getElementById(sec + "feedback1").setAttribute("visible", false);
    document.getElementById(sec + "feedback2").setAttribute("visible", false);
    document.getElementById(sec + "feedback3").setAttribute("visible", false);
    document.getElementById(sec + "feedback1").innerHTML="";
    document.getElementById(sec + "feedback2").innerHTML="";
    document.getElementById(sec + "feedback3").innerHTML="";
    document.getElementById(sec + "ans1").setAttribute("aria-checked", "false");
    document.getElementById(sec + "ans2").setAttribute("aria-checked", "false");
    document.getElementById(sec + "ans3").setAttribute("aria-checked", "false");
    document.getElementById(sec + "ans1").setAttribute("tabindex", "0");
    document.getElementById(sec + "ans2").setAttribute("tabindex", "0");
    document.getElementById(sec + "ans3").setAttribute("tabindex", "0");
    document.getElementById(sec + "outIn1").setAttribute("data-clickable", "");
    document.getElementById(sec + "outIn2").setAttribute("data-clickable", "");
    document.getElementById(sec + "outIn3").setAttribute("data-clickable", "");
    document.getElementById(sec + "reset").setAttribute("visible", false);
    document.getElementById(sec + "reset").removeAttribute("data-clickable");
    document.getElementById(sec + "reset").removeAttribute("tabindex");
    document.getElementById(sec + "check").setAttribute("tabindex", "0");
    document.getElementById(sec + "check").removeAttribute("data-clickable");
    document.getElementById(sec + "check").setAttribute("aria-disabled", true);
    document.getElementById(sec + "reset").setAttribute("position", {x: -9.29801, y: 2.12711, z: 14.44283});
    document.getElementById(sec + "check").setAttribute("position", {x: -9.29, y: 2.12711, z: 14.43});
    selectedAnswers[0] = 0;
    outline(0, sec + "out1", sec + "outIn1");
    outline(0, sec + "out2", sec + "outIn2");
    outline(0, sec + "out3", sec + "outIn3");
}

function selectAnswer(num) {
    if(num == 1) {
        selectedAnswers[0] = 1;
        document.querySelector('#sec10ans1').setAttribute("aria-checked", "true");
        document.querySelector('#sec10ans2').setAttribute("aria-checked", "false");
        document.querySelector('#sec10ans3').setAttribute("aria-checked", "false");
        outline(0.99, "sec10out1", "sec10outIn1");
        outline(0, "sec10out2", "sec10outIn2");
        outline(0, "sec10out3", "sec10outIn3");
        activateCheckButton("sec10", true);
    }
    if(num == 2) {
        selectedAnswers[0] = 2;
        document.querySelector('#sec10ans1').setAttribute("aria-checked", "false");
        document.querySelector('#sec10ans2').setAttribute("aria-checked", "true");
        document.querySelector('#sec10ans3').setAttribute("aria-checked", "false");
        outline(0, "sec10out1", "sec10outIn1");
        outline(0.99, "sec10out2", "sec10outIn2");
        outline(0, "sec10out3", "sec10outIn3");
        activateCheckButton("sec10", true);
    }
    if(num == 3) {
        selectedAnswers[0] = 3;
        document.querySelector('#sec10ans1').setAttribute("aria-checked", "false");
        document.querySelector('#sec10ans2').setAttribute("aria-checked", "false");
        document.querySelector('#sec10ans3').setAttribute("aria-checked", "true");
        outline(0, "sec10out1", "sec10outIn1");
        outline(0, "sec10out2", "sec10outIn2");
        outline(0.99, "sec10out3", "sec10outIn3");
        activateCheckButton("sec10", true);
    }
    if(num == 4) {
        selectedAnswers[1] = 1;
        document.querySelector('#sec11ans1').setAttribute("aria-checked", "true");
        document.querySelector('#sec11ans2').setAttribute("aria-checked", "false");
        document.querySelector('#sec11ans3').setAttribute("aria-checked", "false");
        outline(0.99, "sec11out1", "sec11outIn1");
        outline(0, "sec11out2", "sec11outIn2");
        outline(0, "sec11out3", "sec11outIn3");
        activateCheckButton("sec11", true);
    }
    if(num == 5) {
        selectedAnswers[1] = 2;
        document.querySelector('#sec11ans1').setAttribute("aria-checked", "false");
        document.querySelector('#sec11ans2').setAttribute("aria-checked", "true");
        document.querySelector('#sec11ans3').setAttribute("aria-checked", "false");
        outline(0, "sec11out1", "sec11outIn1");
        outline(0.99, "sec11out2", "sec11outIn2");
        outline(0, "sec11out3", "sec11outIn3");
        activateCheckButton("sec11", true);
    }
    if(num == 6) {
        selectedAnswers[1] = 3;
        document.querySelector('#sec11ans1').setAttribute("aria-checked", "false");
        document.querySelector('#sec11ans2').setAttribute("aria-checked", "false");
        document.querySelector('#sec11ans3').setAttribute("aria-checked", "true");
        outline(0, "sec11out1", "sec11outIn1");
        outline(0, "sec11out2", "sec11outIn2");
        outline(0.99, "sec11out3", "sec11outIn3");
        activateCheckButton("sec11", true);
    }
    if(num == 7) {
        selectedAnswers[2] = 1;
        document.querySelector('#sec12ans1').setAttribute("aria-checked", "true");
        document.querySelector('#sec12ans2').setAttribute("aria-checked", "false");
        document.querySelector('#sec12ans3').setAttribute("aria-checked", "false");
        outline(0.99, "sec12out1", "sec12outIn1");
        outline(0, "sec12out2", "sec12outIn2");
        outline(0, "sec12out3", "sec12outIn3");
        activateCheckButton("sec12", true);
    }
    if(num == 8) {
        selectedAnswers[2] = 2;
        document.querySelector('#sec12ans1').setAttribute("aria-checked", "false");
        document.querySelector('#sec12ans2').setAttribute("aria-checked", "true");
        document.querySelector('#sec12ans3').setAttribute("aria-checked", "false");
        outline(0, "sec12out1", "sec12outIn1");
        outline(0.99, "sec12out2", "sec12outIn2");
        outline(0, "sec12out3", "sec12outIn3");
        activateCheckButton("sec12", true);
    }
    if(num == 9) {
        selectedAnswers[2] = 3;
        document.querySelector('#sec12ans1').setAttribute("aria-checked", "false");
        document.querySelector('#sec12ans2').setAttribute("aria-checked", "false");
        document.querySelector('#sec12ans3').setAttribute("aria-checked", "true");
        outline(0, "sec12out1", "sec12outIn1");
        outline(0, "sec12out2", "sec12outIn2");
        outline(0.99, "sec12out3", "sec12outIn3");
        activateCheckButton("sec12", true);
    }
}

function activateCheckButton(sec, status) {
    if(status == true) {
        document.getElementById(sec + "check").components['material'].material.color.setHex(0x335BD1);
        document.getElementById(sec + "check").setAttribute("data-clickable");
        document.getElementById(sec + "check").setAttribute("aria-disabled", false);
    } else {
        document.getElementById(sec + "check").components['material'].material.color.setHex(0x6B6B6B);
        document.getElementById(sec + "check").removeAttribute("data-clickable");
        document.getElementById(sec + "check").setAttribute("aria-disabled", true);
    }
}