'use strict';


/* =========================================================
   TRANSPASSAGE WEBSITE
   Main JavaScript
========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
========================================================= */

const menu = document.getElementById('menu');
const nav = document.getElementById('nav');


/* Close Mobile Menu */

function closeMenu() {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
}


/* Open / Close Menu */

menu.addEventListener('click', () => {

    const open = nav.classList.toggle('open');

    menu.setAttribute(
        'aria-expanded',
        String(open)
    );

});


/* Close Menu After Clicking Navigation Link */

nav.querySelectorAll('a').forEach((link) => {

    link.addEventListener(
        'click',
        closeMenu
    );

});


/* Close Menu When ESC Key Is Pressed */

document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape') {
        closeMenu();
    }

});



/* =========================================================
   2. JOURNEY FINDER
========================================================= */

const stages = {

    exploring: {

        title:
            'Turn “what if” into a clear plan.',

        text:
            'Start with career counselling. Discuss your interests, education and goals to understand the next steps for studying overseas.',

        service:
            'Career counselling',

        link:
            'Discuss my options'
    },


    applying: {

        title:
            'Give your application a clear direction.',

        text:
            'Discuss enrolment requirements, statement of purpose support and the documents you may need. Let’s work through your next steps.',

        service:
            'Overseas education',

        link:
            'Discuss my application'
    },


    abroad: {

        title:
            'Your next chapter can still evolve.',

        text:
            'Explore support for changing university, course or study location, or continuing and upgrading your studies overseas.',

        service:
            'Support for existing international students',

        link:
            'Discuss my next move'
    }

};



/* =========================================================
   3. JOURNEY FINDER BUTTONS
========================================================= */

const stageButtons =
    document.querySelectorAll('[data-stage]');


stageButtons.forEach((button) => {

    button.addEventListener('click', () => {


        /* Remove Active State */

        stageButtons.forEach((otherButton) => {

            otherButton.classList.remove('active');

            otherButton.setAttribute(
                'aria-pressed',
                'false'
            );

        });


        /* Activate Selected Button */

        button.classList.add('active');

        button.setAttribute(
            'aria-pressed',
            'true'
        );


        /* Get Selected Journey */

        const data =
            stages[button.dataset.stage];


        /* Update Recommendation */

        document.querySelector(
            '#recommendation h3'
        ).textContent = data.title;


        document.querySelector(
            '#recommendation p'
        ).textContent = data.text;


        /* Update Link */

        document.getElementById(
            'stage-link'
        ).textContent = data.link;


        /* Automatically Select Contact Service */

        document.getElementById(
            'interest'
        ).value = data.service;

    });

});



/* =========================================================
   4. SERVICE SELECTION
========================================================= */

/*
   When someone clicks a service,
   automatically select the same service
   inside the contact form.
*/

const serviceLinks =
    document.querySelectorAll('[data-service]');


serviceLinks.forEach((link) => {

    link.addEventListener('click', () => {

        document.getElementById(
            'interest'
        ).value = link.dataset.service;

    });

});



/* =========================================================
   5. CONTACT / ENQUIRY FORM
========================================================= */

const enquiryForm =
    document.getElementById('enquiry');

const formStatus =
    document.getElementById('form-status');


enquiryForm.addEventListener(
    'submit',
    (event) => {

        /* Prevent Normal Form Submission */

        event.preventDefault();


        /* Get Form Values */

        const name =
            document
                .getElementById('name')
                .value
                .trim();


        const message =
            document
                .getElementById('message')
                .value
                .trim();


        const service =
            document
                .getElementById('interest')
                .value;


        /* Validate Required Information */

        if (!name || !message) {

            formStatus.textContent =
                'Please enter your name and a short message.';

            return;
        }


        /* Create Enquiry Message */

        const text =
`Hello Transpassage, my name is ${name}.

I would like help with: ${service}.

${message}`;



        /* =================================================
           EMAIL OPTION
        ================================================= */

        if (event.submitter?.value === 'email') {

            const subject =
                `Enquiry: ${service}`;


            const emailURL =
                `mailto:info@transpassage.com` +
                `?subject=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(text)}`;


            window.location.href = emailURL;


            formStatus.textContent =
                'Your email app can open a draft. Review it and send it there. If no app opens, email info@transpassage.com directly.';

        }


        /* =================================================
           WHATSAPP OPTION
        ================================================= */

        else {

            const whatsappURL =
                `https://wa.me/919962245886` +
                `?text=${encodeURIComponent(text)}`;


            window.open(
                whatsappURL,
                '_blank',
                'noopener,noreferrer'
            );


            formStatus.textContent =
                'WhatsApp opens your prepared message. Review it and press Send there. If the new tab is blocked, use the “Let’s talk” button or email instead.';

        }

    }
);



/* =========================================================
   6. AUTOMATIC FOOTER YEAR
========================================================= */

const year =
    document.getElementById('year');


year.textContent =
    new Date().getFullYear();



/* =========================================================
   7. PRIVACY DIALOG
========================================================= */

const privacy =
    document.getElementById('privacy');

const privacyOpen =
    document.getElementById('privacy-open');

const privacyClose =
    privacy.querySelector('.dialog-close');


/* Open Privacy Window */

privacyOpen.addEventListener(
    'click',
    () => {

        privacy.showModal();

    }
);


/* Close Privacy Window */

privacyClose.addEventListener(
    'click',
    () => {

        privacy.close();

    }
);



/* =========================================================
   8. CLOSE PRIVACY WINDOW BY CLICKING OUTSIDE
========================================================= */

privacy.addEventListener(
    'click',
    (event) => {

        if (event.target !== privacy) {
            return;
        }


        const rectangle =
            privacy.getBoundingClientRect();


        const clickedOutside =
            event.clientX < rectangle.left ||
            event.clientX > rectangle.right ||
            event.clientY < rectangle.top ||
            event.clientY > rectangle.bottom;


        if (clickedOutside) {
            privacy.close();
        }

    }
);



/* =========================================================
   9. SCROLL REVEAL ANIMATIONS
========================================================= */

/*
   IntersectionObserver watches elements
   as the visitor scrolls down the page.

   When an element enters the screen,
   the "visible" class is added.
*/

const reducedMotion =
    window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;


if (
    'IntersectionObserver' in window &&
    !reducedMotion
) {

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add('visible');


                        /*
                           Stop watching after
                           animation has happened.
                        */

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.08
            }

        );



    /* Elements That Should Animate */

    const animatedElements =
        document.querySelectorAll(
            '.service, ' +
            '.steps li, ' +
            '.about-visual, ' +
            '.values div'
        );


    animatedElements.forEach((element) => {

        element.classList.add('reveal');

        observer.observe(element);

    });

}

/* COUNTRY GALLERY ANIMATIONS */
(() => {
  const cards = document.querySelectorAll(".destination-card");
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window && !reducedMotion) {
    const countryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("destination-entered");
            countryObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card, index) => {
      card.style.setProperty(
        "--entrance-delay",
        `${index * 100}ms`
      );

      countryObserver.observe(card);
    });
  }

  /* PRESELECT STUDY ENQUIRY AND INCLUDE THE DESTINATION */
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const country = card.querySelector("h3").textContent.trim();
      const interest = document.getElementById("interest");
      const message = document.getElementById("message");

      if (interest) {
        interest.value = "Overseas education";
      }

      if (message && !message.value.trim()) {
        message.value =
          `I would like to discuss studying in ${country}.`;
      }
    });
  });

  /* READING PROGRESS BAR */
  const progress = document.createElement("div");
  progress.className = "reading-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.appendChild(progress);

  let updateScheduled = false;

  function updateProgress() {
    const availableScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    const ratio = availableScroll > 0
      ? Math.min(1, Math.max(0, window.scrollY / availableScroll))
      : 0;

    progress.style.transform = `scaleX(${ratio})`;
    updateScheduled = false;
  }

  function scheduleUpdate() {
    if (!updateScheduled) {
      updateScheduled = true;
      window.requestAnimationFrame(updateProgress);
    }
  }

  window.addEventListener("scroll", scheduleUpdate, {
    passive: true
  });

  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("load", scheduleUpdate);

  updateProgress();
})();