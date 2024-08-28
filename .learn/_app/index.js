(function() {
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.textContent = '.lesson-container-component {\r\n  background-color: white;\r\n  max-width: 1145px;\r\n  margin: 0 auto;\r\n  padding: 0px 15px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.lesson-content-component {\r\n  padding-bottom: 70px;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n}\r\n\r\n.lesson-content-component img {\r\n  margin: 5px auto;\r\n  max-width: 650px;\r\n}\r\n\r\n.lesson-content-component h1 {\r\n  font-size: 26px;\r\n}\r\n\r\n.lesson-content-component h2 {\r\n  font-size: 22px;\r\n}\r\n\r\n.lesson-content-component h3 {\r\n  font-size: 18px;\r\n}\r\n\r\n.lesson-content-component > h1,\r\n.lesson-content-component h2,\r\n.lesson-content-component h3,\r\n.lesson-content-component h4,\r\n.lesson-content-component h5,\r\n.lesson-content-component h6 {\r\n  margin: 15px 0px;\r\n}\r\n\r\n.lesson-content-component > pre {\r\n  margin: 10px 0;\r\n}\r\n\r\n\r\n\r\n\r\n.simple-button-svg {\r\n  max-height: 100% !important;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  font-size: var(--font-size-medium);\r\n}\r\n\r\n.simple-button-svg:disabled {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.simple-button-svg > svg {\r\n  max-height: 30px !important;\r\n  max-width: 30px !important;\r\n}\r\n\r\n.simple-button-svg > img {\r\n  max-height: 18px !important;\r\n  max-width: 18px !important;\r\n  filter: saturate(90%);\r\n}\r\n\r\n.feedback-container {\r\n  background-color: rgba(31, 31, 31, 0.821);\r\n  backdrop-filter: blur(1px);\r\n  position: absolute;\r\n  z-index: 2;\r\n  width: 100% !important;\r\n  min-height: 100% !important;\r\n}\r\n\r\n.feedback-component {\r\n  width: min(99%, 600px);\r\n  background-color: white;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  position: absolute;\r\n  backdrop-filter: blur(10px);\r\n  top: 10%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 13px;\r\n  left: 50%;\r\n  transform: translate(-50%, 0%);\r\n}\r\n\r\n.feedback-component > .-header {\r\n  font-weight: bold;\r\n  padding: 5px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.feedback-component > .-header > button {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.feedback-component > p {\r\n  font-size: 16px;\r\n}\r\n\r\n.feedback-component > .-content {\r\n  padding: 10px;\r\n  background-color: #f9f9f9;\r\n}\r\n\r\n.feedback-component > .-footer {\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n}\r\n\r\n.feedback-component > .-footer > div {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n#socket-disconnected {\r\n  display: none;\r\n}\r\n\r\n.test-button {\r\n  background-color: red;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  color: yellow;\r\n  font-weight: 700;\r\n}\r\n\r\n.button {\r\n  background-color: var(--color-active);\r\n  border-radius: 7px;\r\n  color: white;\r\n  padding: 10px;\r\n}\r\n\r\n.button:hover {\r\n  color: white;\r\n}\r\n\r\n.bg-gray {\r\n  background-color: var(--bg-color-dark-gray) !important;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.centered {\r\n  margin-inline: auto;\r\n}\r\n\r\n.on-hover-active:hover {\r\n  background-color: var(--color-active);\r\n  color: white;\r\n}\r\n/* @tailwind base;\r\n@tailwind components;\r\n@tailwind utilities; */\r\n\r\n:root {\r\n  --color-border: #b2b2b2;\r\n  --bg-color-gray: #eff1f4;\r\n  --bg-color-dark-gray: #a1a1a1;\r\n\r\n  --color-active: #1986da;\r\n  --4geeks-yellow: #ffd900;\r\n  --color-blue-opaque: #ebf8fe;\r\n  --color-blue: #c1dfed;\r\n  --color-success: #21b761;\r\n  --color-fail: #eb5757;\r\n  --bg-color-code: #2d3748;\r\n  --backdrop-background: rgba(0, 0, 0, 0.7);\r\n\r\n  --font-color-secondary: #9c9c9c;\r\n  --font-size-small: 16px;\r\n  --font-size-medium: 18px;\r\n  font-size: 16px;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: "Inter", sans-serif;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n  font-family: "Inter", sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #eff1f4;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n  border: 0;\r\n  background: transparent;\r\n}\r\nh1 {\r\n  font-size: 18px;\r\n\r\n  font-weight: 700;\r\n}\r\nhr {\r\n  margin-top: 15px;\r\n}\r\npre {\r\n  background-color: var(--bg-color-code);\r\n  padding: 10px;\r\n  border-left: 2px solid var(--color-active);\r\n  border-radius: 5px;\r\n  overflow: auto;\r\n}\r\ncode {\r\n  color: white;\r\n  background-color: var(--bg-color-code);\r\n}\r\ncode:not(pre code) {\r\n  border-left: 2px solid var(--color-active);\r\n  padding: 2px 6px;\r\n  border-radius: 5px;\r\n}\r\nli {\r\n  padding-left: 0 !important;\r\n  list-style-type: disc;\r\n  margin-left: 20px !important;\r\n}\r\nblockquote {\r\n  border-left: 2px solid var(--color-active);\r\n  padding: 2px 6px;\r\n  border-radius: 5px;\r\n  margin-top: 10px;\r\n  background-color: #f3f3f3f1;\r\n}\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\nth {\r\n  background-color: var(--bg-color-code);\r\n  padding: 6px;\r\n  color: white;\r\n  border: 1px solid rgb(130, 130, 130);\r\n}\r\ntd {\r\n  border: 1px solid rgb(130, 130, 130);\r\n  text-align: center;\r\n  padding: 4px;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np {\r\n  margin-block: 5px;\r\n  line-height: 1.5;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  gap: 5px;\r\n  flex-direction: column;\r\n}\r\nform button {\r\n  width: fit-content;\r\n  padding: 7px;\r\n  cursor: pointer;\r\n  border-radius: 6px;\r\n}\r\nform input {\r\n  border: 1px solid gray;\r\n  border-radius: 8px;\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n\r\n/* This will affect the entire webpage */\r\n::-webkit-scrollbar {\r\n  width: 5px;\r\n  height: 5px;\r\n}\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: rgba(\r\n    0,\r\n    0,\r\n    0,\r\n    0.433\r\n  ); /* Change the color and transparency as needed */\r\n}\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.pill {\r\n  border-radius: 7px;\r\n  padding: 5px 5px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.bg-blue {\r\n  background-color: var(--color-active) !important;\r\n  color: white;\r\n}\r\n.bg-blue > svg {\r\n  stroke: white;\r\n}\r\n\r\n.border-blue {\r\n  border: 1px solid var(--color-active);\r\n}\r\n.color-blue {\r\n  color: var(--color-active);\r\n}\r\n\r\n.bg-secondary {\r\n  background-color: rgba(231, 231, 231, 0.761);\r\n}\r\n.scrolleable {\r\n  overflow-y: auto !important;\r\n}\r\n\r\n.blue-circle {\r\n  background-color: var(--color-active);\r\n  border-radius: 50%;\r\n  padding: 10px;\r\n  margin-left: 10px;\r\n  width: 40px;\r\n  height: 40px;\r\n  position: relative;\r\n}\r\n.blue-circle > * {\r\n  position: absolute;\r\n  left: 50%;\r\n  font-size: 10px;\r\n  color: white;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.pos-relative {\r\n  position: relative;\r\n}\r\n\r\n.bg-fail {\r\n  background-color: var(--color-fail) !important;\r\n}\r\n.bg-success {\r\n  background-color: var(--color-success) !important;\r\n}\r\n\r\n.dropdown {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.modal-container {\r\n  width: 100%;\r\n  height: 100vh !important;\r\n  position: absolute;\r\n  z-index: 10;\r\n  background-color: var(--backdrop-background);\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n}\r\n\r\n.modal-container > div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  background-color: white;\r\n  padding: 10px;\r\n  position: absolute;\r\n  top: 50%;\r\n  width: min(99%, 750px);\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 10px;\r\n}\r\n\r\n.modal-container > div .modal-header {\r\n  font-weight: bolder;\r\n  font-size: 16px;\r\n}\r\n\r\n.modal-container > div .modal-content {\r\n  background-color: rgb(236, 232, 232);\r\n  padding: inherit;\r\n  border-radius: inherit;\r\n  position: relative;\r\n}\r\n\r\n.float-right {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.text-white {\r\n  border: white;\r\n  color: white !important;\r\n}\r\n\r\n.text-white > svg {\r\n  stroke: white;\r\n}\r\n\r\n.d-block {\r\n  display: block;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.space-between {\r\n  justify-content: space-between;\r\n}\r\n.align-center {\r\n  align-items: center;\r\n}\r\n\r\n.palpitate {\r\n  animation: palpitate 1s ease-in infinite;\r\n  animation-play-state: running;\r\n}\r\n\r\n@keyframes palpitate {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  0% {\r\n    opacity: 0.5;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n.preview-card {\r\n  max-width: 560px;\r\n  position: relative;\r\n}\r\n\r\n.preview-card .click {\r\n  margin-inline: auto;\r\n  display: block;\r\n  background-color: transparent !important;\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  font-size: 100px;\r\n  animation-fill-mode: backwards;\r\n}\r\n\r\n.preview-card .click span {\r\n  background-color: red;\r\n}\r\n\r\n.preview-card .click:hover {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  animation: scaleOnHover 0.5s ease 1 both;\r\n}\r\n\r\n@keyframes scaleOnHover {\r\n  from {\r\n    font-size: 100px;\r\n  }\r\n  to {\r\n    font-size: 200px;\r\n  }\r\n}\r\n\r\n.video-modal {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--backdrop-background);\r\n  z-index: 1;\r\n}\r\n\r\n.video-modal .modal-content {\r\n  position: relative;\r\n  background-color: transparent;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 8px;\r\n  box-shadow: 0 0 20px rgba(153, 153, 153, 0.3);\r\n  width: fit-content;\r\n}\r\n\r\n.video-modal .close {\r\n  background-color: var(--color-active);\r\n  margin-top: 10px;\r\n  border-radius: 10px;\r\n  font-size: 21px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  padding: 10px;\r\n  width: 100%;\r\n  opacity: 0.8;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.video-modal .close:hover {\r\n  opacity: 1;\r\n  background-color: var(--color-active);\r\n}\r\n\r\n.chat-container {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1;\r\n  font-size: 17px;\r\n}\r\n\r\n.chat-container .chat-modal {\r\n  background-color: white;\r\n  width: min(99%, 750px);\r\n  max-height: 90vh;\r\n  overflow-y: scroll;\r\n  position: relative !important;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.chat-container .chat-modal section {\r\n  margin-top: 10px;\r\n}\r\n\r\n.chat-container .chat-modal .chat-header {\r\n  position: relative;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.chat-container .chat-modal .chat-header h3 {\r\n  text-align: center;\r\n}\r\n\r\n.chat-container .chat-modal .chat-header button {\r\n  color: var(--background-color-code);\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.chat-container .chat-modal .chat-header button svg path {\r\n  stroke: var(--bg-color-code);\r\n}\r\n\r\n.chat-container .chat-modal .chat-messages {\r\n  overflow-y: scroll;\r\n  max-height: calc(100% - 100px);\r\n}\r\n\r\n.chat-container .chat-modal .chat-input {\r\n  display: flex;\r\n  position: relative;\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n\r\n.chat-container .chat-modal .chat-input textarea {\r\n  background-color: #ebececbf;\r\n  width: 100%;\r\n  padding: 5px;\r\n  resize: none;\r\n  border-radius: 8px;\r\n  padding-right: 40px;\r\n  border: 0;\r\n  outline: none;\r\n}\r\n\r\n.chat-container .chat-modal .chat-input button {\r\n  background-color: #9f9f9f;\r\n  position: absolute;\r\n  padding: 10px;\r\n  display: flex;\r\n  border-radius: 50%;\r\n  right: 10px;\r\n  border: 1px solid white;\r\n}\r\n\r\n.chat-container .chat-modal .chat-input button svg path {\r\n  stroke: white;\r\n}\r\n\r\n.chat-container .chat-modal .chat-input button:hover {\r\n  background-color: #02a8ea;\r\n}\r\n\r\n.chat-container .chat-modal .chat-footer {\r\n  font-size: smaller;\r\n  color: var(--font-color-secondary);\r\n}\r\n\r\n.chat-container .next-button {\r\n  background-color: #9f9f9f;\r\n  margin-top: 5px;\r\n  border-radius: 7px;\r\n  font-weight: 600;\r\n  color: black;\r\n  padding: 10px;\r\n}\r\n\r\n.chat-container .next-button:hover {\r\n  background-color: var(--color-active);\r\n  color: white;\r\n}\r\n\r\n.chat-container .message {\r\n  background-color: #d1d1d1ef;\r\n  padding: 10px;\r\n  border-radius: 9px;\r\n  margin-top: 5px;\r\n  line-height: 25px;\r\n}\r\n\r\n.chat-container .message.user {\r\n  background-color: transparent;\r\n}\r\n\r\n.chat-container .message p:not(:first-child) {\r\n  margin-top: 15px;\r\n}\r\n\r\n\r\n\r\n.alert {\r\n  background-color: var(--4geeks-yellow);\r\n  padding: 3px 10px;\r\n  border-radius: 10px;\r\n  color: black;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n.language-dropdown {\r\n  display: flex;\r\n  position: absolute;\r\n  top: 101%;\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n  border: 1px solid #d1d0d0cc;\r\n  padding: 6px;\r\n  border-radius: 9px;\r\n  flex-direction: column;\r\n  z-index: 2;\r\n  background-color: white;\r\n}\r\n\r\n.language-dropdown > button {\r\n  display: flex;\r\n  gap: 7px;\r\n  align-items: center;\r\n}\r\n\r\n.language-component {\r\n  width: fit-content !important;\r\n  border: 1px solid var(--bg-color-gray);\r\n  padding: 7px;\r\n  position: relative;\r\n  border-radius: 10px;\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.language-component > button {\r\n  \r\n  display: flex;\r\n  gap: 6px;\r\n  align-items: center;\r\n  \r\n}\r\n.input-modal {\r\n  position: fixed;\r\n  top: 100px;\r\n  left: 50%;\r\n  text-align: center;\r\n  background-color: white;\r\n  border-radius: 10px;\r\n  border: 1px solid var(--color-border);\r\n  z-index: 20;\r\n  transform: translate(-50%, 0);\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: min(400px, 90%);\r\n}\r\n\r\n.input-modal > input {\r\n  border: 1px solid gray;\r\n  border-radius: 8px;\r\n  padding: 10px;\r\n}\r\n\r\n.input-modal > div {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 20px;\r\n}\r\n\r\n.input-modal button {\r\n  width: fit-content;\r\n  padding: 7px;\r\n  cursor: pointer;\r\n  border-radius: 6px;\r\n  background-color: var(--color-border);\r\n  color: white;\r\n}\r\n.sidebar-component {\r\n    width: 100vw;\r\n    min-height: 100vh;\r\n    position: absolute;\r\n    left: 101%;\r\n    top: 0;\r\n    font-size: 17px;\r\n    z-index: 2;\r\n    background-color: #FAFAFB;\r\n    animation: appear-4-right 0.5s ease 1 forwards;\r\n  }\r\n  \r\n  .sidebar-component section h2 {\r\n    text-align: center;\r\n    padding: 15px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .sidebar-component > section:not(:last-child) {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 2px 14px;\r\n  }\r\n  \r\n  .sidebar-component .footer {\r\n    background-color: var(--bg-color-gray);\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    padding: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .sidebar-component .footer > a {\r\n    padding: 10px;\r\n    color: black;\r\n    text-decoration: none;\r\n    display: block;\r\n    border-radius: 8px;\r\n  }\r\n  \r\n  .sidebar-component .footer > a:hover {\r\n    background-color: var(--color-blue-opaque);\r\n  }\r\n  \r\n  .sidebar-component .exercise-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    margin-bottom: 70px;\r\n    padding: 10px;\r\n  }\r\n  \r\n  .sidebar-component .exercise-list li.exercise-card {\r\n    background-color: var(--color-blue-opaque);\r\n    margin-left: 0 !important;\r\n    display: flex;\r\n    padding: 10px 11px;\r\n    cursor: pointer;\r\n    justify-content: space-between;\r\n    font-size: 18px;\r\n    border-radius: 15px;\r\n    align-items: center;\r\n    opacity: 1;\r\n  }\r\n  \r\n  .sidebar-component .exercise-list li.exercise-card:hover {\r\n    background-color: var(--color-blue);\r\n  }\r\n  \r\n  .sidebar-component .exercise-list li.exercise-card > div {\r\n    display: flex;\r\n    gap: 10px;\r\n    align-items: center;\r\n  }\r\n  \r\n  .sidebar-disappear {\r\n    animation: disappear-4-right 0.4s ease 1 forwards;\r\n  }\r\n  \r\n  @keyframes appear-4-right {\r\n    0% {\r\n      left: 101%;\r\n    }\r\n  \r\n    100% {\r\n      left: 0px;\r\n    }\r\n  }\r\n  \r\n  @keyframes disappear-4-right {\r\n    0% {\r\n      left: 0px;\r\n    }\r\n  \r\n    100% {\r\n      left: 101%;\r\n    }\r\n  }\r\n  .app-header {\r\n  animation: scale-navbar auto linear both;\r\n  animation-timeline: scroll();\r\n  animation-range: 10px 150px;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n.app-header:hover {\r\n  opacity: 1 !important;\r\n}\r\n\r\n.navbar-component {\r\n  padding: 10px 10px;\r\n  background-color: var(--bg-color-gray);\r\n  display: flex;\r\n  width: 100%;\r\n  transition: all 2s;\r\n  margin: 0 auto;\r\n  max-width: 1145px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.navbar-component > section {\r\n  display: flex;\r\n  gap: 3px;\r\n  align-items: center;\r\n}\r\n\r\n.lesson-options {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: white;\r\n  margin: 0 auto;\r\n  max-width: 1145px;\r\n  padding: 8px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.lesson-options > div {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.lesson-options button:disabled {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n\r\n\r\n\r\n@keyframes scale-navbar {\r\n  from {\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.feedback-dropdown {\r\n  position: absolute;\r\n  top: 103%;\r\n  left: -75%;\r\n  width: max-content;\r\n  padding: 2px;\r\n  border: 1px solid var(--color-active);\r\n  background-color: white;\r\n  border-radius: 7px;\r\n  max-width: 300px;\r\n  font-size: var(--font-size-small);\r\n  display: flex;\r\n  gap: 5px;\r\n  align-items: baseline;\r\n  z-index: 1;\r\n  flex-direction: column;\r\n}\r\n\r\n.feedback-dropdown > * {\r\n  width: fit-content;\r\n}\r\n\r\n.feedback-dropdown > button {\r\n  color: var(--color-active);\r\n  width: 100%;\r\n  padding: 7px;\r\n  text-align: left;\r\n  display: flex;\r\n  justify-content: left;\r\n  align-items: center;\r\n}\r\n\r\n.feedback-dropdown > button:hover {\r\n  background-color: var(--color-blue-opaque);\r\n}\r\n\r\n.feedback-dropdown > p {\r\n  padding: 3px;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.feedback-dropdown > p > a {\r\n  font-weight: 600;\r\n  color: var(--color-active);\r\n  cursor: pointer;\r\n}\r\n.self-closing-modal {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: var(--backdrop-background);\r\n  width: 100vw !important;\r\n  height: 100% !important;\r\n  display: grid;\r\n  place-content: center;\r\n  z-index: 2;\r\n}\r\n\r\n.self-closing-modal > div.modal-content {\r\n  display: block;\r\n  border-radius: 20px;\r\n  /* justify-content: center; */\r\n  flex-direction: column;\r\n  /* align-items: center; */\r\n  background-color: white;\r\n  padding: 20px;\r\n  width: min(99%, 450px);\r\n  gap: 10px;\r\n  margin-inline: auto;\r\n  overflow: auto;\r\n  max-height: 90vh;\r\n}\r\n\r\n.icon-component {\r\n  background-color: red;\r\n}\r\n.presentator {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(141, 141, 141, 0.402);\r\n  z-index: 0;\r\n  cursor: initial;\r\n}\r\n\r\n._badge {\r\n  position: fixed;\r\n  width: min(\r\n    90%,\r\n    330px\r\n  ); /* Ajustado de 50vw a un valor fijo para mejor control */\r\n  /* max-height: fit-content; */\r\n  border-radius: 5px; /* Suavizado de las esquinas */\r\n  text-align: left;\r\n  background-color: rgb(255, 255, 255);\r\n  border: 1px solid rgba(127, 127, 127, 0.3);\r\n  padding: 15px;\r\n  top: 50vh;\r\n  left: 50%;\r\n  /* transform: translateX(-50%); */\r\n  z-index: 2;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra más sutil */\r\n\r\n  > h2 {\r\n    color: rgb(0, 0, 0);\r\n    margin-bottom: 10px;\r\n    font-size: 25px;\r\n  }\r\n  > div._content > * {\r\n    margin-top: 5px;\r\n    line-height: 1.5rem;\r\n  }\r\n  > ._footer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: row;\r\n  }\r\n  > p {\r\n    color: black;\r\n    font-size: 1rem; /* Tamaño de fuente reducido para mejor legibilidad */\r\n    font-weight: 400;\r\n    margin-top: 0;\r\n  }\r\n}\r\n.reset-modal {\r\n  text-align: center;\r\n}\r\n.reset-modal > section {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n  gap: 20px;\r\n}\r\n\r\n.login-modal h2 {\r\n  text-align: center;\r\n}\r\n\r\n.login-modal > div div:has(button) {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n}\r\n';
  document.head.appendChild(__vite_style__);
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  var react = { exports: {} };
  var react_production_min = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var l$3 = Symbol.for("react.element"), n$5 = Symbol.for("react.portal"), p$5 = Symbol.for("react.fragment"), q$3 = Symbol.for("react.strict_mode"), r$2 = Symbol.for("react.profiler"), t$3 = Symbol.for("react.provider"), u$4 = Symbol.for("react.context"), v$3 = Symbol.for("react.forward_ref"), w$2 = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
  function A$2(a2) {
    if (null === a2 || "object" !== typeof a2)
      return null;
    a2 = z$1 && a2[z$1] || a2["@@iterator"];
    return "function" === typeof a2 ? a2 : null;
  }
  var B$1 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C$1 = Object.assign, D$2 = {};
  function E$1(a2, b2, e2) {
    this.props = a2;
    this.context = b2;
    this.refs = D$2;
    this.updater = e2 || B$1;
  }
  E$1.prototype.isReactComponent = {};
  E$1.prototype.setState = function(a2, b2) {
    if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a2, b2, "setState");
  };
  E$1.prototype.forceUpdate = function(a2) {
    this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
  };
  function F$1() {
  }
  F$1.prototype = E$1.prototype;
  function G$2(a2, b2, e2) {
    this.props = a2;
    this.context = b2;
    this.refs = D$2;
    this.updater = e2 || B$1;
  }
  var H$1 = G$2.prototype = new F$1();
  H$1.constructor = G$2;
  C$1(H$1, E$1.prototype);
  H$1.isPureReactComponent = true;
  var I$2 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
  function M$2(a2, b2, e2) {
    var d2, c2 = {}, k2 = null, h2 = null;
    if (null != b2)
      for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
        J$1.call(b2, d2) && !L$1.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
    var g2 = arguments.length - 2;
    if (1 === g2)
      c2.children = e2;
    else if (1 < g2) {
      for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
        f2[m2] = arguments[m2 + 2];
      c2.children = f2;
    }
    if (a2 && a2.defaultProps)
      for (d2 in g2 = a2.defaultProps, g2)
        void 0 === c2[d2] && (c2[d2] = g2[d2]);
    return { $$typeof: l$3, type: a2, key: k2, ref: h2, props: c2, _owner: K$1.current };
  }
  function N$1(a2, b2) {
    return { $$typeof: l$3, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
  }
  function O$2(a2) {
    return "object" === typeof a2 && null !== a2 && a2.$$typeof === l$3;
  }
  function escape$2(a2) {
    var b2 = { "=": "=0", ":": "=2" };
    return "$" + a2.replace(/[=:]/g, function(a3) {
      return b2[a3];
    });
  }
  var P$2 = /\/+/g;
  function Q$2(a2, b2) {
    return "object" === typeof a2 && null !== a2 && null != a2.key ? escape$2("" + a2.key) : b2.toString(36);
  }
  function R$1(a2, b2, e2, d2, c2) {
    var k2 = typeof a2;
    if ("undefined" === k2 || "boolean" === k2)
      a2 = null;
    var h2 = false;
    if (null === a2)
      h2 = true;
    else
      switch (k2) {
        case "string":
        case "number":
          h2 = true;
          break;
        case "object":
          switch (a2.$$typeof) {
            case l$3:
            case n$5:
              h2 = true;
          }
      }
    if (h2)
      return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q$2(h2, 0) : d2, I$2(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P$2, "$&/") + "/"), R$1(c2, b2, e2, "", function(a3) {
        return a3;
      })) : null != c2 && (O$2(c2) && (c2 = N$1(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$2, "$&/") + "/") + a2)), b2.push(c2)), 1;
    h2 = 0;
    d2 = "" === d2 ? "." : d2 + ":";
    if (I$2(a2))
      for (var g2 = 0; g2 < a2.length; g2++) {
        k2 = a2[g2];
        var f2 = d2 + Q$2(k2, g2);
        h2 += R$1(k2, b2, e2, f2, c2);
      }
    else if (f2 = A$2(a2), "function" === typeof f2)
      for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
        k2 = k2.value, f2 = d2 + Q$2(k2, g2++), h2 += R$1(k2, b2, e2, f2, c2);
    else if ("object" === k2)
      throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
    return h2;
  }
  function S$2(a2, b2, e2) {
    if (null == a2)
      return a2;
    var d2 = [], c2 = 0;
    R$1(a2, d2, "", "", function(a3) {
      return b2.call(e2, a3, c2++);
    });
    return d2;
  }
  function T$2(a2) {
    if (-1 === a2._status) {
      var b2 = a2._result;
      b2 = b2();
      b2.then(function(b3) {
        if (0 === a2._status || -1 === a2._status)
          a2._status = 1, a2._result = b3;
      }, function(b3) {
        if (0 === a2._status || -1 === a2._status)
          a2._status = 2, a2._result = b3;
      });
      -1 === a2._status && (a2._status = 0, a2._result = b2);
    }
    if (1 === a2._status)
      return a2._result.default;
    throw a2._result;
  }
  var U$2 = { current: null }, V$2 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$2, ReactCurrentOwner: K$1 };
  react_production_min.Children = { map: S$2, forEach: function(a2, b2, e2) {
    S$2(a2, function() {
      b2.apply(this, arguments);
    }, e2);
  }, count: function(a2) {
    var b2 = 0;
    S$2(a2, function() {
      b2++;
    });
    return b2;
  }, toArray: function(a2) {
    return S$2(a2, function(a3) {
      return a3;
    }) || [];
  }, only: function(a2) {
    if (!O$2(a2))
      throw Error("React.Children.only expected to receive a single React element child.");
    return a2;
  } };
  react_production_min.Component = E$1;
  react_production_min.Fragment = p$5;
  react_production_min.Profiler = r$2;
  react_production_min.PureComponent = G$2;
  react_production_min.StrictMode = q$3;
  react_production_min.Suspense = w$2;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
  react_production_min.cloneElement = function(a2, b2, e2) {
    if (null === a2 || void 0 === a2)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
    var d2 = C$1({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
    if (null != b2) {
      void 0 !== b2.ref && (k2 = b2.ref, h2 = K$1.current);
      void 0 !== b2.key && (c2 = "" + b2.key);
      if (a2.type && a2.type.defaultProps)
        var g2 = a2.type.defaultProps;
      for (f2 in b2)
        J$1.call(b2, f2) && !L$1.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
    }
    var f2 = arguments.length - 2;
    if (1 === f2)
      d2.children = e2;
    else if (1 < f2) {
      g2 = Array(f2);
      for (var m2 = 0; m2 < f2; m2++)
        g2[m2] = arguments[m2 + 2];
      d2.children = g2;
    }
    return { $$typeof: l$3, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
  };
  react_production_min.createContext = function(a2) {
    a2 = { $$typeof: u$4, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a2.Provider = { $$typeof: t$3, _context: a2 };
    return a2.Consumer = a2;
  };
  react_production_min.createElement = M$2;
  react_production_min.createFactory = function(a2) {
    var b2 = M$2.bind(null, a2);
    b2.type = a2;
    return b2;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a2) {
    return { $$typeof: v$3, render: a2 };
  };
  react_production_min.isValidElement = O$2;
  react_production_min.lazy = function(a2) {
    return { $$typeof: y, _payload: { _status: -1, _result: a2 }, _init: T$2 };
  };
  react_production_min.memo = function(a2, b2) {
    return { $$typeof: x, type: a2, compare: void 0 === b2 ? null : b2 };
  };
  react_production_min.startTransition = function(a2) {
    var b2 = V$2.transition;
    V$2.transition = {};
    try {
      a2();
    } finally {
      V$2.transition = b2;
    }
  };
  react_production_min.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  };
  react_production_min.useCallback = function(a2, b2) {
    return U$2.current.useCallback(a2, b2);
  };
  react_production_min.useContext = function(a2) {
    return U$2.current.useContext(a2);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useDeferredValue = function(a2) {
    return U$2.current.useDeferredValue(a2);
  };
  react_production_min.useEffect = function(a2, b2) {
    return U$2.current.useEffect(a2, b2);
  };
  react_production_min.useId = function() {
    return U$2.current.useId();
  };
  react_production_min.useImperativeHandle = function(a2, b2, e2) {
    return U$2.current.useImperativeHandle(a2, b2, e2);
  };
  react_production_min.useInsertionEffect = function(a2, b2) {
    return U$2.current.useInsertionEffect(a2, b2);
  };
  react_production_min.useLayoutEffect = function(a2, b2) {
    return U$2.current.useLayoutEffect(a2, b2);
  };
  react_production_min.useMemo = function(a2, b2) {
    return U$2.current.useMemo(a2, b2);
  };
  react_production_min.useReducer = function(a2, b2, e2) {
    return U$2.current.useReducer(a2, b2, e2);
  };
  react_production_min.useRef = function(a2) {
    return U$2.current.useRef(a2);
  };
  react_production_min.useState = function(a2) {
    return U$2.current.useState(a2);
  };
  react_production_min.useSyncExternalStore = function(a2, b2, e2) {
    return U$2.current.useSyncExternalStore(a2, b2, e2);
  };
  react_production_min.useTransition = function() {
    return U$2.current.useTransition();
  };
  react_production_min.version = "18.2.0";
  {
    react.exports = react_production_min;
  }
  var reactExports = react.exports;
  const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f$1 = reactExports, k$1 = Symbol.for("react.element"), l$2 = Symbol.for("react.fragment"), m$3 = Object.prototype.hasOwnProperty, n$4 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$4 = { key: true, ref: true, __self: true, __source: true };
  function q$2(c2, a2, g2) {
    var b2, d2 = {}, e2 = null, h2 = null;
    void 0 !== g2 && (e2 = "" + g2);
    void 0 !== a2.key && (e2 = "" + a2.key);
    void 0 !== a2.ref && (h2 = a2.ref);
    for (b2 in a2)
      m$3.call(a2, b2) && !p$4.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
    if (c2 && c2.defaultProps)
      for (b2 in a2 = c2.defaultProps, a2)
        void 0 === d2[b2] && (d2[b2] = a2[b2]);
    return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$4.current };
  }
  reactJsxRuntime_production_min.Fragment = l$2;
  reactJsxRuntime_production_min.jsx = q$2;
  reactJsxRuntime_production_min.jsxs = q$2;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  var client = {};
  var reactDom = { exports: {} };
  var reactDom_production_min = {};
  var scheduler = { exports: {} };
  var scheduler_production_min = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function(exports) {
    function f2(a2, b2) {
      var c2 = a2.length;
      a2.push(b2);
      a:
        for (; 0 < c2; ) {
          var d2 = c2 - 1 >>> 1, e2 = a2[d2];
          if (0 < g2(e2, b2))
            a2[d2] = b2, a2[c2] = e2, c2 = d2;
          else
            break a;
        }
    }
    function h2(a2) {
      return 0 === a2.length ? null : a2[0];
    }
    function k2(a2) {
      if (0 === a2.length)
        return null;
      var b2 = a2[0], c2 = a2.pop();
      if (c2 !== b2) {
        a2[0] = c2;
        a:
          for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
            var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
            if (0 > g2(C2, c2))
              n2 < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
            else if (n2 < e2 && 0 > g2(x2, c2))
              a2[d2] = x2, a2[n2] = c2, d2 = n2;
            else
              break a;
          }
      }
      return b2;
    }
    function g2(a2, b2) {
      var c2 = a2.sortIndex - b2.sortIndex;
      return 0 !== c2 ? c2 : a2.id - b2.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      var l2 = performance;
      exports.unstable_now = function() {
        return l2.now();
      };
    } else {
      var p2 = Date, q2 = p2.now();
      exports.unstable_now = function() {
        return p2.now() - q2;
      };
    }
    var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G2(a2) {
      for (var b2 = h2(t2); null !== b2; ) {
        if (null === b2.callback)
          k2(t2);
        else if (b2.startTime <= a2)
          k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
        else
          break;
        b2 = h2(t2);
      }
    }
    function H2(a2) {
      B2 = false;
      G2(a2);
      if (!A2)
        if (null !== h2(r2))
          A2 = true, I2(J2);
        else {
          var b2 = h2(t2);
          null !== b2 && K2(H2, b2.startTime - a2);
        }
    }
    function J2(a2, b2) {
      A2 = false;
      B2 && (B2 = false, E2(L2), L2 = -1);
      z2 = true;
      var c2 = y2;
      try {
        G2(b2);
        for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
          var d2 = v2.callback;
          if ("function" === typeof d2) {
            v2.callback = null;
            y2 = v2.priorityLevel;
            var e2 = d2(v2.expirationTime <= b2);
            b2 = exports.unstable_now();
            "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
            G2(b2);
          } else
            k2(r2);
          v2 = h2(r2);
        }
        if (null !== v2)
          var w2 = true;
        else {
          var m2 = h2(t2);
          null !== m2 && K2(H2, m2.startTime - b2);
          w2 = false;
        }
        return w2;
      } finally {
        v2 = null, y2 = c2, z2 = false;
      }
    }
    var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
    function M2() {
      return exports.unstable_now() - Q2 < P2 ? false : true;
    }
    function R2() {
      if (null !== O2) {
        var a2 = exports.unstable_now();
        Q2 = a2;
        var b2 = true;
        try {
          b2 = O2(true, a2);
        } finally {
          b2 ? S2() : (N2 = false, O2 = null);
        }
      } else
        N2 = false;
    }
    var S2;
    if ("function" === typeof F2)
      S2 = function() {
        F2(R2);
      };
    else if ("undefined" !== typeof MessageChannel) {
      var T2 = new MessageChannel(), U2 = T2.port2;
      T2.port1.onmessage = R2;
      S2 = function() {
        U2.postMessage(null);
      };
    } else
      S2 = function() {
        D2(R2, 0);
      };
    function I2(a2) {
      O2 = a2;
      N2 || (N2 = true, S2());
    }
    function K2(a2, b2) {
      L2 = D2(function() {
        a2(exports.unstable_now());
      }, b2);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a2) {
      a2.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A2 || z2 || (A2 = true, I2(J2));
    };
    exports.unstable_forceFrameRate = function(a2) {
      0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y2;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h2(r2);
    };
    exports.unstable_next = function(a2) {
      switch (y2) {
        case 1:
        case 2:
        case 3:
          var b2 = 3;
          break;
        default:
          b2 = y2;
      }
      var c2 = y2;
      y2 = b2;
      try {
        return a2();
      } finally {
        y2 = c2;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a2, b2) {
      switch (a2) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a2 = 3;
      }
      var c2 = y2;
      y2 = a2;
      try {
        return b2();
      } finally {
        y2 = c2;
      }
    };
    exports.unstable_scheduleCallback = function(a2, b2, c2) {
      var d2 = exports.unstable_now();
      "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
      switch (a2) {
        case 1:
          var e2 = -1;
          break;
        case 2:
          e2 = 250;
          break;
        case 5:
          e2 = 1073741823;
          break;
        case 4:
          e2 = 1e4;
          break;
        default:
          e2 = 5e3;
      }
      e2 = c2 + e2;
      a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
      c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r2) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
      return a2;
    };
    exports.unstable_shouldYield = M2;
    exports.unstable_wrapCallback = function(a2) {
      var b2 = y2;
      return function() {
        var c2 = y2;
        y2 = b2;
        try {
          return a2.apply(this, arguments);
        } finally {
          y2 = c2;
        }
      };
    };
  })(scheduler_production_min);
  {
    scheduler.exports = scheduler_production_min;
  }
  var schedulerExports = scheduler.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var aa = reactExports, ca = schedulerExports;
  function p$3(a2) {
    for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
      b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
    return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = /* @__PURE__ */ new Set(), ea = {};
  function fa(a2, b2) {
    ha(a2, b2);
    ha(a2 + "Capture", b2);
  }
  function ha(a2, b2) {
    ea[a2] = b2;
    for (a2 = 0; a2 < b2.length; a2++)
      da.add(b2[a2]);
  }
  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
  function oa(a2) {
    if (ja.call(ma, a2))
      return true;
    if (ja.call(la, a2))
      return false;
    if (ka.test(a2))
      return ma[a2] = true;
    la[a2] = true;
    return false;
  }
  function pa(a2, b2, c2, d2) {
    if (null !== c2 && 0 === c2.type)
      return false;
    switch (typeof b2) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d2)
          return false;
        if (null !== c2)
          return !c2.acceptsBooleans;
        a2 = a2.toLowerCase().slice(0, 5);
        return "data-" !== a2 && "aria-" !== a2;
      default:
        return false;
    }
  }
  function qa(a2, b2, c2, d2) {
    if (null === b2 || "undefined" === typeof b2 || pa(a2, b2, c2, d2))
      return true;
    if (d2)
      return false;
    if (null !== c2)
      switch (c2.type) {
        case 3:
          return !b2;
        case 4:
          return false === b2;
        case 5:
          return isNaN(b2);
        case 6:
          return isNaN(b2) || 1 > b2;
      }
    return false;
  }
  function v$2(a2, b2, c2, d2, e2, f2, g2) {
    this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
    this.attributeName = d2;
    this.attributeNamespace = e2;
    this.mustUseProperty = c2;
    this.propertyName = a2;
    this.type = b2;
    this.sanitizeURL = f2;
    this.removeEmptyString = g2;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
    z[a2] = new v$2(a2, 0, false, a2, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
    var b2 = a2[0];
    z[b2] = new v$2(b2, 1, false, a2[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
    z[a2] = new v$2(a2, 2, false, a2.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
    z[a2] = new v$2(a2, 2, false, a2, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
    z[a2] = new v$2(a2, 3, false, a2.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
    z[a2] = new v$2(a2, 3, true, a2, null, false, false);
  });
  ["capture", "download"].forEach(function(a2) {
    z[a2] = new v$2(a2, 4, false, a2, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a2) {
    z[a2] = new v$2(a2, 6, false, a2, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a2) {
    z[a2] = new v$2(a2, 5, false, a2.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a2) {
    return a2[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
    var b2 = a2.replace(
      ra,
      sa
    );
    z[b2] = new v$2(b2, 1, false, a2, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
    var b2 = a2.replace(ra, sa);
    z[b2] = new v$2(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
    var b2 = a2.replace(ra, sa);
    z[b2] = new v$2(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a2) {
    z[a2] = new v$2(a2, 1, false, a2.toLowerCase(), null, false, false);
  });
  z.xlinkHref = new v$2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a2) {
    z[a2] = new v$2(a2, 1, false, a2.toLowerCase(), null, true, true);
  });
  function ta(a2, b2, c2, d2) {
    var e2 = z.hasOwnProperty(b2) ? z[b2] : null;
    if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1])
      qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
  var Ia = Symbol.for("react.offscreen");
  var Ja = Symbol.iterator;
  function Ka(a2) {
    if (null === a2 || "object" !== typeof a2)
      return null;
    a2 = Ja && a2[Ja] || a2["@@iterator"];
    return "function" === typeof a2 ? a2 : null;
  }
  var A$1 = Object.assign, La;
  function Ma(a2) {
    if (void 0 === La)
      try {
        throw Error();
      } catch (c2) {
        var b2 = c2.stack.trim().match(/\n( *(at )?)/);
        La = b2 && b2[1] || "";
      }
    return "\n" + La + a2;
  }
  var Na = false;
  function Oa(a2, b2) {
    if (!a2 || Na)
      return "";
    Na = true;
    var c2 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b2)
        if (b2 = function() {
          throw Error();
        }, Object.defineProperty(b2.prototype, "props", { set: function() {
          throw Error();
        } }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b2, []);
          } catch (l2) {
            var d2 = l2;
          }
          Reflect.construct(a2, [], b2);
        } else {
          try {
            b2.call();
          } catch (l2) {
            d2 = l2;
          }
          a2.call(b2.prototype);
        }
      else {
        try {
          throw Error();
        } catch (l2) {
          d2 = l2;
        }
        a2();
      }
    } catch (l2) {
      if (l2 && d2 && "string" === typeof l2.stack) {
        for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
          h2--;
        for (; 1 <= g2 && 0 <= h2; g2--, h2--)
          if (e2[g2] !== f2[h2]) {
            if (1 !== g2 || 1 !== h2) {
              do
                if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                  var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                  a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                  return k2;
                }
              while (1 <= g2 && 0 <= h2);
            }
            break;
          }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c2;
    }
    return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
  }
  function Pa(a2) {
    switch (a2.tag) {
      case 5:
        return Ma(a2.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a2 = Oa(a2.type, false), a2;
      case 11:
        return a2 = Oa(a2.type.render, false), a2;
      case 1:
        return a2 = Oa(a2.type, true), a2;
      default:
        return "";
    }
  }
  function Qa(a2) {
    if (null == a2)
      return null;
    if ("function" === typeof a2)
      return a2.displayName || a2.name || null;
    if ("string" === typeof a2)
      return a2;
    switch (a2) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if ("object" === typeof a2)
      switch (a2.$$typeof) {
        case Ca:
          return (a2.displayName || "Context") + ".Consumer";
        case Ba:
          return (a2._context.displayName || "Context") + ".Provider";
        case Da:
          var b2 = a2.render;
          a2 = a2.displayName;
          a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
          return a2;
        case Ga:
          return b2 = a2.displayName || null, null !== b2 ? b2 : Qa(a2.type) || "Memo";
        case Ha:
          b2 = a2._payload;
          a2 = a2._init;
          try {
            return Qa(a2(b2));
          } catch (c2) {
          }
      }
    return null;
  }
  function Ra(a2) {
    var b2 = a2.type;
    switch (a2.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b2.displayName || "Context") + ".Consumer";
      case 10:
        return (b2._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b2;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b2);
      case 8:
        return b2 === za ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b2)
          return b2.displayName || b2.name || null;
        if ("string" === typeof b2)
          return b2;
    }
    return null;
  }
  function Sa(a2) {
    switch (typeof a2) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a2;
      case "object":
        return a2;
      default:
        return "";
    }
  }
  function Ta(a2) {
    var b2 = a2.type;
    return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
  }
  function Ua(a2) {
    var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
    if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
      var e2 = c2.get, f2 = c2.set;
      Object.defineProperty(a2, b2, { configurable: true, get: function() {
        return e2.call(this);
      }, set: function(a3) {
        d2 = "" + a3;
        f2.call(this, a3);
      } });
      Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
      return { getValue: function() {
        return d2;
      }, setValue: function(a3) {
        d2 = "" + a3;
      }, stopTracking: function() {
        a2._valueTracker = null;
        delete a2[b2];
      } };
    }
  }
  function Va(a2) {
    a2._valueTracker || (a2._valueTracker = Ua(a2));
  }
  function Wa(a2) {
    if (!a2)
      return false;
    var b2 = a2._valueTracker;
    if (!b2)
      return true;
    var c2 = b2.getValue();
    var d2 = "";
    a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
    a2 = d2;
    return a2 !== c2 ? (b2.setValue(a2), true) : false;
  }
  function Xa(a2) {
    a2 = a2 || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a2)
      return null;
    try {
      return a2.activeElement || a2.body;
    } catch (b2) {
      return a2.body;
    }
  }
  function Ya(a2, b2) {
    var c2 = b2.checked;
    return A$1({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
  }
  function Za(a2, b2) {
    var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
    c2 = Sa(null != b2.value ? b2.value : c2);
    a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
  }
  function ab(a2, b2) {
    b2 = b2.checked;
    null != b2 && ta(a2, "checked", b2, false);
  }
  function bb(a2, b2) {
    ab(a2, b2);
    var c2 = Sa(b2.value), d2 = b2.type;
    if (null != c2)
      if ("number" === d2) {
        if (0 === c2 && "" === a2.value || a2.value != c2)
          a2.value = "" + c2;
      } else
        a2.value !== "" + c2 && (a2.value = "" + c2);
    else if ("submit" === d2 || "reset" === d2) {
      a2.removeAttribute("value");
      return;
    }
    b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
    null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
  }
  function db(a2, b2, c2) {
    if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
      var d2 = b2.type;
      if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
        return;
      b2 = "" + a2._wrapperState.initialValue;
      c2 || b2 === a2.value || (a2.value = b2);
      a2.defaultValue = b2;
    }
    c2 = a2.name;
    "" !== c2 && (a2.name = "");
    a2.defaultChecked = !!a2._wrapperState.initialChecked;
    "" !== c2 && (a2.name = c2);
  }
  function cb(a2, b2, c2) {
    if ("number" !== b2 || Xa(a2.ownerDocument) !== a2)
      null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
  }
  var eb = Array.isArray;
  function fb(a2, b2, c2, d2) {
    a2 = a2.options;
    if (b2) {
      b2 = {};
      for (var e2 = 0; e2 < c2.length; e2++)
        b2["$" + c2[e2]] = true;
      for (c2 = 0; c2 < a2.length; c2++)
        e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
    } else {
      c2 = "" + Sa(c2);
      b2 = null;
      for (e2 = 0; e2 < a2.length; e2++) {
        if (a2[e2].value === c2) {
          a2[e2].selected = true;
          d2 && (a2[e2].defaultSelected = true);
          return;
        }
        null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
      }
      null !== b2 && (b2.selected = true);
    }
  }
  function gb(a2, b2) {
    if (null != b2.dangerouslySetInnerHTML)
      throw Error(p$3(91));
    return A$1({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
  }
  function hb(a2, b2) {
    var c2 = b2.value;
    if (null == c2) {
      c2 = b2.children;
      b2 = b2.defaultValue;
      if (null != c2) {
        if (null != b2)
          throw Error(p$3(92));
        if (eb(c2)) {
          if (1 < c2.length)
            throw Error(p$3(93));
          c2 = c2[0];
        }
        b2 = c2;
      }
      null == b2 && (b2 = "");
      c2 = b2;
    }
    a2._wrapperState = { initialValue: Sa(c2) };
  }
  function ib(a2, b2) {
    var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
    null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
    null != d2 && (a2.defaultValue = "" + d2);
  }
  function jb(a2) {
    var b2 = a2.textContent;
    b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
  }
  function kb(a2) {
    switch (a2) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lb(a2, b2) {
    return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
  }
  var mb, nb = function(a2) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
      MSApp.execUnsafeLocalFunction(function() {
        return a2(b2, c2, d2, e2);
      });
    } : a2;
  }(function(a2, b2) {
    if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2)
      a2.innerHTML = b2;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
      for (b2 = mb.firstChild; a2.firstChild; )
        a2.removeChild(a2.firstChild);
      for (; b2.firstChild; )
        a2.appendChild(b2.firstChild);
    }
  });
  function ob(a2, b2) {
    if (b2) {
      var c2 = a2.firstChild;
      if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
        c2.nodeValue = b2;
        return;
      }
    }
    a2.textContent = b2;
  }
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a2) {
    qb.forEach(function(b2) {
      b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
      pb[b2] = pb[a2];
    });
  });
  function rb(a2, b2, c2) {
    return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
  }
  function sb(a2, b2) {
    a2 = a2.style;
    for (var c2 in b2)
      if (b2.hasOwnProperty(c2)) {
        var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
        "float" === c2 && (c2 = "cssFloat");
        d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
      }
  }
  var tb = A$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ub(a2, b2) {
    if (b2) {
      if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
        throw Error(p$3(137, a2));
      if (null != b2.dangerouslySetInnerHTML) {
        if (null != b2.children)
          throw Error(p$3(60));
        if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML))
          throw Error(p$3(61));
      }
      if (null != b2.style && "object" !== typeof b2.style)
        throw Error(p$3(62));
    }
  }
  function vb(a2, b2) {
    if (-1 === a2.indexOf("-"))
      return "string" === typeof b2.is;
    switch (a2) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wb = null;
  function xb(a2) {
    a2 = a2.target || a2.srcElement || window;
    a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
    return 3 === a2.nodeType ? a2.parentNode : a2;
  }
  var yb = null, zb = null, Ab = null;
  function Bb(a2) {
    if (a2 = Cb(a2)) {
      if ("function" !== typeof yb)
        throw Error(p$3(280));
      var b2 = a2.stateNode;
      b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
    }
  }
  function Eb(a2) {
    zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
  }
  function Fb() {
    if (zb) {
      var a2 = zb, b2 = Ab;
      Ab = zb = null;
      Bb(a2);
      if (b2)
        for (a2 = 0; a2 < b2.length; a2++)
          Bb(b2[a2]);
    }
  }
  function Gb(a2, b2) {
    return a2(b2);
  }
  function Hb() {
  }
  var Ib = false;
  function Jb(a2, b2, c2) {
    if (Ib)
      return a2(b2, c2);
    Ib = true;
    try {
      return Gb(a2, b2, c2);
    } finally {
      if (Ib = false, null !== zb || null !== Ab)
        Hb(), Fb();
    }
  }
  function Kb(a2, b2) {
    var c2 = a2.stateNode;
    if (null === c2)
      return null;
    var d2 = Db(c2);
    if (null === d2)
      return null;
    c2 = d2[b2];
    a:
      switch (b2) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
          a2 = !d2;
          break a;
        default:
          a2 = false;
      }
    if (a2)
      return null;
    if (c2 && "function" !== typeof c2)
      throw Error(p$3(231, b2, typeof c2));
    return c2;
  }
  var Lb = false;
  if (ia)
    try {
      var Mb = {};
      Object.defineProperty(Mb, "passive", { get: function() {
        Lb = true;
      } });
      window.addEventListener("test", Mb, Mb);
      window.removeEventListener("test", Mb, Mb);
    } catch (a2) {
      Lb = false;
    }
  function Nb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    var l2 = Array.prototype.slice.call(arguments, 3);
    try {
      b2.apply(c2, l2);
    } catch (m2) {
      this.onError(m2);
    }
  }
  var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
    Ob = true;
    Pb = a2;
  } };
  function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l2 = Pb;
        Ob = false;
        Pb = null;
      } else
        throw Error(p$3(198));
      Qb || (Qb = true, Rb = l2);
    }
  }
  function Vb(a2) {
    var b2 = a2, c2 = a2;
    if (a2.alternate)
      for (; b2.return; )
        b2 = b2.return;
    else {
      a2 = b2;
      do
        b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
      while (a2);
    }
    return 3 === b2.tag ? c2 : null;
  }
  function Wb(a2) {
    if (13 === a2.tag) {
      var b2 = a2.memoizedState;
      null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
      if (null !== b2)
        return b2.dehydrated;
    }
    return null;
  }
  function Xb(a2) {
    if (Vb(a2) !== a2)
      throw Error(p$3(188));
  }
  function Yb(a2) {
    var b2 = a2.alternate;
    if (!b2) {
      b2 = Vb(a2);
      if (null === b2)
        throw Error(p$3(188));
      return b2 !== a2 ? null : a2;
    }
    for (var c2 = a2, d2 = b2; ; ) {
      var e2 = c2.return;
      if (null === e2)
        break;
      var f2 = e2.alternate;
      if (null === f2) {
        d2 = e2.return;
        if (null !== d2) {
          c2 = d2;
          continue;
        }
        break;
      }
      if (e2.child === f2.child) {
        for (f2 = e2.child; f2; ) {
          if (f2 === c2)
            return Xb(e2), a2;
          if (f2 === d2)
            return Xb(e2), b2;
          f2 = f2.sibling;
        }
        throw Error(p$3(188));
      }
      if (c2.return !== d2.return)
        c2 = e2, d2 = f2;
      else {
        for (var g2 = false, h2 = e2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = e2;
            d2 = f2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = e2;
            c2 = f2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2) {
          for (h2 = f2.child; h2; ) {
            if (h2 === c2) {
              g2 = true;
              c2 = f2;
              d2 = e2;
              break;
            }
            if (h2 === d2) {
              g2 = true;
              d2 = f2;
              c2 = e2;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g2)
            throw Error(p$3(189));
        }
      }
      if (c2.alternate !== d2)
        throw Error(p$3(190));
    }
    if (3 !== c2.tag)
      throw Error(p$3(188));
    return c2.stateNode.current === c2 ? a2 : b2;
  }
  function Zb(a2) {
    a2 = Yb(a2);
    return null !== a2 ? $b(a2) : null;
  }
  function $b(a2) {
    if (5 === a2.tag || 6 === a2.tag)
      return a2;
    for (a2 = a2.child; null !== a2; ) {
      var b2 = $b(a2);
      if (null !== b2)
        return b2;
      a2 = a2.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
  function mc(a2) {
    if (lc && "function" === typeof lc.onCommitFiberRoot)
      try {
        lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
      } catch (b2) {
      }
  }
  var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
  function nc(a2) {
    a2 >>>= 0;
    return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
  }
  var rc = 64, sc = 4194304;
  function tc(a2) {
    switch (a2 & -a2) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a2 & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a2 & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a2;
    }
  }
  function uc(a2, b2) {
    var c2 = a2.pendingLanes;
    if (0 === c2)
      return 0;
    var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
    if (0 !== g2) {
      var h2 = g2 & ~e2;
      0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
    } else
      g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
    if (0 === d2)
      return 0;
    if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
      return b2;
    0 !== (d2 & 4) && (d2 |= c2 & 16);
    b2 = a2.entangledLanes;
    if (0 !== b2)
      for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
        c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
    return d2;
  }
  function vc(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 4:
        return b2 + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b2 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wc(a2, b2) {
    for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
      var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
      if (-1 === k2) {
        if (0 === (h2 & c2) || 0 !== (h2 & d2))
          e2[g2] = vc(h2, b2);
      } else
        k2 <= b2 && (a2.expiredLanes |= h2);
      f2 &= ~h2;
    }
  }
  function xc(a2) {
    a2 = a2.pendingLanes & -1073741825;
    return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a2 = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a2;
  }
  function zc(a2) {
    for (var b2 = [], c2 = 0; 31 > c2; c2++)
      b2.push(a2);
    return b2;
  }
  function Ac(a2, b2, c2) {
    a2.pendingLanes |= b2;
    536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
    a2 = a2.eventTimes;
    b2 = 31 - oc(b2);
    a2[b2] = c2;
  }
  function Bc(a2, b2) {
    var c2 = a2.pendingLanes & ~b2;
    a2.pendingLanes = b2;
    a2.suspendedLanes = 0;
    a2.pingedLanes = 0;
    a2.expiredLanes &= b2;
    a2.mutableReadLanes &= b2;
    a2.entangledLanes &= b2;
    b2 = a2.entanglements;
    var d2 = a2.eventTimes;
    for (a2 = a2.expirationTimes; 0 < c2; ) {
      var e2 = 31 - oc(c2), f2 = 1 << e2;
      b2[e2] = 0;
      d2[e2] = -1;
      a2[e2] = -1;
      c2 &= ~f2;
    }
  }
  function Cc(a2, b2) {
    var c2 = a2.entangledLanes |= b2;
    for (a2 = a2.entanglements; c2; ) {
      var d2 = 31 - oc(c2), e2 = 1 << d2;
      e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
      c2 &= ~e2;
    }
  }
  var C = 0;
  function Dc(a2) {
    a2 &= -a2;
    return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sc(a2, b2) {
    switch (a2) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b2.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b2.pointerId);
    }
  }
  function Tc(a2, b2, c2, d2, e2, f2) {
    if (null === a2 || a2.nativeEvent !== f2)
      return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
    a2.eventSystemFlags |= d2;
    b2 = a2.targetContainers;
    null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
    return a2;
  }
  function Uc(a2, b2, c2, d2, e2) {
    switch (b2) {
      case "focusin":
        return Lc = Tc(Lc, a2, b2, c2, d2, e2), true;
      case "dragenter":
        return Mc = Tc(Mc, a2, b2, c2, d2, e2), true;
      case "mouseover":
        return Nc = Tc(Nc, a2, b2, c2, d2, e2), true;
      case "pointerover":
        var f2 = e2.pointerId;
        Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d2, e2));
        return true;
      case "gotpointercapture":
        return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d2, e2)), true;
    }
    return false;
  }
  function Vc(a2) {
    var b2 = Wc(a2.target);
    if (null !== b2) {
      var c2 = Vb(b2);
      if (null !== c2) {
        if (b2 = c2.tag, 13 === b2) {
          if (b2 = Wb(c2), null !== b2) {
            a2.blockedOn = b2;
            Ic(a2.priority, function() {
              Gc(c2);
            });
            return;
          }
        } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
          a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a2.blockedOn = null;
  }
  function Xc(a2) {
    if (null !== a2.blockedOn)
      return false;
    for (var b2 = a2.targetContainers; 0 < b2.length; ) {
      var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
      if (null === c2) {
        c2 = a2.nativeEvent;
        var d2 = new c2.constructor(c2.type, c2);
        wb = d2;
        c2.target.dispatchEvent(d2);
        wb = null;
      } else
        return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
      b2.shift();
    }
    return true;
  }
  function Zc(a2, b2, c2) {
    Xc(a2) && c2.delete(b2);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a2, b2) {
    a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a2) {
    function b2(b3) {
      return ad(b3, a2);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a2);
      for (var c2 = 1; c2 < Kc.length; c2++) {
        var d2 = Kc[c2];
        d2.blockedOn === a2 && (d2.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a2);
    null !== Mc && ad(Mc, a2);
    null !== Nc && ad(Nc, a2);
    Oc.forEach(b2);
    Pc.forEach(b2);
    for (c2 = 0; c2 < Qc.length; c2++)
      d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
    for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
      Vc(c2), null === c2.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig, dd = true;
  function ed(a2, b2, c2, d2) {
    var e2 = C, f2 = cd.transition;
    cd.transition = null;
    try {
      C = 1, fd(a2, b2, c2, d2);
    } finally {
      C = e2, cd.transition = f2;
    }
  }
  function gd(a2, b2, c2, d2) {
    var e2 = C, f2 = cd.transition;
    cd.transition = null;
    try {
      C = 4, fd(a2, b2, c2, d2);
    } finally {
      C = e2, cd.transition = f2;
    }
  }
  function fd(a2, b2, c2, d2) {
    if (dd) {
      var e2 = Yc(a2, b2, c2, d2);
      if (null === e2)
        hd(a2, b2, d2, id, c2), Sc(a2, d2);
      else if (Uc(e2, a2, b2, c2, d2))
        d2.stopPropagation();
      else if (Sc(a2, d2), b2 & 4 && -1 < Rc.indexOf(a2)) {
        for (; null !== e2; ) {
          var f2 = Cb(e2);
          null !== f2 && Ec(f2);
          f2 = Yc(a2, b2, c2, d2);
          null === f2 && hd(a2, b2, d2, id, c2);
          if (f2 === e2)
            break;
          e2 = f2;
        }
        null !== e2 && d2.stopPropagation();
      } else
        hd(a2, b2, d2, null, c2);
    }
  }
  var id = null;
  function Yc(a2, b2, c2, d2) {
    id = null;
    a2 = xb(d2);
    a2 = Wc(a2);
    if (null !== a2)
      if (b2 = Vb(a2), null === b2)
        a2 = null;
      else if (c2 = b2.tag, 13 === c2) {
        a2 = Wb(b2);
        if (null !== a2)
          return a2;
        a2 = null;
      } else if (3 === c2) {
        if (b2.stateNode.current.memoizedState.isDehydrated)
          return 3 === b2.tag ? b2.stateNode.containerInfo : null;
        a2 = null;
      } else
        b2 !== a2 && (a2 = null);
    id = a2;
    return null;
  }
  function jd(a2) {
    switch (a2) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null, ld = null, md = null;
  function nd() {
    if (md)
      return md;
    var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
    for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++)
      ;
    var g2 = c2 - a2;
    for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
      ;
    return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
  }
  function od(a2) {
    var b2 = a2.keyCode;
    "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
    10 === a2 && (a2 = 13);
    return 32 <= a2 || 13 === a2 ? a2 : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a2) {
    function b2(b3, d2, e2, f2, g2) {
      this._reactName = b3;
      this._targetInst = e2;
      this.type = d2;
      this.nativeEvent = f2;
      this.target = g2;
      this.currentTarget = null;
      for (var c2 in a2)
        a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
      this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A$1(b2.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a3 = this.nativeEvent;
      a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a3 = this.nativeEvent;
      a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b2;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
    return a2.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
    return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
  }, movementX: function(a2) {
    if ("movementX" in a2)
      return a2.movementX;
    a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
    return wd;
  }, movementY: function(a2) {
    return "movementY" in a2 ? a2.movementY : xd;
  } }), Bd = rd(Ad), Cd = A$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$1({}, sd, { clipboardData: function(a2) {
    return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
  } }), Jd = rd(Id), Kd = A$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a2) {
    var b2 = this.nativeEvent;
    return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A$1({}, ud, { key: function(a2) {
    if (a2.key) {
      var b2 = Md[a2.key] || a2.key;
      if ("Unidentified" !== b2)
        return b2;
    }
    return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
    return "keypress" === a2.type ? od(a2) : 0;
  }, keyCode: function(a2) {
    return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
  }, which: function(a2) {
    return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
  } }), Rd = rd(Qd), Sd = A$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$1({}, Ad, {
    deltaX: function(a2) {
      return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
    },
    deltaY: function(a2) {
      return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be$1 = null;
  ia && "documentMode" in document && (be$1 = document.documentMode);
  var ce = ia && "TextEvent" in window && !be$1, de$1 = ia && (!ae || be$1 && 8 < be$1 && 11 >= be$1), ee$1 = String.fromCharCode(32), fe$1 = false;
  function ge$1(a2, b2) {
    switch (a2) {
      case "keyup":
        return -1 !== $d.indexOf(b2.keyCode);
      case "keydown":
        return 229 !== b2.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he$1(a2) {
    a2 = a2.detail;
    return "object" === typeof a2 && "data" in a2 ? a2.data : null;
  }
  var ie = false;
  function je(a2, b2) {
    switch (a2) {
      case "compositionend":
        return he$1(b2);
      case "keypress":
        if (32 !== b2.which)
          return null;
        fe$1 = true;
        return ee$1;
      case "textInput":
        return a2 = b2.data, a2 === ee$1 && fe$1 ? null : a2;
      default:
        return null;
    }
  }
  function ke(a2, b2) {
    if (ie)
      return "compositionend" === a2 || !ae && ge$1(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
    switch (a2) {
      case "paste":
        return null;
      case "keypress":
        if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
          if (b2.char && 1 < b2.char.length)
            return b2.char;
          if (b2.which)
            return String.fromCharCode(b2.which);
        }
        return null;
      case "compositionend":
        return de$1 && "ko" !== b2.locale ? null : b2.data;
      default:
        return null;
    }
  }
  var le$1 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me(a2) {
    var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return "input" === b2 ? !!le$1[a2.type] : "textarea" === b2 ? true : false;
  }
  function ne$1(a2, b2, c2, d2) {
    Eb(d2);
    b2 = oe$1(b2, "onChange");
    0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
  }
  var pe$1 = null, qe = null;
  function re$2(a2) {
    se$1(a2, 0);
  }
  function te(a2) {
    var b2 = ue$1(a2);
    if (Wa(b2))
      return a2;
  }
  function ve$1(a2, b2) {
    if ("change" === a2)
      return b2;
  }
  var we = false;
  if (ia) {
    var xe$1;
    if (ia) {
      var ye$1 = "oninput" in document;
      if (!ye$1) {
        var ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye$1 = "function" === typeof ze.oninput;
      }
      xe$1 = ye$1;
    } else
      xe$1 = false;
    we = xe$1 && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae$1() {
    pe$1 && (pe$1.detachEvent("onpropertychange", Be), qe = pe$1 = null);
  }
  function Be(a2) {
    if ("value" === a2.propertyName && te(qe)) {
      var b2 = [];
      ne$1(b2, qe, a2, xb(a2));
      Jb(re$2, b2);
    }
  }
  function Ce(a2, b2, c2) {
    "focusin" === a2 ? (Ae$1(), pe$1 = b2, qe = c2, pe$1.attachEvent("onpropertychange", Be)) : "focusout" === a2 && Ae$1();
  }
  function De(a2) {
    if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2)
      return te(qe);
  }
  function Ee$1(a2, b2) {
    if ("click" === a2)
      return te(b2);
  }
  function Fe(a2, b2) {
    if ("input" === a2 || "change" === a2)
      return te(b2);
  }
  function Ge(a2, b2) {
    return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
  }
  var He = "function" === typeof Object.is ? Object.is : Ge;
  function Ie$1(a2, b2) {
    if (He(a2, b2))
      return true;
    if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2)
      return false;
    var c2 = Object.keys(a2), d2 = Object.keys(b2);
    if (c2.length !== d2.length)
      return false;
    for (d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      if (!ja.call(b2, e2) || !He(a2[e2], b2[e2]))
        return false;
    }
    return true;
  }
  function Je(a2) {
    for (; a2 && a2.firstChild; )
      a2 = a2.firstChild;
    return a2;
  }
  function Ke(a2, b2) {
    var c2 = Je(a2);
    a2 = 0;
    for (var d2; c2; ) {
      if (3 === c2.nodeType) {
        d2 = a2 + c2.textContent.length;
        if (a2 <= b2 && d2 >= b2)
          return { node: c2, offset: b2 - a2 };
        a2 = d2;
      }
      a: {
        for (; c2; ) {
          if (c2.nextSibling) {
            c2 = c2.nextSibling;
            break a;
          }
          c2 = c2.parentNode;
        }
        c2 = void 0;
      }
      c2 = Je(c2);
    }
  }
  function Le(a2, b2) {
    return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
  }
  function Me() {
    for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
      try {
        var c2 = "string" === typeof b2.contentWindow.location.href;
      } catch (d2) {
        c2 = false;
      }
      if (c2)
        a2 = b2.contentWindow;
      else
        break;
      b2 = Xa(a2.document);
    }
    return b2;
  }
  function Ne(a2) {
    var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
  }
  function Oe(a2) {
    var b2 = Me(), c2 = a2.focusedElem, d2 = a2.selectionRange;
    if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
      if (null !== d2 && Ne(c2)) {
        if (b2 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2)
          c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
        else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
          a2 = a2.getSelection();
          var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
          d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
          !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
          e2 = Ke(c2, f2);
          var g2 = Ke(
            c2,
            d2
          );
          e2 && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
        }
      }
      b2 = [];
      for (a2 = c2; a2 = a2.parentNode; )
        1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
      "function" === typeof c2.focus && c2.focus();
      for (c2 = 0; c2 < b2.length; c2++)
        a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
    }
  }
  var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re$1 = null, Se$1 = null, Te$1 = false;
  function Ue(a2, b2, c2) {
    var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
    Te$1 || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se$1 && Ie$1(Se$1, d2) || (Se$1 = d2, d2 = oe$1(Re$1, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe)));
  }
  function Ve(a2, b2) {
    var c2 = {};
    c2[a2.toLowerCase()] = b2.toLowerCase();
    c2["Webkit" + a2] = "webkit" + b2;
    c2["Moz" + a2] = "moz" + b2;
    return c2;
  }
  var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
  ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
  function Ze(a2) {
    if (Xe[a2])
      return Xe[a2];
    if (!We[a2])
      return a2;
    var b2 = We[a2], c2;
    for (c2 in b2)
      if (b2.hasOwnProperty(c2) && c2 in Ye)
        return Xe[a2] = b2[c2];
    return a2;
  }
  var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ff(a2, b2) {
    df.set(a2, b2);
    fa(b2, [a2]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  ff($e, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  function nf(a2, b2, c2) {
    var d2 = a2.type || "unknown-event";
    a2.currentTarget = c2;
    Ub(d2, b2, void 0, a2);
    a2.currentTarget = null;
  }
  function se$1(a2, b2) {
    b2 = 0 !== (b2 & 4);
    for (var c2 = 0; c2 < a2.length; c2++) {
      var d2 = a2[c2], e2 = d2.event;
      d2 = d2.listeners;
      a: {
        var f2 = void 0;
        if (b2)
          for (var g2 = d2.length - 1; 0 <= g2; g2--) {
            var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
            h2 = h2.listener;
            if (k2 !== f2 && e2.isPropagationStopped())
              break a;
            nf(e2, h2, l2);
            f2 = k2;
          }
        else
          for (g2 = 0; g2 < d2.length; g2++) {
            h2 = d2[g2];
            k2 = h2.instance;
            l2 = h2.currentTarget;
            h2 = h2.listener;
            if (k2 !== f2 && e2.isPropagationStopped())
              break a;
            nf(e2, h2, l2);
            f2 = k2;
          }
      }
    }
    if (Qb)
      throw a2 = Rb, Qb = false, Rb = null, a2;
  }
  function D$1(a2, b2) {
    var c2 = b2[of];
    void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
    var d2 = a2 + "__bubble";
    c2.has(d2) || (pf(b2, a2, 2, false), c2.add(d2));
  }
  function qf(a2, b2, c2) {
    var d2 = 0;
    b2 && (d2 |= 4);
    pf(c2, a2, d2, b2);
  }
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(a2) {
    if (!a2[rf]) {
      a2[rf] = true;
      da.forEach(function(b3) {
        "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
      });
      var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
      null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
    }
  }
  function pf(a2, b2, c2, d2) {
    switch (jd(b2)) {
      case 1:
        var e2 = ed;
        break;
      case 4:
        e2 = gd;
        break;
      default:
        e2 = fd;
    }
    c2 = e2.bind(null, b2, c2, a2);
    e2 = void 0;
    !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
    d2 ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
  }
  function hd(a2, b2, c2, d2, e2) {
    var f2 = d2;
    if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
      a:
        for (; ; ) {
          if (null === d2)
            return;
          var g2 = d2.tag;
          if (3 === g2 || 4 === g2) {
            var h2 = d2.stateNode.containerInfo;
            if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
              break;
            if (4 === g2)
              for (g2 = d2.return; null !== g2; ) {
                var k2 = g2.tag;
                if (3 === k2 || 4 === k2) {
                  if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                    return;
                }
                g2 = g2.return;
              }
            for (; null !== h2; ) {
              g2 = Wc(h2);
              if (null === g2)
                return;
              k2 = g2.tag;
              if (5 === k2 || 6 === k2) {
                d2 = f2 = g2;
                continue a;
              }
              h2 = h2.parentNode;
            }
          }
          d2 = d2.return;
        }
    Jb(function() {
      var d3 = f2, e3 = xb(c2), g3 = [];
      a: {
        var h3 = df.get(a2);
        if (void 0 !== h3) {
          var k3 = td, n2 = a2;
          switch (a2) {
            case "keypress":
              if (0 === od(c2))
                break a;
            case "keydown":
            case "keyup":
              k3 = Rd;
              break;
            case "focusin":
              n2 = "focus";
              k3 = Fd;
              break;
            case "focusout":
              n2 = "blur";
              k3 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k3 = Fd;
              break;
            case "click":
              if (2 === c2.button)
                break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k3 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k3 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k3 = Vd;
              break;
            case $e:
            case af:
            case bf:
              k3 = Hd;
              break;
            case cf:
              k3 = Xd;
              break;
            case "scroll":
              k3 = vd;
              break;
            case "wheel":
              k3 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k3 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k3 = Td;
          }
          var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
          t2 = [];
          for (var w2 = d3, u2; null !== w2; ) {
            u2 = w2;
            var F2 = u2.stateNode;
            5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
            if (J2)
              break;
            w2 = w2.return;
          }
          0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
        }
      }
      if (0 === (b2 & 7)) {
        a: {
          h3 = "mouseover" === a2 || "pointerover" === a2;
          k3 = "mouseout" === a2 || "pointerout" === a2;
          if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf]))
            break a;
          if (k3 || h3) {
            h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
            if (k3) {
              if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
                n2 = null;
            } else
              k3 = null, n2 = d3;
            if (k3 !== n2) {
              t2 = Bd;
              F2 = "onMouseLeave";
              x2 = "onMouseEnter";
              w2 = "mouse";
              if ("pointerout" === a2 || "pointerover" === a2)
                t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
              J2 = null == k3 ? h3 : ue$1(k3);
              u2 = null == n2 ? h3 : ue$1(n2);
              h3 = new t2(F2, w2 + "leave", k3, c2, e3);
              h3.target = J2;
              h3.relatedTarget = u2;
              F2 = null;
              Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
              J2 = F2;
              if (k3 && n2)
                b: {
                  t2 = k3;
                  x2 = n2;
                  w2 = 0;
                  for (u2 = t2; u2; u2 = vf(u2))
                    w2++;
                  u2 = 0;
                  for (F2 = x2; F2; F2 = vf(F2))
                    u2++;
                  for (; 0 < w2 - u2; )
                    t2 = vf(t2), w2--;
                  for (; 0 < u2 - w2; )
                    x2 = vf(x2), u2--;
                  for (; w2--; ) {
                    if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                      break b;
                    t2 = vf(t2);
                    x2 = vf(x2);
                  }
                  t2 = null;
                }
              else
                t2 = null;
              null !== k3 && wf(g3, h3, k3, t2, false);
              null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
            }
          }
        }
        a: {
          h3 = d3 ? ue$1(d3) : window;
          k3 = h3.nodeName && h3.nodeName.toLowerCase();
          if ("select" === k3 || "input" === k3 && "file" === h3.type)
            var na = ve$1;
          else if (me(h3))
            if (we)
              na = Fe;
            else {
              na = De;
              var xa = Ce;
            }
          else
            (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee$1);
          if (na && (na = na(a2, d3))) {
            ne$1(g3, na, c2, e3);
            break a;
          }
          xa && xa(a2, h3, d3);
          "focusout" === a2 && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
        }
        xa = d3 ? ue$1(d3) : window;
        switch (a2) {
          case "focusin":
            if (me(xa) || "true" === xa.contentEditable)
              Qe = xa, Re$1 = d3, Se$1 = null;
            break;
          case "focusout":
            Se$1 = Re$1 = Qe = null;
            break;
          case "mousedown":
            Te$1 = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te$1 = false;
            Ue(g3, c2, e3);
            break;
          case "selectionchange":
            if (Pe)
              break;
          case "keydown":
          case "keyup":
            Ue(g3, c2, e3);
        }
        var $a;
        if (ae)
          b: {
            switch (a2) {
              case "compositionstart":
                var ba = "onCompositionStart";
                break b;
              case "compositionend":
                ba = "onCompositionEnd";
                break b;
              case "compositionupdate":
                ba = "onCompositionUpdate";
                break b;
            }
            ba = void 0;
          }
        else
          ie ? ge$1(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
        ba && (de$1 && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe$1(d3, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he$1(c2), null !== $a && (ba.data = $a))));
        if ($a = ce ? je(a2, c2) : ke(a2, c2))
          d3 = oe$1(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
      }
      se$1(g3, b2);
    });
  }
  function tf(a2, b2, c2) {
    return { instance: a2, listener: b2, currentTarget: c2 };
  }
  function oe$1(a2, b2) {
    for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
      var e2 = a2, f2 = e2.stateNode;
      5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b2), null != f2 && d2.push(tf(a2, f2, e2)));
      a2 = a2.return;
    }
    return d2;
  }
  function vf(a2) {
    if (null === a2)
      return null;
    do
      a2 = a2.return;
    while (a2 && 5 !== a2.tag);
    return a2 ? a2 : null;
  }
  function wf(a2, b2, c2, d2, e2) {
    for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
      var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
      if (null !== k2 && k2 === d2)
        break;
      5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
      c2 = c2.return;
    }
    0 !== g2.length && a2.push({ event: b2, listeners: g2 });
  }
  var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
  function zf(a2) {
    return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
  }
  function Af(a2, b2, c2) {
    b2 = zf(b2);
    if (zf(a2) !== b2 && c2)
      throw Error(p$3(425));
  }
  function Bf() {
  }
  var Cf = null, Df = null;
  function Ef(a2, b2) {
    return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
  }
  var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
    return Hf.resolve(null).then(a2).catch(If);
  } : Ff;
  function If(a2) {
    setTimeout(function() {
      throw a2;
    });
  }
  function Kf(a2, b2) {
    var c2 = b2, d2 = 0;
    do {
      var e2 = c2.nextSibling;
      a2.removeChild(c2);
      if (e2 && 8 === e2.nodeType)
        if (c2 = e2.data, "/$" === c2) {
          if (0 === d2) {
            a2.removeChild(e2);
            bd(b2);
            return;
          }
          d2--;
        } else
          "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
      c2 = e2;
    } while (c2);
    bd(b2);
  }
  function Lf(a2) {
    for (; null != a2; a2 = a2.nextSibling) {
      var b2 = a2.nodeType;
      if (1 === b2 || 3 === b2)
        break;
      if (8 === b2) {
        b2 = a2.data;
        if ("$" === b2 || "$!" === b2 || "$?" === b2)
          break;
        if ("/$" === b2)
          return null;
      }
    }
    return a2;
  }
  function Mf(a2) {
    a2 = a2.previousSibling;
    for (var b2 = 0; a2; ) {
      if (8 === a2.nodeType) {
        var c2 = a2.data;
        if ("$" === c2 || "$!" === c2 || "$?" === c2) {
          if (0 === b2)
            return a2;
          b2--;
        } else
          "/$" === c2 && b2++;
      }
      a2 = a2.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
  function Wc(a2) {
    var b2 = a2[Of];
    if (b2)
      return b2;
    for (var c2 = a2.parentNode; c2; ) {
      if (b2 = c2[uf] || c2[Of]) {
        c2 = b2.alternate;
        if (null !== b2.child || null !== c2 && null !== c2.child)
          for (a2 = Mf(a2); null !== a2; ) {
            if (c2 = a2[Of])
              return c2;
            a2 = Mf(a2);
          }
        return b2;
      }
      a2 = c2;
      c2 = a2.parentNode;
    }
    return null;
  }
  function Cb(a2) {
    a2 = a2[Of] || a2[uf];
    return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
  }
  function ue$1(a2) {
    if (5 === a2.tag || 6 === a2.tag)
      return a2.stateNode;
    throw Error(p$3(33));
  }
  function Db(a2) {
    return a2[Pf] || null;
  }
  var Sf = [], Tf = -1;
  function Uf(a2) {
    return { current: a2 };
  }
  function E(a2) {
    0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
  }
  function G$1(a2, b2) {
    Tf++;
    Sf[Tf] = a2.current;
    a2.current = b2;
  }
  var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
  function Yf(a2, b2) {
    var c2 = a2.type.contextTypes;
    if (!c2)
      return Vf;
    var d2 = a2.stateNode;
    if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
      return d2.__reactInternalMemoizedMaskedChildContext;
    var e2 = {}, f2;
    for (f2 in c2)
      e2[f2] = b2[f2];
    d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
    return e2;
  }
  function Zf(a2) {
    a2 = a2.childContextTypes;
    return null !== a2 && void 0 !== a2;
  }
  function $f() {
    E(Wf);
    E(H);
  }
  function ag(a2, b2, c2) {
    if (H.current !== Vf)
      throw Error(p$3(168));
    G$1(H, b2);
    G$1(Wf, c2);
  }
  function bg(a2, b2, c2) {
    var d2 = a2.stateNode;
    b2 = b2.childContextTypes;
    if ("function" !== typeof d2.getChildContext)
      return c2;
    d2 = d2.getChildContext();
    for (var e2 in d2)
      if (!(e2 in b2))
        throw Error(p$3(108, Ra(a2) || "Unknown", e2));
    return A$1({}, c2, d2);
  }
  function cg(a2) {
    a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H.current;
    G$1(H, a2);
    G$1(Wf, Wf.current);
    return true;
  }
  function dg(a2, b2, c2) {
    var d2 = a2.stateNode;
    if (!d2)
      throw Error(p$3(169));
    c2 ? (a2 = bg(a2, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E(Wf), E(H), G$1(H, a2)) : E(Wf);
    G$1(Wf, c2);
  }
  var eg = null, fg = false, gg = false;
  function hg(a2) {
    null === eg ? eg = [a2] : eg.push(a2);
  }
  function ig(a2) {
    fg = true;
    hg(a2);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a2 = 0, b2 = C;
      try {
        var c2 = eg;
        for (C = 1; a2 < c2.length; a2++) {
          var d2 = c2[a2];
          do
            d2 = d2(true);
          while (null !== d2);
        }
        eg = null;
        fg = false;
      } catch (e2) {
        throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
      } finally {
        C = b2, gg = false;
      }
    }
    return null;
  }
  var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
  function tg(a2, b2) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a2;
    ng = b2;
  }
  function ug(a2, b2, c2) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a2;
    var d2 = rg;
    a2 = sg;
    var e2 = 32 - oc(d2) - 1;
    d2 &= ~(1 << e2);
    c2 += 1;
    var f2 = 32 - oc(b2) + e2;
    if (30 < f2) {
      var g2 = e2 - e2 % 5;
      f2 = (d2 & (1 << g2) - 1).toString(32);
      d2 >>= g2;
      e2 -= g2;
      rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
      sg = f2 + a2;
    } else
      rg = 1 << f2 | c2 << e2 | d2, sg = a2;
  }
  function vg(a2) {
    null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
  }
  function wg(a2) {
    for (; a2 === mg; )
      mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (; a2 === qg; )
      qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  }
  var xg = null, yg = null, I$1 = false, zg = null;
  function Ag(a2, b2) {
    var c2 = Bg(5, null, null, 0);
    c2.elementType = "DELETED";
    c2.stateNode = b2;
    c2.return = a2;
    b2 = a2.deletions;
    null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
  }
  function Cg(a2, b2) {
    switch (a2.tag) {
      case 5:
        var c2 = a2.type;
        b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
        return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
      case 6:
        return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
      case 13:
        return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
      default:
        return false;
    }
  }
  function Dg(a2) {
    return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
  }
  function Eg(a2) {
    if (I$1) {
      var b2 = yg;
      if (b2) {
        var c2 = b2;
        if (!Cg(a2, b2)) {
          if (Dg(a2))
            throw Error(p$3(418));
          b2 = Lf(c2.nextSibling);
          var d2 = xg;
          b2 && Cg(a2, b2) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I$1 = false, xg = a2);
        }
      } else {
        if (Dg(a2))
          throw Error(p$3(418));
        a2.flags = a2.flags & -4097 | 2;
        I$1 = false;
        xg = a2;
      }
    }
  }
  function Fg(a2) {
    for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; )
      a2 = a2.return;
    xg = a2;
  }
  function Gg(a2) {
    if (a2 !== xg)
      return false;
    if (!I$1)
      return Fg(a2), I$1 = true, false;
    var b2;
    (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
    if (b2 && (b2 = yg)) {
      if (Dg(a2))
        throw Hg(), Error(p$3(418));
      for (; b2; )
        Ag(a2, b2), b2 = Lf(b2.nextSibling);
    }
    Fg(a2);
    if (13 === a2.tag) {
      a2 = a2.memoizedState;
      a2 = null !== a2 ? a2.dehydrated : null;
      if (!a2)
        throw Error(p$3(317));
      a: {
        a2 = a2.nextSibling;
        for (b2 = 0; a2; ) {
          if (8 === a2.nodeType) {
            var c2 = a2.data;
            if ("/$" === c2) {
              if (0 === b2) {
                yg = Lf(a2.nextSibling);
                break a;
              }
              b2--;
            } else
              "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
          }
          a2 = a2.nextSibling;
        }
        yg = null;
      }
    } else
      yg = xg ? Lf(a2.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a2 = yg; a2; )
      a2 = Lf(a2.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I$1 = false;
  }
  function Jg(a2) {
    null === zg ? zg = [a2] : zg.push(a2);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a2, b2) {
    if (a2 && a2.defaultProps) {
      b2 = A$1({}, b2);
      a2 = a2.defaultProps;
      for (var c2 in a2)
        void 0 === b2[c2] && (b2[c2] = a2[c2]);
      return b2;
    }
    return b2;
  }
  var Mg = Uf(null), Ng = null, Og = null, Pg = null;
  function Qg() {
    Pg = Og = Ng = null;
  }
  function Rg(a2) {
    var b2 = Mg.current;
    E(Mg);
    a2._currentValue = b2;
  }
  function Sg(a2, b2, c2) {
    for (; null !== a2; ) {
      var d2 = a2.alternate;
      (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
      if (a2 === c2)
        break;
      a2 = a2.return;
    }
  }
  function Tg(a2, b2) {
    Ng = a2;
    Pg = Og = null;
    a2 = a2.dependencies;
    null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (Ug = true), a2.firstContext = null);
  }
  function Vg(a2) {
    var b2 = a2._currentValue;
    if (Pg !== a2)
      if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Og) {
        if (null === Ng)
          throw Error(p$3(308));
        Og = a2;
        Ng.dependencies = { lanes: 0, firstContext: a2 };
      } else
        Og = Og.next = a2;
    return b2;
  }
  var Wg = null;
  function Xg(a2) {
    null === Wg ? Wg = [a2] : Wg.push(a2);
  }
  function Yg(a2, b2, c2, d2) {
    var e2 = b2.interleaved;
    null === e2 ? (c2.next = c2, Xg(b2)) : (c2.next = e2.next, e2.next = c2);
    b2.interleaved = c2;
    return Zg(a2, d2);
  }
  function Zg(a2, b2) {
    a2.lanes |= b2;
    var c2 = a2.alternate;
    null !== c2 && (c2.lanes |= b2);
    c2 = a2;
    for (a2 = a2.return; null !== a2; )
      a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
    return 3 === c2.tag ? c2.stateNode : null;
  }
  var $g = false;
  function ah(a2) {
    a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function bh(a2, b2) {
    a2 = a2.updateQueue;
    b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
  }
  function ch(a2, b2) {
    return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
  }
  function dh(a2, b2, c2) {
    var d2 = a2.updateQueue;
    if (null === d2)
      return null;
    d2 = d2.shared;
    if (0 !== (K & 2)) {
      var e2 = d2.pending;
      null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
      d2.pending = b2;
      return Zg(a2, c2);
    }
    e2 = d2.interleaved;
    null === e2 ? (b2.next = b2, Xg(d2)) : (b2.next = e2.next, e2.next = b2);
    d2.interleaved = b2;
    return Zg(a2, c2);
  }
  function eh(a2, b2, c2) {
    b2 = b2.updateQueue;
    if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
      var d2 = b2.lanes;
      d2 &= a2.pendingLanes;
      c2 |= d2;
      b2.lanes = c2;
      Cc(a2, c2);
    }
  }
  function fh(a2, b2) {
    var c2 = a2.updateQueue, d2 = a2.alternate;
    if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
      var e2 = null, f2 = null;
      c2 = c2.firstBaseUpdate;
      if (null !== c2) {
        do {
          var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
          null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
          c2 = c2.next;
        } while (null !== c2);
        null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
      } else
        e2 = f2 = b2;
      c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
      a2.updateQueue = c2;
      return;
    }
    a2 = c2.lastBaseUpdate;
    null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
    c2.lastBaseUpdate = b2;
  }
  function gh(a2, b2, c2, d2) {
    var e2 = a2.updateQueue;
    $g = false;
    var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
    if (null !== h2) {
      e2.shared.pending = null;
      var k2 = h2, l2 = k2.next;
      k2.next = null;
      null === g2 ? f2 = l2 : g2.next = l2;
      g2 = k2;
      var m2 = a2.alternate;
      null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
    }
    if (null !== f2) {
      var q2 = e2.baseState;
      g2 = 0;
      m2 = l2 = k2 = null;
      h2 = f2;
      do {
        var r2 = h2.lane, y2 = h2.eventTime;
        if ((d2 & r2) === r2) {
          null !== m2 && (m2 = m2.next = {
            eventTime: y2,
            lane: 0,
            tag: h2.tag,
            payload: h2.payload,
            callback: h2.callback,
            next: null
          });
          a: {
            var n2 = a2, t2 = h2;
            r2 = b2;
            y2 = c2;
            switch (t2.tag) {
              case 1:
                n2 = t2.payload;
                if ("function" === typeof n2) {
                  q2 = n2.call(y2, q2, r2);
                  break a;
                }
                q2 = n2;
                break a;
              case 3:
                n2.flags = n2.flags & -65537 | 128;
              case 0:
                n2 = t2.payload;
                r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                if (null === r2 || void 0 === r2)
                  break a;
                q2 = A$1({}, q2, r2);
                break a;
              case 2:
                $g = true;
            }
          }
          null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
        } else
          y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
        h2 = h2.next;
        if (null === h2)
          if (h2 = e2.shared.pending, null === h2)
            break;
          else
            r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
      } while (1);
      null === m2 && (k2 = q2);
      e2.baseState = k2;
      e2.firstBaseUpdate = l2;
      e2.lastBaseUpdate = m2;
      b2 = e2.shared.interleaved;
      if (null !== b2) {
        e2 = b2;
        do
          g2 |= e2.lane, e2 = e2.next;
        while (e2 !== b2);
      } else
        null === f2 && (e2.shared.lanes = 0);
      hh |= g2;
      a2.lanes = g2;
      a2.memoizedState = q2;
    }
  }
  function ih(a2, b2, c2) {
    a2 = b2.effects;
    b2.effects = null;
    if (null !== a2)
      for (b2 = 0; b2 < a2.length; b2++) {
        var d2 = a2[b2], e2 = d2.callback;
        if (null !== e2) {
          d2.callback = null;
          d2 = c2;
          if ("function" !== typeof e2)
            throw Error(p$3(191, e2));
          e2.call(d2);
        }
      }
  }
  var jh = new aa.Component().refs;
  function kh(a2, b2, c2, d2) {
    b2 = a2.memoizedState;
    c2 = c2(d2, b2);
    c2 = null === c2 || void 0 === c2 ? b2 : A$1({}, b2, c2);
    a2.memoizedState = c2;
    0 === a2.lanes && (a2.updateQueue.baseState = c2);
  }
  var nh = { isMounted: function(a2) {
    return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
  }, enqueueSetState: function(a2, b2, c2) {
    a2 = a2._reactInternals;
    var d2 = L(), e2 = lh(a2), f2 = ch(d2, e2);
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = dh(a2, f2, e2);
    null !== b2 && (mh(b2, a2, e2, d2), eh(b2, a2, e2));
  }, enqueueReplaceState: function(a2, b2, c2) {
    a2 = a2._reactInternals;
    var d2 = L(), e2 = lh(a2), f2 = ch(d2, e2);
    f2.tag = 1;
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = dh(a2, f2, e2);
    null !== b2 && (mh(b2, a2, e2, d2), eh(b2, a2, e2));
  }, enqueueForceUpdate: function(a2, b2) {
    a2 = a2._reactInternals;
    var c2 = L(), d2 = lh(a2), e2 = ch(c2, d2);
    e2.tag = 2;
    void 0 !== b2 && null !== b2 && (e2.callback = b2);
    b2 = dh(a2, e2, d2);
    null !== b2 && (mh(b2, a2, d2, c2), eh(b2, a2, d2));
  } };
  function oh(a2, b2, c2, d2, e2, f2, g2) {
    a2 = a2.stateNode;
    return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie$1(c2, d2) || !Ie$1(e2, f2) : true;
  }
  function ph(a2, b2, c2) {
    var d2 = false, e2 = Vf;
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b2) ? Xf : H.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
    b2 = new b2(c2, f2);
    a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
    b2.updater = nh;
    a2.stateNode = b2;
    b2._reactInternals = a2;
    d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
    return b2;
  }
  function qh(a2, b2, c2, d2) {
    a2 = b2.state;
    "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
    "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
    b2.state !== a2 && nh.enqueueReplaceState(b2, b2.state, null);
  }
  function rh(a2, b2, c2, d2) {
    var e2 = a2.stateNode;
    e2.props = c2;
    e2.state = a2.memoizedState;
    e2.refs = jh;
    ah(a2);
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H.current, e2.context = Yf(a2, f2));
    e2.state = a2.memoizedState;
    f2 = b2.getDerivedStateFromProps;
    "function" === typeof f2 && (kh(a2, b2, f2, c2), e2.state = a2.memoizedState);
    "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a2, c2, e2, d2), e2.state = a2.memoizedState);
    "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
  }
  function sh(a2, b2, c2) {
    a2 = c2.ref;
    if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
      if (c2._owner) {
        c2 = c2._owner;
        if (c2) {
          if (1 !== c2.tag)
            throw Error(p$3(309));
          var d2 = c2.stateNode;
        }
        if (!d2)
          throw Error(p$3(147, a2));
        var e2 = d2, f2 = "" + a2;
        if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2)
          return b2.ref;
        b2 = function(a3) {
          var b3 = e2.refs;
          b3 === jh && (b3 = e2.refs = {});
          null === a3 ? delete b3[f2] : b3[f2] = a3;
        };
        b2._stringRef = f2;
        return b2;
      }
      if ("string" !== typeof a2)
        throw Error(p$3(284));
      if (!c2._owner)
        throw Error(p$3(290, a2));
    }
    return a2;
  }
  function th(a2, b2) {
    a2 = Object.prototype.toString.call(b2);
    throw Error(p$3(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
  }
  function uh(a2) {
    var b2 = a2._init;
    return b2(a2._payload);
  }
  function vh(a2) {
    function b2(b3, c3) {
      if (a2) {
        var d3 = b3.deletions;
        null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
      }
    }
    function c2(c3, d3) {
      if (!a2)
        return null;
      for (; null !== d3; )
        b2(c3, d3), d3 = d3.sibling;
      return null;
    }
    function d2(a3, b3) {
      for (a3 = /* @__PURE__ */ new Map(); null !== b3; )
        null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
      return a3;
    }
    function e2(a3, b3) {
      a3 = wh(a3, b3);
      a3.index = 0;
      a3.sibling = null;
      return a3;
    }
    function f2(b3, c3, d3) {
      b3.index = d3;
      if (!a2)
        return b3.flags |= 1048576, c3;
      d3 = b3.alternate;
      if (null !== d3)
        return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
      b3.flags |= 2;
      return c3;
    }
    function g2(b3) {
      a2 && null === b3.alternate && (b3.flags |= 2);
      return b3;
    }
    function h2(a3, b3, c3, d3) {
      if (null === b3 || 6 !== b3.tag)
        return b3 = xh(c3, a3.mode, d3), b3.return = a3, b3;
      b3 = e2(b3, c3);
      b3.return = a3;
      return b3;
    }
    function k2(a3, b3, c3, d3) {
      var f3 = c3.type;
      if (f3 === ya)
        return m2(a3, b3, c3.props.children, d3, c3.key);
      if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b3.type))
        return d3 = e2(b3, c3.props), d3.ref = sh(a3, b3, c3), d3.return = a3, d3;
      d3 = yh(c3.type, c3.key, c3.props, null, a3.mode, d3);
      d3.ref = sh(a3, b3, c3);
      d3.return = a3;
      return d3;
    }
    function l2(a3, b3, c3, d3) {
      if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
        return b3 = zh(c3, a3.mode, d3), b3.return = a3, b3;
      b3 = e2(b3, c3.children || []);
      b3.return = a3;
      return b3;
    }
    function m2(a3, b3, c3, d3, f3) {
      if (null === b3 || 7 !== b3.tag)
        return b3 = Ah(c3, a3.mode, d3, f3), b3.return = a3, b3;
      b3 = e2(b3, c3);
      b3.return = a3;
      return b3;
    }
    function q2(a3, b3, c3) {
      if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3)
        return b3 = xh("" + b3, a3.mode, c3), b3.return = a3, b3;
      if ("object" === typeof b3 && null !== b3) {
        switch (b3.$$typeof) {
          case va:
            return c3 = yh(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = sh(a3, null, b3), c3.return = a3, c3;
          case wa:
            return b3 = zh(b3, a3.mode, c3), b3.return = a3, b3;
          case Ha:
            var d3 = b3._init;
            return q2(a3, d3(b3._payload), c3);
        }
        if (eb(b3) || Ka(b3))
          return b3 = Ah(b3, a3.mode, c3, null), b3.return = a3, b3;
        th(a3, b3);
      }
      return null;
    }
    function r2(a3, b3, c3, d3) {
      var e3 = null !== b3 ? b3.key : null;
      if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
        return null !== e3 ? null : h2(a3, b3, "" + c3, d3);
      if ("object" === typeof c3 && null !== c3) {
        switch (c3.$$typeof) {
          case va:
            return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
          case wa:
            return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
          case Ha:
            return e3 = c3._init, r2(
              a3,
              b3,
              e3(c3._payload),
              d3
            );
        }
        if (eb(c3) || Ka(c3))
          return null !== e3 ? null : m2(a3, b3, c3, d3, null);
        th(a3, c3);
      }
      return null;
    }
    function y2(a3, b3, c3, d3, e3) {
      if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3)
        return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
      if ("object" === typeof d3 && null !== d3) {
        switch (d3.$$typeof) {
          case va:
            return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
          case wa:
            return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
          case Ha:
            var f3 = d3._init;
            return y2(a3, b3, c3, f3(d3._payload), e3);
        }
        if (eb(d3) || Ka(d3))
          return a3 = a3.get(c3) || null, m2(b3, a3, d3, e3, null);
        th(b3, d3);
      }
      return null;
    }
    function n2(e3, g3, h3, k3) {
      for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
        u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
        var n3 = r2(e3, u2, h3[w2], k3);
        if (null === n3) {
          null === u2 && (u2 = x2);
          break;
        }
        a2 && u2 && null === n3.alternate && b2(e3, u2);
        g3 = f2(n3, g3, w2);
        null === m3 ? l3 = n3 : m3.sibling = n3;
        m3 = n3;
        u2 = x2;
      }
      if (w2 === h3.length)
        return c2(e3, u2), I$1 && tg(e3, w2), l3;
      if (null === u2) {
        for (; w2 < h3.length; w2++)
          u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
        I$1 && tg(e3, w2);
        return l3;
      }
      for (u2 = d2(e3, u2); w2 < h3.length; w2++)
        x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
      a2 && u2.forEach(function(a3) {
        return b2(e3, a3);
      });
      I$1 && tg(e3, w2);
      return l3;
    }
    function t2(e3, g3, h3, k3) {
      var l3 = Ka(h3);
      if ("function" !== typeof l3)
        throw Error(p$3(150));
      h3 = l3.call(h3);
      if (null == h3)
        throw Error(p$3(151));
      for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
        m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
        var t3 = r2(e3, m3, n3.value, k3);
        if (null === t3) {
          null === m3 && (m3 = x2);
          break;
        }
        a2 && m3 && null === t3.alternate && b2(e3, m3);
        g3 = f2(t3, g3, w2);
        null === u2 ? l3 = t3 : u2.sibling = t3;
        u2 = t3;
        m3 = x2;
      }
      if (n3.done)
        return c2(
          e3,
          m3
        ), I$1 && tg(e3, w2), l3;
      if (null === m3) {
        for (; !n3.done; w2++, n3 = h3.next())
          n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        I$1 && tg(e3, w2);
        return l3;
      }
      for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next())
        n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      a2 && m3.forEach(function(a3) {
        return b2(e3, a3);
      });
      I$1 && tg(e3, w2);
      return l3;
    }
    function J2(a3, d3, f3, h3) {
      "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
      if ("object" === typeof f3 && null !== f3) {
        switch (f3.$$typeof) {
          case va:
            a: {
              for (var k3 = f3.key, l3 = d3; null !== l3; ) {
                if (l3.key === k3) {
                  k3 = f3.type;
                  if (k3 === ya) {
                    if (7 === l3.tag) {
                      c2(a3, l3.sibling);
                      d3 = e2(l3, f3.props.children);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    }
                  } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props);
                    d3.ref = sh(a3, l3, f3);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                  c2(a3, l3);
                  break;
                } else
                  b2(a3, l3);
                l3 = l3.sibling;
              }
              f3.type === ya ? (d3 = Ah(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = yh(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = sh(a3, d3, f3), h3.return = a3, a3 = h3);
            }
            return g2(a3);
          case wa:
            a: {
              for (l3 = f3.key; null !== d3; ) {
                if (d3.key === l3)
                  if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                    c2(a3, d3.sibling);
                    d3 = e2(d3, f3.children || []);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  } else {
                    c2(a3, d3);
                    break;
                  }
                else
                  b2(a3, d3);
                d3 = d3.sibling;
              }
              d3 = zh(f3, a3.mode, h3);
              d3.return = a3;
              a3 = d3;
            }
            return g2(a3);
          case Ha:
            return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
        }
        if (eb(f3))
          return n2(a3, d3, f3, h3);
        if (Ka(f3))
          return t2(a3, d3, f3, h3);
        th(a3, f3);
      }
      return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = xh(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
    }
    return J2;
  }
  var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
  function Hh(a2) {
    if (a2 === Dh)
      throw Error(p$3(174));
    return a2;
  }
  function Ih(a2, b2) {
    G$1(Gh, b2);
    G$1(Fh, a2);
    G$1(Eh, Dh);
    a2 = b2.nodeType;
    switch (a2) {
      case 9:
      case 11:
        b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
        break;
      default:
        a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
    }
    E(Eh);
    G$1(Eh, b2);
  }
  function Jh() {
    E(Eh);
    E(Fh);
    E(Gh);
  }
  function Kh(a2) {
    Hh(Gh.current);
    var b2 = Hh(Eh.current);
    var c2 = lb(b2, a2.type);
    b2 !== c2 && (G$1(Fh, a2), G$1(Eh, c2));
  }
  function Lh(a2) {
    Fh.current === a2 && (E(Eh), E(Fh));
  }
  var M$1 = Uf(0);
  function Mh(a2) {
    for (var b2 = a2; null !== b2; ) {
      if (13 === b2.tag) {
        var c2 = b2.memoizedState;
        if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
          return b2;
      } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
        if (0 !== (b2.flags & 128))
          return b2;
      } else if (null !== b2.child) {
        b2.child.return = b2;
        b2 = b2.child;
        continue;
      }
      if (b2 === a2)
        break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2)
          return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
    return null;
  }
  var Nh = [];
  function Oh() {
    for (var a2 = 0; a2 < Nh.length; a2++)
      Nh[a2]._workInProgressVersionPrimary = null;
    Nh.length = 0;
  }
  var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O$1 = null, P$1 = null, Sh = false, Th = false, Uh = 0, Vh = 0;
  function Q$1() {
    throw Error(p$3(321));
  }
  function Wh(a2, b2) {
    if (null === b2)
      return false;
    for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
      if (!He(a2[c2], b2[c2]))
        return false;
    return true;
  }
  function Xh(a2, b2, c2, d2, e2, f2) {
    Rh = f2;
    N = b2;
    b2.memoizedState = null;
    b2.updateQueue = null;
    b2.lanes = 0;
    Ph.current = null === a2 || null === a2.memoizedState ? Yh : Zh;
    a2 = c2(d2, e2);
    if (Th) {
      f2 = 0;
      do {
        Th = false;
        Uh = 0;
        if (25 <= f2)
          throw Error(p$3(301));
        f2 += 1;
        P$1 = O$1 = null;
        b2.updateQueue = null;
        Ph.current = $h;
        a2 = c2(d2, e2);
      } while (Th);
    }
    Ph.current = ai;
    b2 = null !== O$1 && null !== O$1.next;
    Rh = 0;
    P$1 = O$1 = N = null;
    Sh = false;
    if (b2)
      throw Error(p$3(300));
    return a2;
  }
  function bi() {
    var a2 = 0 !== Uh;
    Uh = 0;
    return a2;
  }
  function ci() {
    var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === P$1 ? N.memoizedState = P$1 = a2 : P$1 = P$1.next = a2;
    return P$1;
  }
  function di() {
    if (null === O$1) {
      var a2 = N.alternate;
      a2 = null !== a2 ? a2.memoizedState : null;
    } else
      a2 = O$1.next;
    var b2 = null === P$1 ? N.memoizedState : P$1.next;
    if (null !== b2)
      P$1 = b2, O$1 = a2;
    else {
      if (null === a2)
        throw Error(p$3(310));
      O$1 = a2;
      a2 = { memoizedState: O$1.memoizedState, baseState: O$1.baseState, baseQueue: O$1.baseQueue, queue: O$1.queue, next: null };
      null === P$1 ? N.memoizedState = P$1 = a2 : P$1 = P$1.next = a2;
    }
    return P$1;
  }
  function ei(a2, b2) {
    return "function" === typeof b2 ? b2(a2) : b2;
  }
  function fi(a2) {
    var b2 = di(), c2 = b2.queue;
    if (null === c2)
      throw Error(p$3(311));
    c2.lastRenderedReducer = a2;
    var d2 = O$1, e2 = d2.baseQueue, f2 = c2.pending;
    if (null !== f2) {
      if (null !== e2) {
        var g2 = e2.next;
        e2.next = f2.next;
        f2.next = g2;
      }
      d2.baseQueue = e2 = f2;
      c2.pending = null;
    }
    if (null !== e2) {
      f2 = e2.next;
      d2 = d2.baseState;
      var h2 = g2 = null, k2 = null, l2 = f2;
      do {
        var m2 = l2.lane;
        if ((Rh & m2) === m2)
          null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
        else {
          var q2 = {
            lane: m2,
            action: l2.action,
            hasEagerState: l2.hasEagerState,
            eagerState: l2.eagerState,
            next: null
          };
          null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
          N.lanes |= m2;
          hh |= m2;
        }
        l2 = l2.next;
      } while (null !== l2 && l2 !== f2);
      null === k2 ? g2 = d2 : k2.next = h2;
      He(d2, b2.memoizedState) || (Ug = true);
      b2.memoizedState = d2;
      b2.baseState = g2;
      b2.baseQueue = k2;
      c2.lastRenderedState = d2;
    }
    a2 = c2.interleaved;
    if (null !== a2) {
      e2 = a2;
      do
        f2 = e2.lane, N.lanes |= f2, hh |= f2, e2 = e2.next;
      while (e2 !== a2);
    } else
      null === e2 && (c2.lanes = 0);
    return [b2.memoizedState, c2.dispatch];
  }
  function gi(a2) {
    var b2 = di(), c2 = b2.queue;
    if (null === c2)
      throw Error(p$3(311));
    c2.lastRenderedReducer = a2;
    var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
    if (null !== e2) {
      c2.pending = null;
      var g2 = e2 = e2.next;
      do
        f2 = a2(f2, g2.action), g2 = g2.next;
      while (g2 !== e2);
      He(f2, b2.memoizedState) || (Ug = true);
      b2.memoizedState = f2;
      null === b2.baseQueue && (b2.baseState = f2);
      c2.lastRenderedState = f2;
    }
    return [f2, d2];
  }
  function hi() {
  }
  function ii(a2, b2) {
    var c2 = N, d2 = di(), e2 = b2(), f2 = !He(d2.memoizedState, e2);
    f2 && (d2.memoizedState = e2, Ug = true);
    d2 = d2.queue;
    ji(ki.bind(null, c2, d2, a2), [a2]);
    if (d2.getSnapshot !== b2 || f2 || null !== P$1 && P$1.memoizedState.tag & 1) {
      c2.flags |= 2048;
      li(9, mi.bind(null, c2, d2, e2, b2), void 0, null);
      if (null === R)
        throw Error(p$3(349));
      0 !== (Rh & 30) || ni(c2, b2, e2);
    }
    return e2;
  }
  function ni(a2, b2, c2) {
    a2.flags |= 16384;
    a2 = { getSnapshot: b2, value: c2 };
    b2 = N.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
  }
  function mi(a2, b2, c2, d2) {
    b2.value = c2;
    b2.getSnapshot = d2;
    oi(b2) && pi(a2);
  }
  function ki(a2, b2, c2) {
    return c2(function() {
      oi(b2) && pi(a2);
    });
  }
  function oi(a2) {
    var b2 = a2.getSnapshot;
    a2 = a2.value;
    try {
      var c2 = b2();
      return !He(a2, c2);
    } catch (d2) {
      return true;
    }
  }
  function pi(a2) {
    var b2 = Zg(a2, 1);
    null !== b2 && mh(b2, a2, 1, -1);
  }
  function qi(a2) {
    var b2 = ci();
    "function" === typeof a2 && (a2 = a2());
    b2.memoizedState = b2.baseState = a2;
    a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a2 };
    b2.queue = a2;
    a2 = a2.dispatch = ri.bind(null, N, a2);
    return [b2.memoizedState, a2];
  }
  function li(a2, b2, c2, d2) {
    a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
    b2 = N.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
    return a2;
  }
  function si() {
    return di().memoizedState;
  }
  function ti(a2, b2, c2, d2) {
    var e2 = ci();
    N.flags |= a2;
    e2.memoizedState = li(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
  }
  function ui(a2, b2, c2, d2) {
    var e2 = di();
    d2 = void 0 === d2 ? null : d2;
    var f2 = void 0;
    if (null !== O$1) {
      var g2 = O$1.memoizedState;
      f2 = g2.destroy;
      if (null !== d2 && Wh(d2, g2.deps)) {
        e2.memoizedState = li(b2, c2, f2, d2);
        return;
      }
    }
    N.flags |= a2;
    e2.memoizedState = li(1 | b2, c2, f2, d2);
  }
  function vi(a2, b2) {
    return ti(8390656, 8, a2, b2);
  }
  function ji(a2, b2) {
    return ui(2048, 8, a2, b2);
  }
  function wi(a2, b2) {
    return ui(4, 2, a2, b2);
  }
  function xi(a2, b2) {
    return ui(4, 4, a2, b2);
  }
  function yi(a2, b2) {
    if ("function" === typeof b2)
      return a2 = a2(), b2(a2), function() {
        b2(null);
      };
    if (null !== b2 && void 0 !== b2)
      return a2 = a2(), b2.current = a2, function() {
        b2.current = null;
      };
  }
  function zi(a2, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
    return ui(4, 4, yi.bind(null, b2, a2), c2);
  }
  function Ai() {
  }
  function Bi(a2, b2) {
    var c2 = di();
    b2 = void 0 === b2 ? null : b2;
    var d2 = c2.memoizedState;
    if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
      return d2[0];
    c2.memoizedState = [a2, b2];
    return a2;
  }
  function Ci(a2, b2) {
    var c2 = di();
    b2 = void 0 === b2 ? null : b2;
    var d2 = c2.memoizedState;
    if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
      return d2[0];
    a2 = a2();
    c2.memoizedState = [a2, b2];
    return a2;
  }
  function Di(a2, b2, c2) {
    if (0 === (Rh & 21))
      return a2.baseState && (a2.baseState = false, Ug = true), a2.memoizedState = c2;
    He(c2, b2) || (c2 = yc(), N.lanes |= c2, hh |= c2, a2.baseState = true);
    return b2;
  }
  function Ei(a2, b2) {
    var c2 = C;
    C = 0 !== c2 && 4 > c2 ? c2 : 4;
    a2(true);
    var d2 = Qh.transition;
    Qh.transition = {};
    try {
      a2(false), b2();
    } finally {
      C = c2, Qh.transition = d2;
    }
  }
  function Fi() {
    return di().memoizedState;
  }
  function Gi(a2, b2, c2) {
    var d2 = lh(a2);
    c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (Hi(a2))
      Ii(b2, c2);
    else if (c2 = Yg(a2, b2, c2, d2), null !== c2) {
      var e2 = L();
      mh(c2, a2, d2, e2);
      Ji(c2, b2, d2);
    }
  }
  function ri(a2, b2, c2) {
    var d2 = lh(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (Hi(a2))
      Ii(b2, e2);
    else {
      var f2 = a2.alternate;
      if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2))
        try {
          var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
          e2.hasEagerState = true;
          e2.eagerState = h2;
          if (He(h2, g2)) {
            var k2 = b2.interleaved;
            null === k2 ? (e2.next = e2, Xg(b2)) : (e2.next = k2.next, k2.next = e2);
            b2.interleaved = e2;
            return;
          }
        } catch (l2) {
        } finally {
        }
      c2 = Yg(a2, b2, e2, d2);
      null !== c2 && (e2 = L(), mh(c2, a2, d2, e2), Ji(c2, b2, d2));
    }
  }
  function Hi(a2) {
    var b2 = a2.alternate;
    return a2 === N || null !== b2 && b2 === N;
  }
  function Ii(a2, b2) {
    Th = Sh = true;
    var c2 = a2.pending;
    null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a2.pending = b2;
  }
  function Ji(a2, b2, c2) {
    if (0 !== (c2 & 4194240)) {
      var d2 = b2.lanes;
      d2 &= a2.pendingLanes;
      c2 |= d2;
      b2.lanes = c2;
      Cc(a2, c2);
    }
  }
  var ai = { readContext: Vg, useCallback: Q$1, useContext: Q$1, useEffect: Q$1, useImperativeHandle: Q$1, useInsertionEffect: Q$1, useLayoutEffect: Q$1, useMemo: Q$1, useReducer: Q$1, useRef: Q$1, useState: Q$1, useDebugValue: Q$1, useDeferredValue: Q$1, useTransition: Q$1, useMutableSource: Q$1, useSyncExternalStore: Q$1, useId: Q$1, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a2, b2) {
    ci().memoizedState = [a2, void 0 === b2 ? null : b2];
    return a2;
  }, useContext: Vg, useEffect: vi, useImperativeHandle: function(a2, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
    return ti(
      4194308,
      4,
      yi.bind(null, b2, a2),
      c2
    );
  }, useLayoutEffect: function(a2, b2) {
    return ti(4194308, 4, a2, b2);
  }, useInsertionEffect: function(a2, b2) {
    return ti(4, 2, a2, b2);
  }, useMemo: function(a2, b2) {
    var c2 = ci();
    b2 = void 0 === b2 ? null : b2;
    a2 = a2();
    c2.memoizedState = [a2, b2];
    return a2;
  }, useReducer: function(a2, b2, c2) {
    var d2 = ci();
    b2 = void 0 !== c2 ? c2(b2) : b2;
    d2.memoizedState = d2.baseState = b2;
    a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
    d2.queue = a2;
    a2 = a2.dispatch = Gi.bind(null, N, a2);
    return [d2.memoizedState, a2];
  }, useRef: function(a2) {
    var b2 = ci();
    a2 = { current: a2 };
    return b2.memoizedState = a2;
  }, useState: qi, useDebugValue: Ai, useDeferredValue: function(a2) {
    return ci().memoizedState = a2;
  }, useTransition: function() {
    var a2 = qi(false), b2 = a2[0];
    a2 = Ei.bind(null, a2[1]);
    ci().memoizedState = a2;
    return [b2, a2];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a2, b2, c2) {
    var d2 = N, e2 = ci();
    if (I$1) {
      if (void 0 === c2)
        throw Error(p$3(407));
      c2 = c2();
    } else {
      c2 = b2();
      if (null === R)
        throw Error(p$3(349));
      0 !== (Rh & 30) || ni(d2, b2, c2);
    }
    e2.memoizedState = c2;
    var f2 = { value: c2, getSnapshot: b2 };
    e2.queue = f2;
    vi(ki.bind(
      null,
      d2,
      f2,
      a2
    ), [a2]);
    d2.flags |= 2048;
    li(9, mi.bind(null, d2, f2, c2, b2), void 0, null);
    return c2;
  }, useId: function() {
    var a2 = ci(), b2 = R.identifierPrefix;
    if (I$1) {
      var c2 = sg;
      var d2 = rg;
      c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
      b2 = ":" + b2 + "R" + c2;
      c2 = Uh++;
      0 < c2 && (b2 += "H" + c2.toString(32));
      b2 += ":";
    } else
      c2 = Vh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
    return a2.memoizedState = b2;
  }, unstable_isNewReconciler: false }, Zh = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: fi,
    useRef: si,
    useState: function() {
      return fi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function(a2) {
      var b2 = di();
      return Di(b2, O$1.memoizedState, a2);
    },
    useTransition: function() {
      var a2 = fi(ei)[0], b2 = di().memoizedState;
      return [a2, b2];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: false
  }, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
    return gi(ei);
  }, useDebugValue: Ai, useDeferredValue: function(a2) {
    var b2 = di();
    return null === O$1 ? b2.memoizedState = a2 : Di(b2, O$1.memoizedState, a2);
  }, useTransition: function() {
    var a2 = gi(ei)[0], b2 = di().memoizedState;
    return [a2, b2];
  }, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
  function Ki(a2, b2) {
    try {
      var c2 = "", d2 = b2;
      do
        c2 += Pa(d2), d2 = d2.return;
      while (d2);
      var e2 = c2;
    } catch (f2) {
      e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
    }
    return { value: a2, source: b2, stack: e2, digest: null };
  }
  function Li(a2, b2, c2) {
    return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
  }
  function Mi(a2, b2) {
    try {
      console.error(b2.value);
    } catch (c2) {
      setTimeout(function() {
        throw c2;
      });
    }
  }
  var Ni = "function" === typeof WeakMap ? WeakMap : Map;
  function Oi(a2, b2, c2) {
    c2 = ch(-1, c2);
    c2.tag = 3;
    c2.payload = { element: null };
    var d2 = b2.value;
    c2.callback = function() {
      Pi || (Pi = true, Qi = d2);
      Mi(a2, b2);
    };
    return c2;
  }
  function Ri(a2, b2, c2) {
    c2 = ch(-1, c2);
    c2.tag = 3;
    var d2 = a2.type.getDerivedStateFromError;
    if ("function" === typeof d2) {
      var e2 = b2.value;
      c2.payload = function() {
        return d2(e2);
      };
      c2.callback = function() {
        Mi(a2, b2);
      };
    }
    var f2 = a2.stateNode;
    null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
      Mi(a2, b2);
      "function" !== typeof d2 && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
      var c3 = b2.stack;
      this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
    });
    return c2;
  }
  function Ti(a2, b2, c2) {
    var d2 = a2.pingCache;
    if (null === d2) {
      d2 = a2.pingCache = new Ni();
      var e2 = /* @__PURE__ */ new Set();
      d2.set(b2, e2);
    } else
      e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
    e2.has(c2) || (e2.add(c2), a2 = Ui.bind(null, a2, b2, c2), b2.then(a2, a2));
  }
  function Vi(a2) {
    do {
      var b2;
      if (b2 = 13 === a2.tag)
        b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
      if (b2)
        return a2;
      a2 = a2.return;
    } while (null !== a2);
    return null;
  }
  function Wi(a2, b2, c2, d2, e2) {
    if (0 === (a2.mode & 1))
      return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = ch(-1, 1), b2.tag = 2, dh(c2, b2, 1))), c2.lanes |= 1), a2;
    a2.flags |= 65536;
    a2.lanes = e2;
    return a2;
  }
  var Xi = ua.ReactCurrentOwner, Ug = false;
  function Yi(a2, b2, c2, d2) {
    b2.child = null === a2 ? Ch(b2, null, c2, d2) : Bh(b2, a2.child, c2, d2);
  }
  function Zi(a2, b2, c2, d2, e2) {
    c2 = c2.render;
    var f2 = b2.ref;
    Tg(b2, e2);
    d2 = Xh(a2, b2, c2, d2, f2, e2);
    c2 = bi();
    if (null !== a2 && !Ug)
      return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, $i(a2, b2, e2);
    I$1 && c2 && vg(b2);
    b2.flags |= 1;
    Yi(a2, b2, d2, e2);
    return b2.child;
  }
  function aj(a2, b2, c2, d2, e2) {
    if (null === a2) {
      var f2 = c2.type;
      if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
        return b2.tag = 15, b2.type = f2, cj(a2, b2, f2, d2, e2);
      a2 = yh(c2.type, null, d2, b2, b2.mode, e2);
      a2.ref = b2.ref;
      a2.return = b2;
      return b2.child = a2;
    }
    f2 = a2.child;
    if (0 === (a2.lanes & e2)) {
      var g2 = f2.memoizedProps;
      c2 = c2.compare;
      c2 = null !== c2 ? c2 : Ie$1;
      if (c2(g2, d2) && a2.ref === b2.ref)
        return $i(a2, b2, e2);
    }
    b2.flags |= 1;
    a2 = wh(f2, d2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  function cj(a2, b2, c2, d2, e2) {
    if (null !== a2) {
      var f2 = a2.memoizedProps;
      if (Ie$1(f2, d2) && a2.ref === b2.ref)
        if (Ug = false, b2.pendingProps = d2 = f2, 0 !== (a2.lanes & e2))
          0 !== (a2.flags & 131072) && (Ug = true);
        else
          return b2.lanes = a2.lanes, $i(a2, b2, e2);
    }
    return dj(a2, b2, c2, d2, e2);
  }
  function ej(a2, b2, c2) {
    var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
    if ("hidden" === d2.mode)
      if (0 === (b2.mode & 1))
        b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$1(fj, gj), gj |= c2;
      else {
        if (0 === (c2 & 1073741824))
          return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G$1(fj, gj), gj |= a2, null;
        b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d2 = null !== f2 ? f2.baseLanes : c2;
        G$1(fj, gj);
        gj |= d2;
      }
    else
      null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G$1(fj, gj), gj |= d2;
    Yi(a2, b2, e2, c2);
    return b2.child;
  }
  function hj(a2, b2) {
    var c2 = b2.ref;
    if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2)
      b2.flags |= 512, b2.flags |= 2097152;
  }
  function dj(a2, b2, c2, d2, e2) {
    var f2 = Zf(c2) ? Xf : H.current;
    f2 = Yf(b2, f2);
    Tg(b2, e2);
    c2 = Xh(a2, b2, c2, d2, f2, e2);
    d2 = bi();
    if (null !== a2 && !Ug)
      return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, $i(a2, b2, e2);
    I$1 && d2 && vg(b2);
    b2.flags |= 1;
    Yi(a2, b2, c2, e2);
    return b2.child;
  }
  function ij(a2, b2, c2, d2, e2) {
    if (Zf(c2)) {
      var f2 = true;
      cg(b2);
    } else
      f2 = false;
    Tg(b2, e2);
    if (null === b2.stateNode)
      jj(a2, b2), ph(b2, c2, d2), rh(b2, c2, d2, e2), d2 = true;
    else if (null === a2) {
      var g2 = b2.stateNode, h2 = b2.memoizedProps;
      g2.props = h2;
      var k2 = g2.context, l2 = c2.contextType;
      "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H.current, l2 = Yf(b2, l2));
      var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
      q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && qh(b2, g2, d2, l2);
      $g = false;
      var r2 = b2.memoizedState;
      g2.state = r2;
      gh(b2, d2, g2, e2);
      k2 = b2.memoizedState;
      h2 !== d2 || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = $g || oh(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
    } else {
      g2 = b2.stateNode;
      bh(a2, b2);
      h2 = b2.memoizedProps;
      l2 = b2.type === b2.elementType ? h2 : Lg(b2.type, h2);
      g2.props = l2;
      q2 = b2.pendingProps;
      r2 = g2.context;
      k2 = c2.contextType;
      "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H.current, k2 = Yf(b2, k2));
      var y2 = c2.getDerivedStateFromProps;
      (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b2, g2, d2, k2);
      $g = false;
      r2 = b2.memoizedState;
      g2.state = r2;
      gh(b2, d2, g2, e2);
      var n2 = b2.memoizedState;
      h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = $g || oh(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
    }
    return kj(a2, b2, c2, d2, f2, e2);
  }
  function kj(a2, b2, c2, d2, e2, f2) {
    hj(a2, b2);
    var g2 = 0 !== (b2.flags & 128);
    if (!d2 && !g2)
      return e2 && dg(b2, c2, false), $i(a2, b2, f2);
    d2 = b2.stateNode;
    Xi.current = b2;
    var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
    b2.flags |= 1;
    null !== a2 && g2 ? (b2.child = Bh(b2, a2.child, null, f2), b2.child = Bh(b2, null, h2, f2)) : Yi(a2, b2, h2, f2);
    b2.memoizedState = d2.state;
    e2 && dg(b2, c2, true);
    return b2.child;
  }
  function lj(a2) {
    var b2 = a2.stateNode;
    b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
    Ih(a2, b2.containerInfo);
  }
  function mj(a2, b2, c2, d2, e2) {
    Ig();
    Jg(e2);
    b2.flags |= 256;
    Yi(a2, b2, c2, d2);
    return b2.child;
  }
  var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function oj(a2) {
    return { baseLanes: a2, cachePool: null, transitions: null };
  }
  function pj(a2, b2, c2) {
    var d2 = b2.pendingProps, e2 = M$1.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
    (h2 = g2) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
    if (h2)
      f2 = true, b2.flags &= -129;
    else if (null === a2 || null !== a2.memoizedState)
      e2 |= 1;
    G$1(M$1, e2 & 1);
    if (null === a2) {
      Eg(b2);
      a2 = b2.memoizedState;
      if (null !== a2 && (a2 = a2.dehydrated, null !== a2))
        return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
      g2 = d2.children;
      a2 = d2.fallback;
      return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d2, 0, null), a2 = Ah(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = oj(c2), b2.memoizedState = nj, a2) : rj(b2, g2);
    }
    e2 = a2.memoizedState;
    if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
      return sj(a2, b2, g2, d2, h2, e2, c2);
    if (f2) {
      f2 = d2.fallback;
      g2 = b2.mode;
      e2 = a2.child;
      h2 = e2.sibling;
      var k2 = { mode: "hidden", children: d2.children };
      0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = wh(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
      null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g2, c2, null), f2.flags |= 2);
      f2.return = b2;
      d2.return = b2;
      d2.sibling = f2;
      b2.child = d2;
      d2 = f2;
      f2 = b2.child;
      g2 = a2.child.memoizedState;
      g2 = null === g2 ? oj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
      f2.memoizedState = g2;
      f2.childLanes = a2.childLanes & ~c2;
      b2.memoizedState = nj;
      return d2;
    }
    f2 = a2.child;
    a2 = f2.sibling;
    d2 = wh(f2, { mode: "visible", children: d2.children });
    0 === (b2.mode & 1) && (d2.lanes = c2);
    d2.return = b2;
    d2.sibling = null;
    null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
    b2.child = d2;
    b2.memoizedState = null;
    return d2;
  }
  function rj(a2, b2) {
    b2 = qj({ mode: "visible", children: b2 }, a2.mode, 0, null);
    b2.return = a2;
    return a2.child = b2;
  }
  function tj(a2, b2, c2, d2) {
    null !== d2 && Jg(d2);
    Bh(b2, a2.child, null, c2);
    a2 = rj(b2, b2.pendingProps.children);
    a2.flags |= 2;
    b2.memoizedState = null;
    return a2;
  }
  function sj(a2, b2, c2, d2, e2, f2, g2) {
    if (c2) {
      if (b2.flags & 256)
        return b2.flags &= -257, d2 = Li(Error(p$3(422))), tj(a2, b2, g2, d2);
      if (null !== b2.memoizedState)
        return b2.child = a2.child, b2.flags |= 128, null;
      f2 = d2.fallback;
      e2 = b2.mode;
      d2 = qj({ mode: "visible", children: d2.children }, e2, 0, null);
      f2 = Ah(f2, e2, g2, null);
      f2.flags |= 2;
      d2.return = b2;
      f2.return = b2;
      d2.sibling = f2;
      b2.child = d2;
      0 !== (b2.mode & 1) && Bh(b2, a2.child, null, g2);
      b2.child.memoizedState = oj(g2);
      b2.memoizedState = nj;
      return f2;
    }
    if (0 === (b2.mode & 1))
      return tj(a2, b2, g2, null);
    if ("$!" === e2.data) {
      d2 = e2.nextSibling && e2.nextSibling.dataset;
      if (d2)
        var h2 = d2.dgst;
      d2 = h2;
      f2 = Error(p$3(419));
      d2 = Li(f2, d2, void 0);
      return tj(a2, b2, g2, d2);
    }
    h2 = 0 !== (g2 & a2.childLanes);
    if (Ug || h2) {
      d2 = R;
      if (null !== d2) {
        switch (g2 & -g2) {
          case 4:
            e2 = 2;
            break;
          case 16:
            e2 = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e2 = 32;
            break;
          case 536870912:
            e2 = 268435456;
            break;
          default:
            e2 = 0;
        }
        e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
        0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a2, e2), mh(d2, a2, e2, -1));
      }
      uj();
      d2 = Li(Error(p$3(421)));
      return tj(a2, b2, g2, d2);
    }
    if ("$?" === e2.data)
      return b2.flags |= 128, b2.child = a2.child, b2 = vj.bind(null, a2), e2._reactRetry = b2, null;
    a2 = f2.treeContext;
    yg = Lf(e2.nextSibling);
    xg = b2;
    I$1 = true;
    zg = null;
    null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
    b2 = rj(b2, d2.children);
    b2.flags |= 4096;
    return b2;
  }
  function wj(a2, b2, c2) {
    a2.lanes |= b2;
    var d2 = a2.alternate;
    null !== d2 && (d2.lanes |= b2);
    Sg(a2.return, b2, c2);
  }
  function xj(a2, b2, c2, d2, e2) {
    var f2 = a2.memoizedState;
    null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
  }
  function yj(a2, b2, c2) {
    var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
    Yi(a2, b2, d2.children, c2);
    d2 = M$1.current;
    if (0 !== (d2 & 2))
      d2 = d2 & 1 | 2, b2.flags |= 128;
    else {
      if (null !== a2 && 0 !== (a2.flags & 128))
        a:
          for (a2 = b2.child; null !== a2; ) {
            if (13 === a2.tag)
              null !== a2.memoizedState && wj(a2, c2, b2);
            else if (19 === a2.tag)
              wj(a2, c2, b2);
            else if (null !== a2.child) {
              a2.child.return = a2;
              a2 = a2.child;
              continue;
            }
            if (a2 === b2)
              break a;
            for (; null === a2.sibling; ) {
              if (null === a2.return || a2.return === b2)
                break a;
              a2 = a2.return;
            }
            a2.sibling.return = a2.return;
            a2 = a2.sibling;
          }
      d2 &= 1;
    }
    G$1(M$1, d2);
    if (0 === (b2.mode & 1))
      b2.memoizedState = null;
    else
      switch (e2) {
        case "forwards":
          c2 = b2.child;
          for (e2 = null; null !== c2; )
            a2 = c2.alternate, null !== a2 && null === Mh(a2) && (e2 = c2), c2 = c2.sibling;
          c2 = e2;
          null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
          xj(b2, false, e2, c2, f2);
          break;
        case "backwards":
          c2 = null;
          e2 = b2.child;
          for (b2.child = null; null !== e2; ) {
            a2 = e2.alternate;
            if (null !== a2 && null === Mh(a2)) {
              b2.child = e2;
              break;
            }
            a2 = e2.sibling;
            e2.sibling = c2;
            c2 = e2;
            e2 = a2;
          }
          xj(b2, true, c2, null, f2);
          break;
        case "together":
          xj(b2, false, null, null, void 0);
          break;
        default:
          b2.memoizedState = null;
      }
    return b2.child;
  }
  function jj(a2, b2) {
    0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
  }
  function $i(a2, b2, c2) {
    null !== a2 && (b2.dependencies = a2.dependencies);
    hh |= b2.lanes;
    if (0 === (c2 & b2.childLanes))
      return null;
    if (null !== a2 && b2.child !== a2.child)
      throw Error(p$3(153));
    if (null !== b2.child) {
      a2 = b2.child;
      c2 = wh(a2, a2.pendingProps);
      b2.child = c2;
      for (c2.return = b2; null !== a2.sibling; )
        a2 = a2.sibling, c2 = c2.sibling = wh(a2, a2.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  function zj(a2, b2, c2) {
    switch (b2.tag) {
      case 3:
        lj(b2);
        Ig();
        break;
      case 5:
        Kh(b2);
        break;
      case 1:
        Zf(b2.type) && cg(b2);
        break;
      case 4:
        Ih(b2, b2.stateNode.containerInfo);
        break;
      case 10:
        var d2 = b2.type._context, e2 = b2.memoizedProps.value;
        G$1(Mg, d2._currentValue);
        d2._currentValue = e2;
        break;
      case 13:
        d2 = b2.memoizedState;
        if (null !== d2) {
          if (null !== d2.dehydrated)
            return G$1(M$1, M$1.current & 1), b2.flags |= 128, null;
          if (0 !== (c2 & b2.child.childLanes))
            return pj(a2, b2, c2);
          G$1(M$1, M$1.current & 1);
          a2 = $i(a2, b2, c2);
          return null !== a2 ? a2.sibling : null;
        }
        G$1(M$1, M$1.current & 1);
        break;
      case 19:
        d2 = 0 !== (c2 & b2.childLanes);
        if (0 !== (a2.flags & 128)) {
          if (d2)
            return yj(a2, b2, c2);
          b2.flags |= 128;
        }
        e2 = b2.memoizedState;
        null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
        G$1(M$1, M$1.current);
        if (d2)
          break;
        else
          return null;
      case 22:
      case 23:
        return b2.lanes = 0, ej(a2, b2, c2);
    }
    return $i(a2, b2, c2);
  }
  var Aj, Bj, Cj, Dj;
  Aj = function(a2, b2) {
    for (var c2 = b2.child; null !== c2; ) {
      if (5 === c2.tag || 6 === c2.tag)
        a2.appendChild(c2.stateNode);
      else if (4 !== c2.tag && null !== c2.child) {
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
      if (c2 === b2)
        break;
      for (; null === c2.sibling; ) {
        if (null === c2.return || c2.return === b2)
          return;
        c2 = c2.return;
      }
      c2.sibling.return = c2.return;
      c2 = c2.sibling;
    }
  };
  Bj = function() {
  };
  Cj = function(a2, b2, c2, d2) {
    var e2 = a2.memoizedProps;
    if (e2 !== d2) {
      a2 = b2.stateNode;
      Hh(Eh.current);
      var f2 = null;
      switch (c2) {
        case "input":
          e2 = Ya(a2, e2);
          d2 = Ya(a2, d2);
          f2 = [];
          break;
        case "select":
          e2 = A$1({}, e2, { value: void 0 });
          d2 = A$1({}, d2, { value: void 0 });
          f2 = [];
          break;
        case "textarea":
          e2 = gb(a2, e2);
          d2 = gb(a2, d2);
          f2 = [];
          break;
        default:
          "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
      }
      ub(c2, d2);
      var g2;
      c2 = null;
      for (l2 in e2)
        if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
          if ("style" === l2) {
            var h2 = e2[l2];
            for (g2 in h2)
              h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
          } else
            "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
      for (l2 in d2) {
        var k2 = d2[l2];
        h2 = null != e2 ? e2[l2] : void 0;
        if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
          if ("style" === l2)
            if (h2) {
              for (g2 in h2)
                !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
              for (g2 in k2)
                k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
            } else
              c2 || (f2 || (f2 = []), f2.push(
                l2,
                c2
              )), c2 = k2;
          else
            "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$1("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
      }
      c2 && (f2 = f2 || []).push("style", c2);
      var l2 = f2;
      if (b2.updateQueue = l2)
        b2.flags |= 4;
    }
  };
  Dj = function(a2, b2, c2, d2) {
    c2 !== d2 && (b2.flags |= 4);
  };
  function Ej(a2, b2) {
    if (!I$1)
      switch (a2.tailMode) {
        case "hidden":
          b2 = a2.tail;
          for (var c2 = null; null !== b2; )
            null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
          null === c2 ? a2.tail = null : c2.sibling = null;
          break;
        case "collapsed":
          c2 = a2.tail;
          for (var d2 = null; null !== c2; )
            null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
          null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
      }
  }
  function S$1(a2) {
    var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
    if (b2)
      for (var e2 = a2.child; null !== e2; )
        c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
    else
      for (e2 = a2.child; null !== e2; )
        c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
    a2.subtreeFlags |= d2;
    a2.childLanes = c2;
    return b2;
  }
  function Fj(a2, b2, c2) {
    var d2 = b2.pendingProps;
    wg(b2);
    switch (b2.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S$1(b2), null;
      case 1:
        return Zf(b2.type) && $f(), S$1(b2), null;
      case 3:
        d2 = b2.stateNode;
        Jh();
        E(Wf);
        E(H);
        Oh();
        d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
        if (null === a2 || null === a2.child)
          Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
        Bj(a2, b2);
        S$1(b2);
        return null;
      case 5:
        Lh(b2);
        var e2 = Hh(Gh.current);
        c2 = b2.type;
        if (null !== a2 && null != b2.stateNode)
          Cj(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        else {
          if (!d2) {
            if (null === b2.stateNode)
              throw Error(p$3(166));
            S$1(b2);
            return null;
          }
          a2 = Hh(Eh.current);
          if (Gg(b2)) {
            d2 = b2.stateNode;
            c2 = b2.type;
            var f2 = b2.memoizedProps;
            d2[Of] = b2;
            d2[Pf] = f2;
            a2 = 0 !== (b2.mode & 1);
            switch (c2) {
              case "dialog":
                D$1("cancel", d2);
                D$1("close", d2);
                break;
              case "iframe":
              case "object":
              case "embed":
                D$1("load", d2);
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++)
                  D$1(lf[e2], d2);
                break;
              case "source":
                D$1("error", d2);
                break;
              case "img":
              case "image":
              case "link":
                D$1(
                  "error",
                  d2
                );
                D$1("load", d2);
                break;
              case "details":
                D$1("toggle", d2);
                break;
              case "input":
                Za(d2, f2);
                D$1("invalid", d2);
                break;
              case "select":
                d2._wrapperState = { wasMultiple: !!f2.multiple };
                D$1("invalid", d2);
                break;
              case "textarea":
                hb(d2, f2), D$1("invalid", d2);
            }
            ub(c2, f2);
            e2 = null;
            for (var g2 in f2)
              if (f2.hasOwnProperty(g2)) {
                var h2 = f2[g2];
                "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                  d2.textContent,
                  h2,
                  a2
                ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D$1("scroll", d2);
              }
            switch (c2) {
              case "input":
                Va(d2);
                db(d2, f2, true);
                break;
              case "textarea":
                Va(d2);
                jb(d2);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f2.onClick && (d2.onclick = Bf);
            }
            d2 = e2;
            b2.updateQueue = d2;
            null !== d2 && (b2.flags |= 4);
          } else {
            g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
            "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
            a2[Of] = b2;
            a2[Pf] = d2;
            Aj(a2, b2, false, false);
            b2.stateNode = a2;
            a: {
              g2 = vb(c2, d2);
              switch (c2) {
                case "dialog":
                  D$1("cancel", a2);
                  D$1("close", a2);
                  e2 = d2;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D$1("load", a2);
                  e2 = d2;
                  break;
                case "video":
                case "audio":
                  for (e2 = 0; e2 < lf.length; e2++)
                    D$1(lf[e2], a2);
                  e2 = d2;
                  break;
                case "source":
                  D$1("error", a2);
                  e2 = d2;
                  break;
                case "img":
                case "image":
                case "link":
                  D$1(
                    "error",
                    a2
                  );
                  D$1("load", a2);
                  e2 = d2;
                  break;
                case "details":
                  D$1("toggle", a2);
                  e2 = d2;
                  break;
                case "input":
                  Za(a2, d2);
                  e2 = Ya(a2, d2);
                  D$1("invalid", a2);
                  break;
                case "option":
                  e2 = d2;
                  break;
                case "select":
                  a2._wrapperState = { wasMultiple: !!d2.multiple };
                  e2 = A$1({}, d2, { value: void 0 });
                  D$1("invalid", a2);
                  break;
                case "textarea":
                  hb(a2, d2);
                  e2 = gb(a2, d2);
                  D$1("invalid", a2);
                  break;
                default:
                  e2 = d2;
              }
              ub(c2, e2);
              h2 = e2;
              for (f2 in h2)
                if (h2.hasOwnProperty(f2)) {
                  var k2 = h2[f2];
                  "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$1("scroll", a2) : null != k2 && ta(a2, f2, k2, g2));
                }
              switch (c2) {
                case "input":
                  Va(a2);
                  db(a2, d2, false);
                  break;
                case "textarea":
                  Va(a2);
                  jb(a2);
                  break;
                case "option":
                  null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                  break;
                case "select":
                  a2.multiple = !!d2.multiple;
                  f2 = d2.value;
                  null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                    a2,
                    !!d2.multiple,
                    d2.defaultValue,
                    true
                  );
                  break;
                default:
                  "function" === typeof e2.onClick && (a2.onclick = Bf);
              }
              switch (c2) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d2 = !!d2.autoFocus;
                  break a;
                case "img":
                  d2 = true;
                  break a;
                default:
                  d2 = false;
              }
            }
            d2 && (b2.flags |= 4);
          }
          null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        }
        S$1(b2);
        return null;
      case 6:
        if (a2 && null != b2.stateNode)
          Dj(a2, b2, a2.memoizedProps, d2);
        else {
          if ("string" !== typeof d2 && null === b2.stateNode)
            throw Error(p$3(166));
          c2 = Hh(Gh.current);
          Hh(Eh.current);
          if (Gg(b2)) {
            d2 = b2.stateNode;
            c2 = b2.memoizedProps;
            d2[Of] = b2;
            if (f2 = d2.nodeValue !== c2) {
              if (a2 = xg, null !== a2)
                switch (a2.tag) {
                  case 3:
                    Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                    break;
                  case 5:
                    true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                }
            }
            f2 && (b2.flags |= 4);
          } else
            d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
        }
        S$1(b2);
        return null;
      case 13:
        E(M$1);
        d2 = b2.memoizedState;
        if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
          if (I$1 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128))
            Hg(), Ig(), b2.flags |= 98560, f2 = false;
          else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
            if (null === a2) {
              if (!f2)
                throw Error(p$3(318));
              f2 = b2.memoizedState;
              f2 = null !== f2 ? f2.dehydrated : null;
              if (!f2)
                throw Error(p$3(317));
              f2[Of] = b2;
            } else
              Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
            S$1(b2);
            f2 = false;
          } else
            null !== zg && (Gj(zg), zg = null), f2 = true;
          if (!f2)
            return b2.flags & 65536 ? b2 : null;
        }
        if (0 !== (b2.flags & 128))
          return b2.lanes = c2, b2;
        d2 = null !== d2;
        d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (M$1.current & 1) ? 0 === T$1 && (T$1 = 3) : uj()));
        null !== b2.updateQueue && (b2.flags |= 4);
        S$1(b2);
        return null;
      case 4:
        return Jh(), Bj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S$1(b2), null;
      case 10:
        return Rg(b2.type._context), S$1(b2), null;
      case 17:
        return Zf(b2.type) && $f(), S$1(b2), null;
      case 19:
        E(M$1);
        f2 = b2.memoizedState;
        if (null === f2)
          return S$1(b2), null;
        d2 = 0 !== (b2.flags & 128);
        g2 = f2.rendering;
        if (null === g2)
          if (d2)
            Ej(f2, false);
          else {
            if (0 !== T$1 || null !== a2 && 0 !== (a2.flags & 128))
              for (a2 = b2.child; null !== a2; ) {
                g2 = Mh(a2);
                if (null !== g2) {
                  b2.flags |= 128;
                  Ej(f2, false);
                  d2 = g2.updateQueue;
                  null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
                  b2.subtreeFlags = 0;
                  d2 = c2;
                  for (c2 = b2.child; null !== c2; )
                    f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                  G$1(M$1, M$1.current & 1 | 2);
                  return b2.child;
                }
                a2 = a2.sibling;
              }
            null !== f2.tail && B() > Hj && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
          }
        else {
          if (!d2)
            if (a2 = Mh(g2), null !== a2) {
              if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$1)
                return S$1(b2), null;
            } else
              2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
          f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
        }
        if (null !== f2.tail)
          return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = M$1.current, G$1(M$1, d2 ? c2 & 1 | 2 : c2 & 1), b2;
        S$1(b2);
        return null;
      case 22:
      case 23:
        return Ij(), d2 = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S$1(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$1(b2), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p$3(156, b2.tag));
  }
  function Jj(a2, b2) {
    wg(b2);
    switch (b2.tag) {
      case 1:
        return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 3:
        return Jh(), E(Wf), E(H), Oh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 5:
        return Lh(b2), null;
      case 13:
        E(M$1);
        a2 = b2.memoizedState;
        if (null !== a2 && null !== a2.dehydrated) {
          if (null === b2.alternate)
            throw Error(p$3(340));
          Ig();
        }
        a2 = b2.flags;
        return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 19:
        return E(M$1), null;
      case 4:
        return Jh(), null;
      case 10:
        return Rg(b2.type._context), null;
      case 22:
      case 23:
        return Ij(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Kj = false, U$1 = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V$1 = null;
  function Mj(a2, b2) {
    var c2 = a2.ref;
    if (null !== c2)
      if ("function" === typeof c2)
        try {
          c2(null);
        } catch (d2) {
          W$1(a2, b2, d2);
        }
      else
        c2.current = null;
  }
  function Nj(a2, b2, c2) {
    try {
      c2();
    } catch (d2) {
      W$1(a2, b2, d2);
    }
  }
  var Oj = false;
  function Pj(a2, b2) {
    Cf = dd;
    a2 = Me();
    if (Ne(a2)) {
      if ("selectionStart" in a2)
        var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
      else
        a: {
          c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
          var d2 = c2.getSelection && c2.getSelection();
          if (d2 && 0 !== d2.rangeCount) {
            c2 = d2.anchorNode;
            var e2 = d2.anchorOffset, f2 = d2.focusNode;
            d2 = d2.focusOffset;
            try {
              c2.nodeType, f2.nodeType;
            } catch (F2) {
              c2 = null;
              break a;
            }
            var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
            b:
              for (; ; ) {
                for (var y2; ; ) {
                  q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
                  q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
                  3 === q2.nodeType && (g2 += q2.nodeValue.length);
                  if (null === (y2 = q2.firstChild))
                    break;
                  r2 = q2;
                  q2 = y2;
                }
                for (; ; ) {
                  if (q2 === a2)
                    break b;
                  r2 === c2 && ++l2 === e2 && (h2 = g2);
                  r2 === f2 && ++m2 === d2 && (k2 = g2);
                  if (null !== (y2 = q2.nextSibling))
                    break;
                  q2 = r2;
                  r2 = q2.parentNode;
                }
                q2 = y2;
              }
            c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
          } else
            c2 = null;
        }
      c2 = c2 || { start: 0, end: 0 };
    } else
      c2 = null;
    Df = { focusedElem: a2, selectionRange: c2 };
    dd = false;
    for (V$1 = b2; null !== V$1; )
      if (b2 = V$1, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2)
        a2.return = b2, V$1 = a2;
      else
        for (; null !== V$1; ) {
          b2 = V$1;
          try {
            var n2 = b2.alternate;
            if (0 !== (b2.flags & 1024))
              switch (b2.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (null !== n2) {
                    var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Lg(b2.type, t2), J2);
                    x2.__reactInternalSnapshotBeforeUpdate = w2;
                  }
                  break;
                case 3:
                  var u2 = b2.stateNode.containerInfo;
                  1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(p$3(163));
              }
          } catch (F2) {
            W$1(b2, b2.return, F2);
          }
          a2 = b2.sibling;
          if (null !== a2) {
            a2.return = b2.return;
            V$1 = a2;
            break;
          }
          V$1 = b2.return;
        }
    n2 = Oj;
    Oj = false;
    return n2;
  }
  function Qj(a2, b2, c2) {
    var d2 = b2.updateQueue;
    d2 = null !== d2 ? d2.lastEffect : null;
    if (null !== d2) {
      var e2 = d2 = d2.next;
      do {
        if ((e2.tag & a2) === a2) {
          var f2 = e2.destroy;
          e2.destroy = void 0;
          void 0 !== f2 && Nj(b2, c2, f2);
        }
        e2 = e2.next;
      } while (e2 !== d2);
    }
  }
  function Rj(a2, b2) {
    b2 = b2.updateQueue;
    b2 = null !== b2 ? b2.lastEffect : null;
    if (null !== b2) {
      var c2 = b2 = b2.next;
      do {
        if ((c2.tag & a2) === a2) {
          var d2 = c2.create;
          c2.destroy = d2();
        }
        c2 = c2.next;
      } while (c2 !== b2);
    }
  }
  function Sj(a2) {
    var b2 = a2.ref;
    if (null !== b2) {
      var c2 = a2.stateNode;
      switch (a2.tag) {
        case 5:
          a2 = c2;
          break;
        default:
          a2 = c2;
      }
      "function" === typeof b2 ? b2(a2) : b2.current = a2;
    }
  }
  function Tj(a2) {
    var b2 = a2.alternate;
    null !== b2 && (a2.alternate = null, Tj(b2));
    a2.child = null;
    a2.deletions = null;
    a2.sibling = null;
    5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
    a2.stateNode = null;
    a2.return = null;
    a2.dependencies = null;
    a2.memoizedProps = null;
    a2.memoizedState = null;
    a2.pendingProps = null;
    a2.stateNode = null;
    a2.updateQueue = null;
  }
  function Uj(a2) {
    return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
  }
  function Vj(a2) {
    a:
      for (; ; ) {
        for (; null === a2.sibling; ) {
          if (null === a2.return || Uj(a2.return))
            return null;
          a2 = a2.return;
        }
        a2.sibling.return = a2.return;
        for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
          if (a2.flags & 2)
            continue a;
          if (null === a2.child || 4 === a2.tag)
            continue a;
          else
            a2.child.return = a2, a2 = a2.child;
        }
        if (!(a2.flags & 2))
          return a2.stateNode;
      }
  }
  function Wj(a2, b2, c2) {
    var d2 = a2.tag;
    if (5 === d2 || 6 === d2)
      a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
    else if (4 !== d2 && (a2 = a2.child, null !== a2))
      for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
        Wj(a2, b2, c2), a2 = a2.sibling;
  }
  function Xj(a2, b2, c2) {
    var d2 = a2.tag;
    if (5 === d2 || 6 === d2)
      a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
    else if (4 !== d2 && (a2 = a2.child, null !== a2))
      for (Xj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
        Xj(a2, b2, c2), a2 = a2.sibling;
  }
  var X$1 = null, Yj = false;
  function Zj(a2, b2, c2) {
    for (c2 = c2.child; null !== c2; )
      ak(a2, b2, c2), c2 = c2.sibling;
  }
  function ak(a2, b2, c2) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount)
      try {
        lc.onCommitFiberUnmount(kc, c2);
      } catch (h2) {
      }
    switch (c2.tag) {
      case 5:
        U$1 || Mj(c2, b2);
      case 6:
        var d2 = X$1, e2 = Yj;
        X$1 = null;
        Zj(a2, b2, c2);
        X$1 = d2;
        Yj = e2;
        null !== X$1 && (Yj ? (a2 = X$1, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X$1.removeChild(c2.stateNode));
        break;
      case 18:
        null !== X$1 && (Yj ? (a2 = X$1, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X$1, c2.stateNode));
        break;
      case 4:
        d2 = X$1;
        e2 = Yj;
        X$1 = c2.stateNode.containerInfo;
        Yj = true;
        Zj(a2, b2, c2);
        X$1 = d2;
        Yj = e2;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U$1 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
          e2 = d2 = d2.next;
          do {
            var f2 = e2, g2 = f2.destroy;
            f2 = f2.tag;
            void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c2, b2, g2) : 0 !== (f2 & 4) && Nj(c2, b2, g2));
            e2 = e2.next;
          } while (e2 !== d2);
        }
        Zj(a2, b2, c2);
        break;
      case 1:
        if (!U$1 && (Mj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount))
          try {
            d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
          } catch (h2) {
            W$1(c2, b2, h2);
          }
        Zj(a2, b2, c2);
        break;
      case 21:
        Zj(a2, b2, c2);
        break;
      case 22:
        c2.mode & 1 ? (U$1 = (d2 = U$1) || null !== c2.memoizedState, Zj(a2, b2, c2), U$1 = d2) : Zj(a2, b2, c2);
        break;
      default:
        Zj(a2, b2, c2);
    }
  }
  function bk(a2) {
    var b2 = a2.updateQueue;
    if (null !== b2) {
      a2.updateQueue = null;
      var c2 = a2.stateNode;
      null === c2 && (c2 = a2.stateNode = new Lj());
      b2.forEach(function(b3) {
        var d2 = ck.bind(null, a2, b3);
        c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
      });
    }
  }
  function dk(a2, b2) {
    var c2 = b2.deletions;
    if (null !== c2)
      for (var d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2];
        try {
          var f2 = a2, g2 = b2, h2 = g2;
          a:
            for (; null !== h2; ) {
              switch (h2.tag) {
                case 5:
                  X$1 = h2.stateNode;
                  Yj = false;
                  break a;
                case 3:
                  X$1 = h2.stateNode.containerInfo;
                  Yj = true;
                  break a;
                case 4:
                  X$1 = h2.stateNode.containerInfo;
                  Yj = true;
                  break a;
              }
              h2 = h2.return;
            }
          if (null === X$1)
            throw Error(p$3(160));
          ak(f2, g2, e2);
          X$1 = null;
          Yj = false;
          var k2 = e2.alternate;
          null !== k2 && (k2.return = null);
          e2.return = null;
        } catch (l2) {
          W$1(e2, b2, l2);
        }
      }
    if (b2.subtreeFlags & 12854)
      for (b2 = b2.child; null !== b2; )
        ek(b2, a2), b2 = b2.sibling;
  }
  function ek(a2, b2) {
    var c2 = a2.alternate, d2 = a2.flags;
    switch (a2.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        dk(b2, a2);
        fk(a2);
        if (d2 & 4) {
          try {
            Qj(3, a2, a2.return), Rj(3, a2);
          } catch (t2) {
            W$1(a2, a2.return, t2);
          }
          try {
            Qj(5, a2, a2.return);
          } catch (t2) {
            W$1(a2, a2.return, t2);
          }
        }
        break;
      case 1:
        dk(b2, a2);
        fk(a2);
        d2 & 512 && null !== c2 && Mj(c2, c2.return);
        break;
      case 5:
        dk(b2, a2);
        fk(a2);
        d2 & 512 && null !== c2 && Mj(c2, c2.return);
        if (a2.flags & 32) {
          var e2 = a2.stateNode;
          try {
            ob(e2, "");
          } catch (t2) {
            W$1(a2, a2.return, t2);
          }
        }
        if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
          var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
          a2.updateQueue = null;
          if (null !== k2)
            try {
              "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
              vb(h2, g2);
              var l2 = vb(h2, f2);
              for (g2 = 0; g2 < k2.length; g2 += 2) {
                var m2 = k2[g2], q2 = k2[g2 + 1];
                "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
              }
              switch (h2) {
                case "input":
                  bb(e2, f2);
                  break;
                case "textarea":
                  ib(e2, f2);
                  break;
                case "select":
                  var r2 = e2._wrapperState.wasMultiple;
                  e2._wrapperState.wasMultiple = !!f2.multiple;
                  var y2 = f2.value;
                  null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                    e2,
                    !!f2.multiple,
                    f2.defaultValue,
                    true
                  ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
              }
              e2[Pf] = f2;
            } catch (t2) {
              W$1(a2, a2.return, t2);
            }
        }
        break;
      case 6:
        dk(b2, a2);
        fk(a2);
        if (d2 & 4) {
          if (null === a2.stateNode)
            throw Error(p$3(162));
          e2 = a2.stateNode;
          f2 = a2.memoizedProps;
          try {
            e2.nodeValue = f2;
          } catch (t2) {
            W$1(a2, a2.return, t2);
          }
        }
        break;
      case 3:
        dk(b2, a2);
        fk(a2);
        if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated)
          try {
            bd(b2.containerInfo);
          } catch (t2) {
            W$1(a2, a2.return, t2);
          }
        break;
      case 4:
        dk(b2, a2);
        fk(a2);
        break;
      case 13:
        dk(b2, a2);
        fk(a2);
        e2 = a2.child;
        e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B()));
        d2 & 4 && bk(a2);
        break;
      case 22:
        m2 = null !== c2 && null !== c2.memoizedState;
        a2.mode & 1 ? (U$1 = (l2 = U$1) || m2, dk(b2, a2), U$1 = l2) : dk(b2, a2);
        fk(a2);
        if (d2 & 8192) {
          l2 = null !== a2.memoizedState;
          if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1))
            for (V$1 = a2, m2 = a2.child; null !== m2; ) {
              for (q2 = V$1 = m2; null !== V$1; ) {
                r2 = V$1;
                y2 = r2.child;
                switch (r2.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Qj(4, r2, r2.return);
                    break;
                  case 1:
                    Mj(r2, r2.return);
                    var n2 = r2.stateNode;
                    if ("function" === typeof n2.componentWillUnmount) {
                      d2 = r2;
                      c2 = r2.return;
                      try {
                        b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                      } catch (t2) {
                        W$1(d2, c2, t2);
                      }
                    }
                    break;
                  case 5:
                    Mj(r2, r2.return);
                    break;
                  case 22:
                    if (null !== r2.memoizedState) {
                      hk(q2);
                      continue;
                    }
                }
                null !== y2 ? (y2.return = r2, V$1 = y2) : hk(q2);
              }
              m2 = m2.sibling;
            }
          a:
            for (m2 = null, q2 = a2; ; ) {
              if (5 === q2.tag) {
                if (null === m2) {
                  m2 = q2;
                  try {
                    e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                  } catch (t2) {
                    W$1(a2, a2.return, t2);
                  }
                }
              } else if (6 === q2.tag) {
                if (null === m2)
                  try {
                    q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                  } catch (t2) {
                    W$1(a2, a2.return, t2);
                  }
              } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
                q2.child.return = q2;
                q2 = q2.child;
                continue;
              }
              if (q2 === a2)
                break a;
              for (; null === q2.sibling; ) {
                if (null === q2.return || q2.return === a2)
                  break a;
                m2 === q2 && (m2 = null);
                q2 = q2.return;
              }
              m2 === q2 && (m2 = null);
              q2.sibling.return = q2.return;
              q2 = q2.sibling;
            }
        }
        break;
      case 19:
        dk(b2, a2);
        fk(a2);
        d2 & 4 && bk(a2);
        break;
      case 21:
        break;
      default:
        dk(
          b2,
          a2
        ), fk(a2);
    }
  }
  function fk(a2) {
    var b2 = a2.flags;
    if (b2 & 2) {
      try {
        a: {
          for (var c2 = a2.return; null !== c2; ) {
            if (Uj(c2)) {
              var d2 = c2;
              break a;
            }
            c2 = c2.return;
          }
          throw Error(p$3(160));
        }
        switch (d2.tag) {
          case 5:
            var e2 = d2.stateNode;
            d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
            var f2 = Vj(a2);
            Xj(a2, f2, e2);
            break;
          case 3:
          case 4:
            var g2 = d2.stateNode.containerInfo, h2 = Vj(a2);
            Wj(a2, h2, g2);
            break;
          default:
            throw Error(p$3(161));
        }
      } catch (k2) {
        W$1(a2, a2.return, k2);
      }
      a2.flags &= -3;
    }
    b2 & 4096 && (a2.flags &= -4097);
  }
  function ik(a2, b2, c2) {
    V$1 = a2;
    jk(a2);
  }
  function jk(a2, b2, c2) {
    for (var d2 = 0 !== (a2.mode & 1); null !== V$1; ) {
      var e2 = V$1, f2 = e2.child;
      if (22 === e2.tag && d2) {
        var g2 = null !== e2.memoizedState || Kj;
        if (!g2) {
          var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$1;
          h2 = Kj;
          var l2 = U$1;
          Kj = g2;
          if ((U$1 = k2) && !l2)
            for (V$1 = e2; null !== V$1; )
              g2 = V$1, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g2, V$1 = k2) : kk(e2);
          for (; null !== f2; )
            V$1 = f2, jk(f2), f2 = f2.sibling;
          V$1 = e2;
          Kj = h2;
          U$1 = l2;
        }
        lk(a2);
      } else
        0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V$1 = f2) : lk(a2);
    }
  }
  function lk(a2) {
    for (; null !== V$1; ) {
      var b2 = V$1;
      if (0 !== (b2.flags & 8772)) {
        var c2 = b2.alternate;
        try {
          if (0 !== (b2.flags & 8772))
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                U$1 || Rj(5, b2);
                break;
              case 1:
                var d2 = b2.stateNode;
                if (b2.flags & 4 && !U$1)
                  if (null === c2)
                    d2.componentDidMount();
                  else {
                    var e2 = b2.elementType === b2.type ? c2.memoizedProps : Lg(b2.type, c2.memoizedProps);
                    d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                  }
                var f2 = b2.updateQueue;
                null !== f2 && ih(b2, f2, d2);
                break;
              case 3:
                var g2 = b2.updateQueue;
                if (null !== g2) {
                  c2 = null;
                  if (null !== b2.child)
                    switch (b2.child.tag) {
                      case 5:
                        c2 = b2.child.stateNode;
                        break;
                      case 1:
                        c2 = b2.child.stateNode;
                    }
                  ih(b2, g2, c2);
                }
                break;
              case 5:
                var h2 = b2.stateNode;
                if (null === c2 && b2.flags & 4) {
                  c2 = h2;
                  var k2 = b2.memoizedProps;
                  switch (b2.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k2.autoFocus && c2.focus();
                      break;
                    case "img":
                      k2.src && (c2.src = k2.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (null === b2.memoizedState) {
                  var l2 = b2.alternate;
                  if (null !== l2) {
                    var m2 = l2.memoizedState;
                    if (null !== m2) {
                      var q2 = m2.dehydrated;
                      null !== q2 && bd(q2);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p$3(163));
            }
          U$1 || b2.flags & 512 && Sj(b2);
        } catch (r2) {
          W$1(b2, b2.return, r2);
        }
      }
      if (b2 === a2) {
        V$1 = null;
        break;
      }
      c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V$1 = c2;
        break;
      }
      V$1 = b2.return;
    }
  }
  function hk(a2) {
    for (; null !== V$1; ) {
      var b2 = V$1;
      if (b2 === a2) {
        V$1 = null;
        break;
      }
      var c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V$1 = c2;
        break;
      }
      V$1 = b2.return;
    }
  }
  function kk(a2) {
    for (; null !== V$1; ) {
      var b2 = V$1;
      try {
        switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            var c2 = b2.return;
            try {
              Rj(4, b2);
            } catch (k2) {
              W$1(b2, c2, k2);
            }
            break;
          case 1:
            var d2 = b2.stateNode;
            if ("function" === typeof d2.componentDidMount) {
              var e2 = b2.return;
              try {
                d2.componentDidMount();
              } catch (k2) {
                W$1(b2, e2, k2);
              }
            }
            var f2 = b2.return;
            try {
              Sj(b2);
            } catch (k2) {
              W$1(b2, f2, k2);
            }
            break;
          case 5:
            var g2 = b2.return;
            try {
              Sj(b2);
            } catch (k2) {
              W$1(b2, g2, k2);
            }
        }
      } catch (k2) {
        W$1(b2, b2.return, k2);
      }
      if (b2 === a2) {
        V$1 = null;
        break;
      }
      var h2 = b2.sibling;
      if (null !== h2) {
        h2.return = b2.return;
        V$1 = h2;
        break;
      }
      V$1 = b2.return;
    }
  }
  var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y$1 = null, Z$1 = 0, gj = 0, fj = Uf(0), T$1 = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
  function L() {
    return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
  }
  function lh(a2) {
    if (0 === (a2.mode & 1))
      return 1;
    if (0 !== (K & 2) && 0 !== Z$1)
      return Z$1 & -Z$1;
    if (null !== Kg.transition)
      return 0 === Ck && (Ck = yc()), Ck;
    a2 = C;
    if (0 !== a2)
      return a2;
    a2 = window.event;
    a2 = void 0 === a2 ? 16 : jd(a2.type);
    return a2;
  }
  function mh(a2, b2, c2, d2) {
    if (50 < zk)
      throw zk = 0, Ak = null, Error(p$3(185));
    Ac(a2, c2, d2);
    if (0 === (K & 2) || a2 !== R)
      a2 === R && (0 === (K & 2) && (rk |= c2), 4 === T$1 && Dk(a2, Z$1)), Ek(a2, d2), 1 === c2 && 0 === K && 0 === (b2.mode & 1) && (Hj = B() + 500, fg && jg());
  }
  function Ek(a2, b2) {
    var c2 = a2.callbackNode;
    wc(a2, b2);
    var d2 = uc(a2, a2 === R ? Z$1 : 0);
    if (0 === d2)
      null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
    else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
      null != c2 && bc(c2);
      if (1 === b2)
        0 === a2.tag ? ig(Fk.bind(null, a2)) : hg(Fk.bind(null, a2)), Jf(function() {
          0 === (K & 6) && jg();
        }), c2 = null;
      else {
        switch (Dc(d2)) {
          case 1:
            c2 = fc;
            break;
          case 4:
            c2 = gc;
            break;
          case 16:
            c2 = hc;
            break;
          case 536870912:
            c2 = jc;
            break;
          default:
            c2 = hc;
        }
        c2 = Gk(c2, Hk.bind(null, a2));
      }
      a2.callbackPriority = b2;
      a2.callbackNode = c2;
    }
  }
  function Hk(a2, b2) {
    Bk = -1;
    Ck = 0;
    if (0 !== (K & 6))
      throw Error(p$3(327));
    var c2 = a2.callbackNode;
    if (Ik() && a2.callbackNode !== c2)
      return null;
    var d2 = uc(a2, a2 === R ? Z$1 : 0);
    if (0 === d2)
      return null;
    if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b2)
      b2 = Jk(a2, d2);
    else {
      b2 = d2;
      var e2 = K;
      K |= 2;
      var f2 = Kk();
      if (R !== a2 || Z$1 !== b2)
        vk = null, Hj = B() + 500, Lk(a2, b2);
      do
        try {
          Mk();
          break;
        } catch (h2) {
          Nk(a2, h2);
        }
      while (1);
      Qg();
      nk.current = f2;
      K = e2;
      null !== Y$1 ? b2 = 0 : (R = null, Z$1 = 0, b2 = T$1);
    }
    if (0 !== b2) {
      2 === b2 && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b2 = Ok(a2, e2)));
      if (1 === b2)
        throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B()), c2;
      if (6 === b2)
        Dk(a2, d2);
      else {
        e2 = a2.current.alternate;
        if (0 === (d2 & 30) && !Pk(e2) && (b2 = Jk(a2, d2), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b2 = Ok(a2, f2))), 1 === b2))
          throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B()), c2;
        a2.finishedWork = e2;
        a2.finishedLanes = d2;
        switch (b2) {
          case 0:
          case 1:
            throw Error(p$3(345));
          case 2:
            Qk(a2, uk, vk);
            break;
          case 3:
            Dk(a2, d2);
            if ((d2 & 130023424) === d2 && (b2 = gk + 500 - B(), 10 < b2)) {
              if (0 !== uc(a2, 0))
                break;
              e2 = a2.suspendedLanes;
              if ((e2 & d2) !== d2) {
                L();
                a2.pingedLanes |= a2.suspendedLanes & e2;
                break;
              }
              a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), b2);
              break;
            }
            Qk(a2, uk, vk);
            break;
          case 4:
            Dk(a2, d2);
            if ((d2 & 4194240) === d2)
              break;
            b2 = a2.eventTimes;
            for (e2 = -1; 0 < d2; ) {
              var g2 = 31 - oc(d2);
              f2 = 1 << g2;
              g2 = b2[g2];
              g2 > e2 && (e2 = g2);
              d2 &= ~f2;
            }
            d2 = e2;
            d2 = B() - d2;
            d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * mk(d2 / 1960)) - d2;
            if (10 < d2) {
              a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), d2);
              break;
            }
            Qk(a2, uk, vk);
            break;
          case 5:
            Qk(a2, uk, vk);
            break;
          default:
            throw Error(p$3(329));
        }
      }
    }
    Ek(a2, B());
    return a2.callbackNode === c2 ? Hk.bind(null, a2) : null;
  }
  function Ok(a2, b2) {
    var c2 = tk;
    a2.current.memoizedState.isDehydrated && (Lk(a2, b2).flags |= 256);
    a2 = Jk(a2, b2);
    2 !== a2 && (b2 = uk, uk = c2, null !== b2 && Gj(b2));
    return a2;
  }
  function Gj(a2) {
    null === uk ? uk = a2 : uk.push.apply(uk, a2);
  }
  function Pk(a2) {
    for (var b2 = a2; ; ) {
      if (b2.flags & 16384) {
        var c2 = b2.updateQueue;
        if (null !== c2 && (c2 = c2.stores, null !== c2))
          for (var d2 = 0; d2 < c2.length; d2++) {
            var e2 = c2[d2], f2 = e2.getSnapshot;
            e2 = e2.value;
            try {
              if (!He(f2(), e2))
                return false;
            } catch (g2) {
              return false;
            }
          }
      }
      c2 = b2.child;
      if (b2.subtreeFlags & 16384 && null !== c2)
        c2.return = b2, b2 = c2;
      else {
        if (b2 === a2)
          break;
        for (; null === b2.sibling; ) {
          if (null === b2.return || b2.return === a2)
            return true;
          b2 = b2.return;
        }
        b2.sibling.return = b2.return;
        b2 = b2.sibling;
      }
    }
    return true;
  }
  function Dk(a2, b2) {
    b2 &= ~sk;
    b2 &= ~rk;
    a2.suspendedLanes |= b2;
    a2.pingedLanes &= ~b2;
    for (a2 = a2.expirationTimes; 0 < b2; ) {
      var c2 = 31 - oc(b2), d2 = 1 << c2;
      a2[c2] = -1;
      b2 &= ~d2;
    }
  }
  function Fk(a2) {
    if (0 !== (K & 6))
      throw Error(p$3(327));
    Ik();
    var b2 = uc(a2, 0);
    if (0 === (b2 & 1))
      return Ek(a2, B()), null;
    var c2 = Jk(a2, b2);
    if (0 !== a2.tag && 2 === c2) {
      var d2 = xc(a2);
      0 !== d2 && (b2 = d2, c2 = Ok(a2, d2));
    }
    if (1 === c2)
      throw c2 = qk, Lk(a2, 0), Dk(a2, b2), Ek(a2, B()), c2;
    if (6 === c2)
      throw Error(p$3(345));
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = b2;
    Qk(a2, uk, vk);
    Ek(a2, B());
    return null;
  }
  function Rk(a2, b2) {
    var c2 = K;
    K |= 1;
    try {
      return a2(b2);
    } finally {
      K = c2, 0 === K && (Hj = B() + 500, fg && jg());
    }
  }
  function Sk(a2) {
    null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
    var b2 = K;
    K |= 1;
    var c2 = pk.transition, d2 = C;
    try {
      if (pk.transition = null, C = 1, a2)
        return a2();
    } finally {
      C = d2, pk.transition = c2, K = b2, 0 === (K & 6) && jg();
    }
  }
  function Ij() {
    gj = fj.current;
    E(fj);
  }
  function Lk(a2, b2) {
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    var c2 = a2.timeoutHandle;
    -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
    if (null !== Y$1)
      for (c2 = Y$1.return; null !== c2; ) {
        var d2 = c2;
        wg(d2);
        switch (d2.tag) {
          case 1:
            d2 = d2.type.childContextTypes;
            null !== d2 && void 0 !== d2 && $f();
            break;
          case 3:
            Jh();
            E(Wf);
            E(H);
            Oh();
            break;
          case 5:
            Lh(d2);
            break;
          case 4:
            Jh();
            break;
          case 13:
            E(M$1);
            break;
          case 19:
            E(M$1);
            break;
          case 10:
            Rg(d2.type._context);
            break;
          case 22:
          case 23:
            Ij();
        }
        c2 = c2.return;
      }
    R = a2;
    Y$1 = a2 = wh(a2.current, null);
    Z$1 = gj = b2;
    T$1 = 0;
    qk = null;
    sk = rk = hh = 0;
    uk = tk = null;
    if (null !== Wg) {
      for (b2 = 0; b2 < Wg.length; b2++)
        if (c2 = Wg[b2], d2 = c2.interleaved, null !== d2) {
          c2.interleaved = null;
          var e2 = d2.next, f2 = c2.pending;
          if (null !== f2) {
            var g2 = f2.next;
            f2.next = e2;
            d2.next = g2;
          }
          c2.pending = d2;
        }
      Wg = null;
    }
    return a2;
  }
  function Nk(a2, b2) {
    do {
      var c2 = Y$1;
      try {
        Qg();
        Ph.current = ai;
        if (Sh) {
          for (var d2 = N.memoizedState; null !== d2; ) {
            var e2 = d2.queue;
            null !== e2 && (e2.pending = null);
            d2 = d2.next;
          }
          Sh = false;
        }
        Rh = 0;
        P$1 = O$1 = N = null;
        Th = false;
        Uh = 0;
        ok.current = null;
        if (null === c2 || null === c2.return) {
          T$1 = 1;
          qk = b2;
          Y$1 = null;
          break;
        }
        a: {
          var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
          b2 = Z$1;
          h2.flags |= 32768;
          if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
            var l2 = k2, m2 = h2, q2 = m2.tag;
            if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
              var r2 = m2.alternate;
              r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
            }
            var y2 = Vi(g2);
            if (null !== y2) {
              y2.flags &= -257;
              Wi(y2, g2, h2, f2, b2);
              y2.mode & 1 && Ti(f2, l2, b2);
              b2 = y2;
              k2 = l2;
              var n2 = b2.updateQueue;
              if (null === n2) {
                var t2 = /* @__PURE__ */ new Set();
                t2.add(k2);
                b2.updateQueue = t2;
              } else
                n2.add(k2);
              break a;
            } else {
              if (0 === (b2 & 1)) {
                Ti(f2, l2, b2);
                uj();
                break a;
              }
              k2 = Error(p$3(426));
            }
          } else if (I$1 && h2.mode & 1) {
            var J2 = Vi(g2);
            if (null !== J2) {
              0 === (J2.flags & 65536) && (J2.flags |= 256);
              Wi(J2, g2, h2, f2, b2);
              Jg(Ki(k2, h2));
              break a;
            }
          }
          f2 = k2 = Ki(k2, h2);
          4 !== T$1 && (T$1 = 2);
          null === tk ? tk = [f2] : tk.push(f2);
          f2 = g2;
          do {
            switch (f2.tag) {
              case 3:
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var x2 = Oi(f2, k2, b2);
                fh(f2, x2);
                break a;
              case 1:
                h2 = k2;
                var w2 = f2.type, u2 = f2.stateNode;
                if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                  f2.flags |= 65536;
                  b2 &= -b2;
                  f2.lanes |= b2;
                  var F2 = Ri(f2, h2, b2);
                  fh(f2, F2);
                  break a;
                }
            }
            f2 = f2.return;
          } while (null !== f2);
        }
        Tk(c2);
      } catch (na) {
        b2 = na;
        Y$1 === c2 && null !== c2 && (Y$1 = c2 = c2.return);
        continue;
      }
      break;
    } while (1);
  }
  function Kk() {
    var a2 = nk.current;
    nk.current = ai;
    return null === a2 ? ai : a2;
  }
  function uj() {
    if (0 === T$1 || 3 === T$1 || 2 === T$1)
      T$1 = 4;
    null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z$1);
  }
  function Jk(a2, b2) {
    var c2 = K;
    K |= 2;
    var d2 = Kk();
    if (R !== a2 || Z$1 !== b2)
      vk = null, Lk(a2, b2);
    do
      try {
        Uk();
        break;
      } catch (e2) {
        Nk(a2, e2);
      }
    while (1);
    Qg();
    K = c2;
    nk.current = d2;
    if (null !== Y$1)
      throw Error(p$3(261));
    R = null;
    Z$1 = 0;
    return T$1;
  }
  function Uk() {
    for (; null !== Y$1; )
      Vk(Y$1);
  }
  function Mk() {
    for (; null !== Y$1 && !cc(); )
      Vk(Y$1);
  }
  function Vk(a2) {
    var b2 = Wk(a2.alternate, a2, gj);
    a2.memoizedProps = a2.pendingProps;
    null === b2 ? Tk(a2) : Y$1 = b2;
    ok.current = null;
  }
  function Tk(a2) {
    var b2 = a2;
    do {
      var c2 = b2.alternate;
      a2 = b2.return;
      if (0 === (b2.flags & 32768)) {
        if (c2 = Fj(c2, b2, gj), null !== c2) {
          Y$1 = c2;
          return;
        }
      } else {
        c2 = Jj(c2, b2);
        if (null !== c2) {
          c2.flags &= 32767;
          Y$1 = c2;
          return;
        }
        if (null !== a2)
          a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
        else {
          T$1 = 6;
          Y$1 = null;
          return;
        }
      }
      b2 = b2.sibling;
      if (null !== b2) {
        Y$1 = b2;
        return;
      }
      Y$1 = b2 = a2;
    } while (null !== b2);
    0 === T$1 && (T$1 = 5);
  }
  function Qk(a2, b2, c2) {
    var d2 = C, e2 = pk.transition;
    try {
      pk.transition = null, C = 1, Xk(a2, b2, c2, d2);
    } finally {
      pk.transition = e2, C = d2;
    }
    return null;
  }
  function Xk(a2, b2, c2, d2) {
    do
      Ik();
    while (null !== xk);
    if (0 !== (K & 6))
      throw Error(p$3(327));
    c2 = a2.finishedWork;
    var e2 = a2.finishedLanes;
    if (null === c2)
      return null;
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    if (c2 === a2.current)
      throw Error(p$3(177));
    a2.callbackNode = null;
    a2.callbackPriority = 0;
    var f2 = c2.lanes | c2.childLanes;
    Bc(a2, f2);
    a2 === R && (Y$1 = R = null, Z$1 = 0);
    0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
      Ik();
      return null;
    }));
    f2 = 0 !== (c2.flags & 15990);
    if (0 !== (c2.subtreeFlags & 15990) || f2) {
      f2 = pk.transition;
      pk.transition = null;
      var g2 = C;
      C = 1;
      var h2 = K;
      K |= 4;
      ok.current = null;
      Pj(a2, c2);
      ek(c2, a2);
      Oe(Df);
      dd = !!Cf;
      Df = Cf = null;
      a2.current = c2;
      ik(c2);
      dc();
      K = h2;
      C = g2;
      pk.transition = f2;
    } else
      a2.current = c2;
    wk && (wk = false, xk = a2, yk = e2);
    f2 = a2.pendingLanes;
    0 === f2 && (Si = null);
    mc(c2.stateNode);
    Ek(a2, B());
    if (null !== b2)
      for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
        e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
    if (Pi)
      throw Pi = false, a2 = Qi, Qi = null, a2;
    0 !== (yk & 1) && 0 !== a2.tag && Ik();
    f2 = a2.pendingLanes;
    0 !== (f2 & 1) ? a2 === Ak ? zk++ : (zk = 0, Ak = a2) : zk = 0;
    jg();
    return null;
  }
  function Ik() {
    if (null !== xk) {
      var a2 = Dc(yk), b2 = pk.transition, c2 = C;
      try {
        pk.transition = null;
        C = 16 > a2 ? 16 : a2;
        if (null === xk)
          var d2 = false;
        else {
          a2 = xk;
          xk = null;
          yk = 0;
          if (0 !== (K & 6))
            throw Error(p$3(331));
          var e2 = K;
          K |= 4;
          for (V$1 = a2.current; null !== V$1; ) {
            var f2 = V$1, g2 = f2.child;
            if (0 !== (V$1.flags & 16)) {
              var h2 = f2.deletions;
              if (null !== h2) {
                for (var k2 = 0; k2 < h2.length; k2++) {
                  var l2 = h2[k2];
                  for (V$1 = l2; null !== V$1; ) {
                    var m2 = V$1;
                    switch (m2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(8, m2, f2);
                    }
                    var q2 = m2.child;
                    if (null !== q2)
                      q2.return = m2, V$1 = q2;
                    else
                      for (; null !== V$1; ) {
                        m2 = V$1;
                        var r2 = m2.sibling, y2 = m2.return;
                        Tj(m2);
                        if (m2 === l2) {
                          V$1 = null;
                          break;
                        }
                        if (null !== r2) {
                          r2.return = y2;
                          V$1 = r2;
                          break;
                        }
                        V$1 = y2;
                      }
                  }
                }
                var n2 = f2.alternate;
                if (null !== n2) {
                  var t2 = n2.child;
                  if (null !== t2) {
                    n2.child = null;
                    do {
                      var J2 = t2.sibling;
                      t2.sibling = null;
                      t2 = J2;
                    } while (null !== t2);
                  }
                }
                V$1 = f2;
              }
            }
            if (0 !== (f2.subtreeFlags & 2064) && null !== g2)
              g2.return = f2, V$1 = g2;
            else
              b:
                for (; null !== V$1; ) {
                  f2 = V$1;
                  if (0 !== (f2.flags & 2048))
                    switch (f2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, f2, f2.return);
                    }
                  var x2 = f2.sibling;
                  if (null !== x2) {
                    x2.return = f2.return;
                    V$1 = x2;
                    break b;
                  }
                  V$1 = f2.return;
                }
          }
          var w2 = a2.current;
          for (V$1 = w2; null !== V$1; ) {
            g2 = V$1;
            var u2 = g2.child;
            if (0 !== (g2.subtreeFlags & 2064) && null !== u2)
              u2.return = g2, V$1 = u2;
            else
              b:
                for (g2 = w2; null !== V$1; ) {
                  h2 = V$1;
                  if (0 !== (h2.flags & 2048))
                    try {
                      switch (h2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Rj(9, h2);
                      }
                    } catch (na) {
                      W$1(h2, h2.return, na);
                    }
                  if (h2 === g2) {
                    V$1 = null;
                    break b;
                  }
                  var F2 = h2.sibling;
                  if (null !== F2) {
                    F2.return = h2.return;
                    V$1 = F2;
                    break b;
                  }
                  V$1 = h2.return;
                }
          }
          K = e2;
          jg();
          if (lc && "function" === typeof lc.onPostCommitFiberRoot)
            try {
              lc.onPostCommitFiberRoot(kc, a2);
            } catch (na) {
            }
          d2 = true;
        }
        return d2;
      } finally {
        C = c2, pk.transition = b2;
      }
    }
    return false;
  }
  function Yk(a2, b2, c2) {
    b2 = Ki(c2, b2);
    b2 = Oi(a2, b2, 1);
    a2 = dh(a2, b2, 1);
    b2 = L();
    null !== a2 && (Ac(a2, 1, b2), Ek(a2, b2));
  }
  function W$1(a2, b2, c2) {
    if (3 === a2.tag)
      Yk(a2, a2, c2);
    else
      for (; null !== b2; ) {
        if (3 === b2.tag) {
          Yk(b2, a2, c2);
          break;
        } else if (1 === b2.tag) {
          var d2 = b2.stateNode;
          if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Si || !Si.has(d2))) {
            a2 = Ki(c2, a2);
            a2 = Ri(b2, a2, 1);
            b2 = dh(b2, a2, 1);
            a2 = L();
            null !== b2 && (Ac(b2, 1, a2), Ek(b2, a2));
            break;
          }
        }
        b2 = b2.return;
      }
  }
  function Ui(a2, b2, c2) {
    var d2 = a2.pingCache;
    null !== d2 && d2.delete(b2);
    b2 = L();
    a2.pingedLanes |= a2.suspendedLanes & c2;
    R === a2 && (Z$1 & c2) === c2 && (4 === T$1 || 3 === T$1 && (Z$1 & 130023424) === Z$1 && 500 > B() - gk ? Lk(a2, 0) : sk |= c2);
    Ek(a2, b2);
  }
  function Zk(a2, b2) {
    0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c2 = L();
    a2 = Zg(a2, b2);
    null !== a2 && (Ac(a2, b2, c2), Ek(a2, c2));
  }
  function vj(a2) {
    var b2 = a2.memoizedState, c2 = 0;
    null !== b2 && (c2 = b2.retryLane);
    Zk(a2, c2);
  }
  function ck(a2, b2) {
    var c2 = 0;
    switch (a2.tag) {
      case 13:
        var d2 = a2.stateNode;
        var e2 = a2.memoizedState;
        null !== e2 && (c2 = e2.retryLane);
        break;
      case 19:
        d2 = a2.stateNode;
        break;
      default:
        throw Error(p$3(314));
    }
    null !== d2 && d2.delete(b2);
    Zk(a2, c2);
  }
  var Wk;
  Wk = function(a2, b2, c2) {
    if (null !== a2)
      if (a2.memoizedProps !== b2.pendingProps || Wf.current)
        Ug = true;
      else {
        if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128))
          return Ug = false, zj(a2, b2, c2);
        Ug = 0 !== (a2.flags & 131072) ? true : false;
      }
    else
      Ug = false, I$1 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
    b2.lanes = 0;
    switch (b2.tag) {
      case 2:
        var d2 = b2.type;
        jj(a2, b2);
        a2 = b2.pendingProps;
        var e2 = Yf(b2, H.current);
        Tg(b2, c2);
        e2 = Xh(null, b2, d2, a2, e2, c2);
        var f2 = bi();
        b2.flags |= 1;
        "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b2), e2.updater = nh, b2.stateNode = e2, e2._reactInternals = b2, rh(b2, d2, a2, c2), b2 = kj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$1 && f2 && vg(b2), Yi(null, b2, e2, c2), b2 = b2.child);
        return b2;
      case 16:
        d2 = b2.elementType;
        a: {
          jj(a2, b2);
          a2 = b2.pendingProps;
          e2 = d2._init;
          d2 = e2(d2._payload);
          b2.type = d2;
          e2 = b2.tag = $k(d2);
          a2 = Lg(d2, a2);
          switch (e2) {
            case 0:
              b2 = dj(null, b2, d2, a2, c2);
              break a;
            case 1:
              b2 = ij(null, b2, d2, a2, c2);
              break a;
            case 11:
              b2 = Zi(null, b2, d2, a2, c2);
              break a;
            case 14:
              b2 = aj(null, b2, d2, Lg(d2.type, a2), c2);
              break a;
          }
          throw Error(p$3(
            306,
            d2,
            ""
          ));
        }
        return b2;
      case 0:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), dj(a2, b2, d2, e2, c2);
      case 1:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), ij(a2, b2, d2, e2, c2);
      case 3:
        a: {
          lj(b2);
          if (null === a2)
            throw Error(p$3(387));
          d2 = b2.pendingProps;
          f2 = b2.memoizedState;
          e2 = f2.element;
          bh(a2, b2);
          gh(b2, d2, null, c2);
          var g2 = b2.memoizedState;
          d2 = g2.element;
          if (f2.isDehydrated)
            if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
              e2 = Ki(Error(p$3(423)), b2);
              b2 = mj(a2, b2, d2, c2, e2);
              break a;
            } else if (d2 !== e2) {
              e2 = Ki(Error(p$3(424)), b2);
              b2 = mj(a2, b2, d2, c2, e2);
              break a;
            } else
              for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$1 = true, zg = null, c2 = Ch(b2, null, d2, c2), b2.child = c2; c2; )
                c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
          else {
            Ig();
            if (d2 === e2) {
              b2 = $i(a2, b2, c2);
              break a;
            }
            Yi(a2, b2, d2, c2);
          }
          b2 = b2.child;
        }
        return b2;
      case 5:
        return Kh(b2), null === a2 && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), hj(a2, b2), Yi(a2, b2, g2, c2), b2.child;
      case 6:
        return null === a2 && Eg(b2), null;
      case 13:
        return pj(a2, b2, c2);
      case 4:
        return Ih(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Bh(b2, null, d2, c2) : Yi(a2, b2, d2, c2), b2.child;
      case 11:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), Zi(a2, b2, d2, e2, c2);
      case 7:
        return Yi(a2, b2, b2.pendingProps, c2), b2.child;
      case 8:
        return Yi(a2, b2, b2.pendingProps.children, c2), b2.child;
      case 12:
        return Yi(a2, b2, b2.pendingProps.children, c2), b2.child;
      case 10:
        a: {
          d2 = b2.type._context;
          e2 = b2.pendingProps;
          f2 = b2.memoizedProps;
          g2 = e2.value;
          G$1(Mg, d2._currentValue);
          d2._currentValue = g2;
          if (null !== f2)
            if (He(f2.value, g2)) {
              if (f2.children === e2.children && !Wf.current) {
                b2 = $i(a2, b2, c2);
                break a;
              }
            } else
              for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
                var h2 = f2.dependencies;
                if (null !== h2) {
                  g2 = f2.child;
                  for (var k2 = h2.firstContext; null !== k2; ) {
                    if (k2.context === d2) {
                      if (1 === f2.tag) {
                        k2 = ch(-1, c2 & -c2);
                        k2.tag = 2;
                        var l2 = f2.updateQueue;
                        if (null !== l2) {
                          l2 = l2.shared;
                          var m2 = l2.pending;
                          null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                          l2.pending = k2;
                        }
                      }
                      f2.lanes |= c2;
                      k2 = f2.alternate;
                      null !== k2 && (k2.lanes |= c2);
                      Sg(
                        f2.return,
                        c2,
                        b2
                      );
                      h2.lanes |= c2;
                      break;
                    }
                    k2 = k2.next;
                  }
                } else if (10 === f2.tag)
                  g2 = f2.type === b2.type ? null : f2.child;
                else if (18 === f2.tag) {
                  g2 = f2.return;
                  if (null === g2)
                    throw Error(p$3(341));
                  g2.lanes |= c2;
                  h2 = g2.alternate;
                  null !== h2 && (h2.lanes |= c2);
                  Sg(g2, c2, b2);
                  g2 = f2.sibling;
                } else
                  g2 = f2.child;
                if (null !== g2)
                  g2.return = f2;
                else
                  for (g2 = f2; null !== g2; ) {
                    if (g2 === b2) {
                      g2 = null;
                      break;
                    }
                    f2 = g2.sibling;
                    if (null !== f2) {
                      f2.return = g2.return;
                      g2 = f2;
                      break;
                    }
                    g2 = g2.return;
                  }
                f2 = g2;
              }
          Yi(a2, b2, e2.children, c2);
          b2 = b2.child;
        }
        return b2;
      case 9:
        return e2 = b2.type, d2 = b2.pendingProps.children, Tg(b2, c2), e2 = Vg(e2), d2 = d2(e2), b2.flags |= 1, Yi(a2, b2, d2, c2), b2.child;
      case 14:
        return d2 = b2.type, e2 = Lg(d2, b2.pendingProps), e2 = Lg(d2.type, e2), aj(a2, b2, d2, e2, c2);
      case 15:
        return cj(a2, b2, b2.type, b2.pendingProps, c2);
      case 17:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), jj(a2, b2), b2.tag = 1, Zf(d2) ? (a2 = true, cg(b2)) : a2 = false, Tg(b2, c2), ph(b2, d2, e2), rh(b2, d2, e2, c2), kj(null, b2, d2, true, a2, c2);
      case 19:
        return yj(a2, b2, c2);
      case 22:
        return ej(a2, b2, c2);
    }
    throw Error(p$3(156, b2.tag));
  };
  function Gk(a2, b2) {
    return ac(a2, b2);
  }
  function al(a2, b2, c2, d2) {
    this.tag = a2;
    this.key = c2;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b2;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d2;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a2, b2, c2, d2) {
    return new al(a2, b2, c2, d2);
  }
  function bj(a2) {
    a2 = a2.prototype;
    return !(!a2 || !a2.isReactComponent);
  }
  function $k(a2) {
    if ("function" === typeof a2)
      return bj(a2) ? 1 : 0;
    if (void 0 !== a2 && null !== a2) {
      a2 = a2.$$typeof;
      if (a2 === Da)
        return 11;
      if (a2 === Ga)
        return 14;
    }
    return 2;
  }
  function wh(a2, b2) {
    var c2 = a2.alternate;
    null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
    c2.flags = a2.flags & 14680064;
    c2.childLanes = a2.childLanes;
    c2.lanes = a2.lanes;
    c2.child = a2.child;
    c2.memoizedProps = a2.memoizedProps;
    c2.memoizedState = a2.memoizedState;
    c2.updateQueue = a2.updateQueue;
    b2 = a2.dependencies;
    c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
    c2.sibling = a2.sibling;
    c2.index = a2.index;
    c2.ref = a2.ref;
    return c2;
  }
  function yh(a2, b2, c2, d2, e2, f2) {
    var g2 = 2;
    d2 = a2;
    if ("function" === typeof a2)
      bj(a2) && (g2 = 1);
    else if ("string" === typeof a2)
      g2 = 5;
    else
      a:
        switch (a2) {
          case ya:
            return Ah(c2.children, e2, f2, b2);
          case za:
            g2 = 8;
            e2 |= 8;
            break;
          case Aa:
            return a2 = Bg(12, c2, b2, e2 | 2), a2.elementType = Aa, a2.lanes = f2, a2;
          case Ea:
            return a2 = Bg(13, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
          case Fa:
            return a2 = Bg(19, c2, b2, e2), a2.elementType = Fa, a2.lanes = f2, a2;
          case Ia:
            return qj(c2, e2, f2, b2);
          default:
            if ("object" === typeof a2 && null !== a2)
              switch (a2.$$typeof) {
                case Ba:
                  g2 = 10;
                  break a;
                case Ca:
                  g2 = 9;
                  break a;
                case Da:
                  g2 = 11;
                  break a;
                case Ga:
                  g2 = 14;
                  break a;
                case Ha:
                  g2 = 16;
                  d2 = null;
                  break a;
              }
            throw Error(p$3(130, null == a2 ? a2 : typeof a2, ""));
        }
    b2 = Bg(g2, c2, b2, e2);
    b2.elementType = a2;
    b2.type = d2;
    b2.lanes = f2;
    return b2;
  }
  function Ah(a2, b2, c2, d2) {
    a2 = Bg(7, a2, d2, b2);
    a2.lanes = c2;
    return a2;
  }
  function qj(a2, b2, c2, d2) {
    a2 = Bg(22, a2, d2, b2);
    a2.elementType = Ia;
    a2.lanes = c2;
    a2.stateNode = { isHidden: false };
    return a2;
  }
  function xh(a2, b2, c2) {
    a2 = Bg(6, a2, null, b2);
    a2.lanes = c2;
    return a2;
  }
  function zh(a2, b2, c2) {
    b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
    b2.lanes = c2;
    b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
    return b2;
  }
  function bl(a2, b2, c2, d2, e2) {
    this.tag = b2;
    this.containerInfo = a2;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d2;
    this.onRecoverableError = e2;
    this.mutableSourceEagerHydrationData = null;
  }
  function cl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    a2 = new bl(a2, b2, c2, h2, k2);
    1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
    f2 = Bg(3, null, null, b2);
    a2.current = f2;
    f2.stateNode = a2;
    f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    ah(f2);
    return a2;
  }
  function dl(a2, b2, c2) {
    var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
  }
  function el(a2) {
    if (!a2)
      return Vf;
    a2 = a2._reactInternals;
    a: {
      if (Vb(a2) !== a2 || 1 !== a2.tag)
        throw Error(p$3(170));
      var b2 = a2;
      do {
        switch (b2.tag) {
          case 3:
            b2 = b2.stateNode.context;
            break a;
          case 1:
            if (Zf(b2.type)) {
              b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b2 = b2.return;
      } while (null !== b2);
      throw Error(p$3(171));
    }
    if (1 === a2.tag) {
      var c2 = a2.type;
      if (Zf(c2))
        return bg(a2, c2, b2);
    }
    return b2;
  }
  function fl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    a2 = cl(c2, d2, true, a2, e2, f2, g2, h2, k2);
    a2.context = el(null);
    c2 = a2.current;
    d2 = L();
    e2 = lh(c2);
    f2 = ch(d2, e2);
    f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
    dh(c2, f2, e2);
    a2.current.lanes = e2;
    Ac(a2, e2, d2);
    Ek(a2, d2);
    return a2;
  }
  function gl(a2, b2, c2, d2) {
    var e2 = b2.current, f2 = L(), g2 = lh(e2);
    c2 = el(c2);
    null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
    b2 = ch(f2, g2);
    b2.payload = { element: a2 };
    d2 = void 0 === d2 ? null : d2;
    null !== d2 && (b2.callback = d2);
    a2 = dh(e2, b2, g2);
    null !== a2 && (mh(a2, e2, g2, f2), eh(a2, e2, g2));
    return g2;
  }
  function hl(a2) {
    a2 = a2.current;
    if (!a2.child)
      return null;
    switch (a2.child.tag) {
      case 5:
        return a2.child.stateNode;
      default:
        return a2.child.stateNode;
    }
  }
  function il(a2, b2) {
    a2 = a2.memoizedState;
    if (null !== a2 && null !== a2.dehydrated) {
      var c2 = a2.retryLane;
      a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
    }
  }
  function jl(a2, b2) {
    il(a2, b2);
    (a2 = a2.alternate) && il(a2, b2);
  }
  function kl() {
    return null;
  }
  var ll = "function" === typeof reportError ? reportError : function(a2) {
    console.error(a2);
  };
  function ml(a2) {
    this._internalRoot = a2;
  }
  nl.prototype.render = ml.prototype.render = function(a2) {
    var b2 = this._internalRoot;
    if (null === b2)
      throw Error(p$3(409));
    gl(a2, b2, null, null);
  };
  nl.prototype.unmount = ml.prototype.unmount = function() {
    var a2 = this._internalRoot;
    if (null !== a2) {
      this._internalRoot = null;
      var b2 = a2.containerInfo;
      Sk(function() {
        gl(null, a2, null, null);
      });
      b2[uf] = null;
    }
  };
  function nl(a2) {
    this._internalRoot = a2;
  }
  nl.prototype.unstable_scheduleHydration = function(a2) {
    if (a2) {
      var b2 = Hc();
      a2 = { blockedOn: null, target: a2, priority: b2 };
      for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++)
        ;
      Qc.splice(c2, 0, a2);
      0 === c2 && Vc(a2);
    }
  };
  function ol(a2) {
    return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
  }
  function pl(a2) {
    return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
  }
  function ql() {
  }
  function rl(a2, b2, c2, d2, e2) {
    if (e2) {
      if ("function" === typeof d2) {
        var f2 = d2;
        d2 = function() {
          var a3 = hl(g2);
          f2.call(a3);
        };
      }
      var g2 = fl(b2, d2, a2, 0, null, false, false, "", ql);
      a2._reactRootContainer = g2;
      a2[uf] = g2.current;
      sf(8 === a2.nodeType ? a2.parentNode : a2);
      Sk();
      return g2;
    }
    for (; e2 = a2.lastChild; )
      a2.removeChild(e2);
    if ("function" === typeof d2) {
      var h2 = d2;
      d2 = function() {
        var a3 = hl(k2);
        h2.call(a3);
      };
    }
    var k2 = cl(a2, 0, false, null, null, false, false, "", ql);
    a2._reactRootContainer = k2;
    a2[uf] = k2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Sk(function() {
      gl(b2, k2, c2, d2);
    });
    return k2;
  }
  function sl(a2, b2, c2, d2, e2) {
    var f2 = c2._reactRootContainer;
    if (f2) {
      var g2 = f2;
      if ("function" === typeof e2) {
        var h2 = e2;
        e2 = function() {
          var a3 = hl(g2);
          h2.call(a3);
        };
      }
      gl(b2, g2, a2, e2);
    } else
      g2 = rl(c2, b2, a2, e2, d2);
    return hl(g2);
  }
  Ec = function(a2) {
    switch (a2.tag) {
      case 3:
        var b2 = a2.stateNode;
        if (b2.current.memoizedState.isDehydrated) {
          var c2 = tc(b2.pendingLanes);
          0 !== c2 && (Cc(b2, c2 | 1), Ek(b2, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
        }
        break;
      case 13:
        Sk(function() {
          var b3 = Zg(a2, 1);
          if (null !== b3) {
            var c3 = L();
            mh(b3, a2, 1, c3);
          }
        }), jl(a2, 1);
    }
  };
  Fc = function(a2) {
    if (13 === a2.tag) {
      var b2 = Zg(a2, 134217728);
      if (null !== b2) {
        var c2 = L();
        mh(b2, a2, 134217728, c2);
      }
      jl(a2, 134217728);
    }
  };
  Gc = function(a2) {
    if (13 === a2.tag) {
      var b2 = lh(a2), c2 = Zg(a2, b2);
      if (null !== c2) {
        var d2 = L();
        mh(c2, a2, b2, d2);
      }
      jl(a2, b2);
    }
  };
  Hc = function() {
    return C;
  };
  Ic = function(a2, b2) {
    var c2 = C;
    try {
      return C = a2, b2();
    } finally {
      C = c2;
    }
  };
  yb = function(a2, b2, c2) {
    switch (b2) {
      case "input":
        bb(a2, c2);
        b2 = c2.name;
        if ("radio" === c2.type && null != b2) {
          for (c2 = a2; c2.parentNode; )
            c2 = c2.parentNode;
          c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
          for (b2 = 0; b2 < c2.length; b2++) {
            var d2 = c2[b2];
            if (d2 !== a2 && d2.form === a2.form) {
              var e2 = Db(d2);
              if (!e2)
                throw Error(p$3(90));
              Wa(d2);
              bb(d2, e2);
            }
          }
        }
        break;
      case "textarea":
        ib(a2, c2);
        break;
      case "select":
        b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
    }
  };
  Gb = Rk;
  Hb = Sk;
  var tl = { usingClientEntryPoint: false, Events: [Cb, ue$1, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
  var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
    a2 = Zb(a2);
    return null === a2 ? null : a2.stateNode;
  }, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wl.isDisabled && wl.supportsFiber)
      try {
        kc = wl.inject(vl), lc = wl;
      } catch (a2) {
      }
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
  reactDom_production_min.createPortal = function(a2, b2) {
    var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!ol(b2))
      throw Error(p$3(200));
    return dl(a2, b2, null, c2);
  };
  reactDom_production_min.createRoot = function(a2, b2) {
    if (!ol(a2))
      throw Error(p$3(299));
    var c2 = false, d2 = "", e2 = ll;
    null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
    b2 = cl(a2, 1, false, null, null, c2, false, d2, e2);
    a2[uf] = b2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    return new ml(b2);
  };
  reactDom_production_min.findDOMNode = function(a2) {
    if (null == a2)
      return null;
    if (1 === a2.nodeType)
      return a2;
    var b2 = a2._reactInternals;
    if (void 0 === b2) {
      if ("function" === typeof a2.render)
        throw Error(p$3(188));
      a2 = Object.keys(a2).join(",");
      throw Error(p$3(268, a2));
    }
    a2 = Zb(b2);
    a2 = null === a2 ? null : a2.stateNode;
    return a2;
  };
  reactDom_production_min.flushSync = function(a2) {
    return Sk(a2);
  };
  reactDom_production_min.hydrate = function(a2, b2, c2) {
    if (!pl(b2))
      throw Error(p$3(200));
    return sl(null, a2, b2, true, c2);
  };
  reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
    if (!ol(a2))
      throw Error(p$3(405));
    var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = ll;
    null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
    b2 = fl(b2, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g2);
    a2[uf] = b2.current;
    sf(a2);
    if (d2)
      for (a2 = 0; a2 < d2.length; a2++)
        c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
          c2,
          e2
        );
    return new nl(b2);
  };
  reactDom_production_min.render = function(a2, b2, c2) {
    if (!pl(b2))
      throw Error(p$3(200));
    return sl(null, a2, b2, false, c2);
  };
  reactDom_production_min.unmountComponentAtNode = function(a2) {
    if (!pl(a2))
      throw Error(p$3(40));
    return a2._reactRootContainer ? (Sk(function() {
      sl(null, null, a2, false, function() {
        a2._reactRootContainer = null;
        a2[uf] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Rk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
    if (!pl(c2))
      throw Error(p$3(200));
    if (null == a2 || void 0 === a2._reactInternals)
      throw Error(p$3(38));
    return sl(a2, b2, c2, false, d2);
  };
  reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    reactDom.exports = reactDom_production_min;
  }
  var reactDomExports = reactDom.exports;
  var m$2 = reactDomExports;
  {
    client.createRoot = m$2.createRoot;
    client.hydrateRoot = m$2.hydrateRoot;
  }
  const App = "";
  const index = "";
  const components = "";
  const PACKET_TYPES = /* @__PURE__ */ Object.create(null);
  PACKET_TYPES["open"] = "0";
  PACKET_TYPES["close"] = "1";
  PACKET_TYPES["ping"] = "2";
  PACKET_TYPES["pong"] = "3";
  PACKET_TYPES["message"] = "4";
  PACKET_TYPES["upgrade"] = "5";
  PACKET_TYPES["noop"] = "6";
  const PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
  Object.keys(PACKET_TYPES).forEach((key) => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
  });
  const ERROR_PACKET = { type: "error", data: "parser error" };
  const withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
  const withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
  const isView$1 = (obj) => {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
  };
  const encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (withNativeBlob$1 && data instanceof Blob) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(data, callback);
      }
    } else if (withNativeArrayBuffer$2 && (data instanceof ArrayBuffer || isView$1(data))) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(new Blob([data]), callback);
      }
    }
    return callback(PACKET_TYPES[type] + (data || ""));
  };
  const encodeBlobAsBase64 = (data, callback) => {
    const fileReader = new FileReader();
    fileReader.onload = function() {
      const content = fileReader.result.split(",")[1];
      callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
  };
  function toArray(data) {
    if (data instanceof Uint8Array) {
      return data;
    } else if (data instanceof ArrayBuffer) {
      return new Uint8Array(data);
    } else {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
  }
  let TEXT_ENCODER;
  function encodePacketToBinary(packet, callback) {
    if (withNativeBlob$1 && packet.data instanceof Blob) {
      return packet.data.arrayBuffer().then(toArray).then(callback);
    } else if (withNativeArrayBuffer$2 && (packet.data instanceof ArrayBuffer || isView$1(packet.data))) {
      return callback(toArray(packet.data));
    }
    encodePacket(packet, false, (encoded) => {
      if (!TEXT_ENCODER) {
        TEXT_ENCODER = new TextEncoder();
      }
      callback(TEXT_ENCODER.encode(encoded));
    });
  }
  const chars$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
  for (let i2 = 0; i2 < chars$1.length; i2++) {
    lookup$1[chars$1.charCodeAt(i2)] = i2;
  }
  const decode$1 = (base64) => {
    let bufferLength = base64.length * 0.75, len = base64.length, i2, p2 = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i2 = 0; i2 < len; i2 += 4) {
      encoded1 = lookup$1[base64.charCodeAt(i2)];
      encoded2 = lookup$1[base64.charCodeAt(i2 + 1)];
      encoded3 = lookup$1[base64.charCodeAt(i2 + 2)];
      encoded4 = lookup$1[base64.charCodeAt(i2 + 3)];
      bytes[p2++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p2++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p2++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
  };
  const withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
  const decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
      return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
      };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
      return {
        type: "message",
        data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
      };
    }
    const packetType = PACKET_TYPES_REVERSE[type];
    if (!packetType) {
      return ERROR_PACKET;
    }
    return encodedPacket.length > 1 ? {
      type: PACKET_TYPES_REVERSE[type],
      data: encodedPacket.substring(1)
    } : {
      type: PACKET_TYPES_REVERSE[type]
    };
  };
  const decodeBase64Packet = (data, binaryType) => {
    if (withNativeArrayBuffer$1) {
      const decoded = decode$1(data);
      return mapBinary(decoded, binaryType);
    } else {
      return { base64: true, data };
    }
  };
  const mapBinary = (data, binaryType) => {
    switch (binaryType) {
      case "blob":
        if (data instanceof Blob) {
          return data;
        } else {
          return new Blob([data]);
        }
      case "arraybuffer":
      default:
        if (data instanceof ArrayBuffer) {
          return data;
        } else {
          return data.buffer;
        }
    }
  };
  const SEPARATOR = String.fromCharCode(30);
  const encodePayload = (packets, callback) => {
    const length2 = packets.length;
    const encodedPackets = new Array(length2);
    let count = 0;
    packets.forEach((packet, i2) => {
      encodePacket(packet, false, (encodedPacket) => {
        encodedPackets[i2] = encodedPacket;
        if (++count === length2) {
          callback(encodedPackets.join(SEPARATOR));
        }
      });
    });
  };
  const decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i2 = 0; i2 < encodedPackets.length; i2++) {
      const decodedPacket = decodePacket(encodedPackets[i2], binaryType);
      packets.push(decodedPacket);
      if (decodedPacket.type === "error") {
        break;
      }
    }
    return packets;
  };
  function createPacketEncoderStream() {
    return new TransformStream({
      transform(packet, controller) {
        encodePacketToBinary(packet, (encodedPacket) => {
          const payloadLength = encodedPacket.length;
          let header;
          if (payloadLength < 126) {
            header = new Uint8Array(1);
            new DataView(header.buffer).setUint8(0, payloadLength);
          } else if (payloadLength < 65536) {
            header = new Uint8Array(3);
            const view = new DataView(header.buffer);
            view.setUint8(0, 126);
            view.setUint16(1, payloadLength);
          } else {
            header = new Uint8Array(9);
            const view = new DataView(header.buffer);
            view.setUint8(0, 127);
            view.setBigUint64(1, BigInt(payloadLength));
          }
          if (packet.data && typeof packet.data !== "string") {
            header[0] |= 128;
          }
          controller.enqueue(header);
          controller.enqueue(encodedPacket);
        });
      }
    });
  }
  let TEXT_DECODER;
  function totalLength(chunks) {
    return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
  }
  function concatChunks(chunks, size) {
    if (chunks[0].length === size) {
      return chunks.shift();
    }
    const buffer = new Uint8Array(size);
    let j2 = 0;
    for (let i2 = 0; i2 < size; i2++) {
      buffer[i2] = chunks[0][j2++];
      if (j2 === chunks[0].length) {
        chunks.shift();
        j2 = 0;
      }
    }
    if (chunks.length && j2 < chunks[0].length) {
      chunks[0] = chunks[0].slice(j2);
    }
    return buffer;
  }
  function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) {
      TEXT_DECODER = new TextDecoder();
    }
    const chunks = [];
    let state = 0;
    let expectedLength = -1;
    let isBinary2 = false;
    return new TransformStream({
      transform(chunk, controller) {
        chunks.push(chunk);
        while (true) {
          if (state === 0) {
            if (totalLength(chunks) < 1) {
              break;
            }
            const header = concatChunks(chunks, 1);
            isBinary2 = (header[0] & 128) === 128;
            expectedLength = header[0] & 127;
            if (expectedLength < 126) {
              state = 3;
            } else if (expectedLength === 126) {
              state = 1;
            } else {
              state = 2;
            }
          } else if (state === 1) {
            if (totalLength(chunks) < 2) {
              break;
            }
            const headerArray = concatChunks(chunks, 2);
            expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
            state = 3;
          } else if (state === 2) {
            if (totalLength(chunks) < 8) {
              break;
            }
            const headerArray = concatChunks(chunks, 8);
            const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
            const n2 = view.getUint32(0);
            if (n2 > Math.pow(2, 53 - 32) - 1) {
              controller.enqueue(ERROR_PACKET);
              break;
            }
            expectedLength = n2 * Math.pow(2, 32) + view.getUint32(4);
            state = 3;
          } else {
            if (totalLength(chunks) < expectedLength) {
              break;
            }
            const data = concatChunks(chunks, expectedLength);
            controller.enqueue(decodePacket(isBinary2 ? data : TEXT_DECODER.decode(data), binaryType));
            state = 0;
          }
          if (expectedLength === 0 || expectedLength > maxPayload) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
        }
      }
    });
  }
  const protocol$1 = 4;
  function Emitter(obj) {
    if (obj)
      return mixin(obj);
  }
  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }
  Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
    return this;
  };
  Emitter.prototype.once = function(event, fn) {
    function on2() {
      this.off(event, on2);
      fn.apply(this, arguments);
    }
    on2.fn = fn;
    this.on(event, on2);
    return this;
  };
  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    }
    var callbacks = this._callbacks["$" + event];
    if (!callbacks)
      return this;
    if (1 == arguments.length) {
      delete this._callbacks["$" + event];
      return this;
    }
    var cb2;
    for (var i2 = 0; i2 < callbacks.length; i2++) {
      cb2 = callbacks[i2];
      if (cb2 === fn || cb2.fn === fn) {
        callbacks.splice(i2, 1);
        break;
      }
    }
    if (callbacks.length === 0) {
      delete this._callbacks["$" + event];
    }
    return this;
  };
  Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
    for (var i2 = 1; i2 < arguments.length; i2++) {
      args[i2 - 1] = arguments[i2];
    }
    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i2 = 0, len = callbacks.length; i2 < len; ++i2) {
        callbacks[i2].apply(this, args);
      }
    }
    return this;
  };
  Emitter.prototype.emitReserved = Emitter.prototype.emit;
  Emitter.prototype.listeners = function(event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks["$" + event] || [];
  };
  Emitter.prototype.hasListeners = function(event) {
    return !!this.listeners(event).length;
  };
  const globalThisShim = (() => {
    if (typeof self !== "undefined") {
      return self;
    } else if (typeof window !== "undefined") {
      return window;
    } else {
      return Function("return this")();
    }
  })();
  function pick(obj, ...attr) {
    return attr.reduce((acc, k2) => {
      if (obj.hasOwnProperty(k2)) {
        acc[k2] = obj[k2];
      }
      return acc;
    }, {});
  }
  const NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
  const NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
  function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
      obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
      obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
    } else {
      obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
      obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
    }
  }
  const BASE64_OVERHEAD = 1.33;
  function byteLength(obj) {
    if (typeof obj === "string") {
      return utf8Length(obj);
    }
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
  }
  function utf8Length(str) {
    let c2 = 0, length2 = 0;
    for (let i2 = 0, l2 = str.length; i2 < l2; i2++) {
      c2 = str.charCodeAt(i2);
      if (c2 < 128) {
        length2 += 1;
      } else if (c2 < 2048) {
        length2 += 2;
      } else if (c2 < 55296 || c2 >= 57344) {
        length2 += 3;
      } else {
        i2++;
        length2 += 4;
      }
    }
    return length2;
  }
  function encode$1(obj) {
    let str = "";
    for (let i2 in obj) {
      if (obj.hasOwnProperty(i2)) {
        if (str.length)
          str += "&";
        str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
      }
    }
    return str;
  }
  function decode(qs) {
    let qry = {};
    let pairs = qs.split("&");
    for (let i2 = 0, l2 = pairs.length; i2 < l2; i2++) {
      let pair = pairs[i2].split("=");
      qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
  }
  class TransportError extends Error {
    constructor(reason, description, context) {
      super(reason);
      this.description = description;
      this.context = context;
      this.type = "TransportError";
    }
  }
  class Transport extends Emitter {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    constructor(opts) {
      super();
      this.writable = false;
      installTimerFunctions(this, opts);
      this.opts = opts;
      this.query = opts.query;
      this.socket = opts.socket;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */
    onError(reason, description, context) {
      super.emitReserved("error", new TransportError(reason, description, context));
      return this;
    }
    /**
     * Opens the transport.
     */
    open() {
      this.readyState = "opening";
      this.doOpen();
      return this;
    }
    /**
     * Closes the transport.
     */
    close() {
      if (this.readyState === "opening" || this.readyState === "open") {
        this.doClose();
        this.onClose();
      }
      return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */
    send(packets) {
      if (this.readyState === "open") {
        this.write(packets);
      }
    }
    /**
     * Called upon open
     *
     * @protected
     */
    onOpen() {
      this.readyState = "open";
      this.writable = true;
      super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */
    onData(data) {
      const packet = decodePacket(data, this.socket.binaryType);
      this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */
    onPacket(packet) {
      super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */
    onClose(details) {
      this.readyState = "closed";
      super.emitReserved("close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */
    pause(onPause) {
    }
    createUri(schema, query = {}) {
      return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
    }
    _hostname() {
      const hostname = this.opts.hostname;
      return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    }
    _port() {
      if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
        return ":" + this.opts.port;
      } else {
        return "";
      }
    }
    _query(query) {
      const encodedQuery = encode$1(query);
      return encodedQuery.length ? "?" + encodedQuery : "";
    }
  }
  const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), length = 64, map = {};
  let seed = 0, i$2 = 0, prev;
  function encode(num) {
    let encoded = "";
    do {
      encoded = alphabet[num % length] + encoded;
      num = Math.floor(num / length);
    } while (num > 0);
    return encoded;
  }
  function yeast() {
    const now = encode(+/* @__PURE__ */ new Date());
    if (now !== prev)
      return seed = 0, prev = now;
    return now + "." + encode(seed++);
  }
  for (; i$2 < length; i$2++)
    map[alphabet[i$2]] = i$2;
  let value = false;
  try {
    value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
  } catch (err) {
  }
  const hasCORS = value;
  function XHR(opts) {
    const xdomain = opts.xdomain;
    try {
      if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
        return new XMLHttpRequest();
      }
    } catch (e2) {
    }
    if (!xdomain) {
      try {
        return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch (e2) {
      }
    }
  }
  function createCookieJar() {
  }
  function empty() {
  }
  const hasXHR2 = function() {
    const xhr = new XHR({
      xdomain: false
    });
    return null != xhr.responseType;
  }();
  class Polling extends Transport {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */
    constructor(opts) {
      super(opts);
      this.polling = false;
      if (typeof location !== "undefined") {
        const isSSL = "https:" === location.protocol;
        let port = location.port;
        if (!port) {
          port = isSSL ? "443" : "80";
        }
        this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      }
      const forceBase64 = opts && opts.forceBase64;
      this.supportsBinary = hasXHR2 && !forceBase64;
      if (this.opts.withCredentials) {
        this.cookieJar = createCookieJar();
      }
    }
    get name() {
      return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
    doOpen() {
      this.poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */
    pause(onPause) {
      this.readyState = "pausing";
      const pause = () => {
        this.readyState = "paused";
        onPause();
      };
      if (this.polling || !this.writable) {
        let total = 0;
        if (this.polling) {
          total++;
          this.once("pollComplete", function() {
            --total || pause();
          });
        }
        if (!this.writable) {
          total++;
          this.once("drain", function() {
            --total || pause();
          });
        }
      } else {
        pause();
      }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */
    poll() {
      this.polling = true;
      this.doPoll();
      this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */
    onData(data) {
      const callback = (packet) => {
        if ("opening" === this.readyState && packet.type === "open") {
          this.onOpen();
        }
        if ("close" === packet.type) {
          this.onClose({ description: "transport closed by the server" });
          return false;
        }
        this.onPacket(packet);
      };
      decodePayload(data, this.socket.binaryType).forEach(callback);
      if ("closed" !== this.readyState) {
        this.polling = false;
        this.emitReserved("pollComplete");
        if ("open" === this.readyState) {
          this.poll();
        }
      }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */
    doClose() {
      const close = () => {
        this.write([{ type: "close" }]);
      };
      if ("open" === this.readyState) {
        close();
      } else {
        this.once("open", close);
      }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */
    write(packets) {
      this.writable = false;
      encodePayload(packets, (data) => {
        this.doWrite(data, () => {
          this.writable = true;
          this.emitReserved("drain");
        });
      });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
      const schema = this.opts.secure ? "https" : "http";
      const query = this.query || {};
      if (false !== this.opts.timestampRequests) {
        query[this.opts.timestampParam] = yeast();
      }
      if (!this.supportsBinary && !query.sid) {
        query.b64 = 1;
      }
      return this.createUri(schema, query);
    }
    /**
     * Creates a request.
     *
     * @param {String} method
     * @private
     */
    request(opts = {}) {
      Object.assign(opts, { xd: this.xd, cookieJar: this.cookieJar }, this.opts);
      return new Request(this.uri(), opts);
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */
    doWrite(data, fn) {
      const req = this.request({
        method: "POST",
        data
      });
      req.on("success", fn);
      req.on("error", (xhrStatus, context) => {
        this.onError("xhr post error", xhrStatus, context);
      });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */
    doPoll() {
      const req = this.request();
      req.on("data", this.onData.bind(this));
      req.on("error", (xhrStatus, context) => {
        this.onError("xhr poll error", xhrStatus, context);
      });
      this.pollXhr = req;
    }
  }
  class Request extends Emitter {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */
    constructor(uri, opts) {
      super();
      installTimerFunctions(this, opts);
      this.opts = opts;
      this.method = opts.method || "GET";
      this.uri = uri;
      this.data = void 0 !== opts.data ? opts.data : null;
      this.create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */
    create() {
      var _a;
      const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
      opts.xdomain = !!this.opts.xd;
      const xhr = this.xhr = new XHR(opts);
      try {
        xhr.open(this.method, this.uri, true);
        try {
          if (this.opts.extraHeaders) {
            xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
            for (let i2 in this.opts.extraHeaders) {
              if (this.opts.extraHeaders.hasOwnProperty(i2)) {
                xhr.setRequestHeader(i2, this.opts.extraHeaders[i2]);
              }
            }
          }
        } catch (e2) {
        }
        if ("POST" === this.method) {
          try {
            xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (e2) {
          }
        }
        try {
          xhr.setRequestHeader("Accept", "*/*");
        } catch (e2) {
        }
        (_a = this.opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
        if ("withCredentials" in xhr) {
          xhr.withCredentials = this.opts.withCredentials;
        }
        if (this.opts.requestTimeout) {
          xhr.timeout = this.opts.requestTimeout;
        }
        xhr.onreadystatechange = () => {
          var _a2;
          if (xhr.readyState === 3) {
            (_a2 = this.opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(xhr);
          }
          if (4 !== xhr.readyState)
            return;
          if (200 === xhr.status || 1223 === xhr.status) {
            this.onLoad();
          } else {
            this.setTimeoutFn(() => {
              this.onError(typeof xhr.status === "number" ? xhr.status : 0);
            }, 0);
          }
        };
        xhr.send(this.data);
      } catch (e2) {
        this.setTimeoutFn(() => {
          this.onError(e2);
        }, 0);
        return;
      }
      if (typeof document !== "undefined") {
        this.index = Request.requestsCount++;
        Request.requests[this.index] = this;
      }
    }
    /**
     * Called upon error.
     *
     * @private
     */
    onError(err) {
      this.emitReserved("error", err, this.xhr);
      this.cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */
    cleanup(fromError) {
      if ("undefined" === typeof this.xhr || null === this.xhr) {
        return;
      }
      this.xhr.onreadystatechange = empty;
      if (fromError) {
        try {
          this.xhr.abort();
        } catch (e2) {
        }
      }
      if (typeof document !== "undefined") {
        delete Request.requests[this.index];
      }
      this.xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */
    onLoad() {
      const data = this.xhr.responseText;
      if (data !== null) {
        this.emitReserved("data", data);
        this.emitReserved("success");
        this.cleanup();
      }
    }
    /**
     * Aborts the request.
     *
     * @package
     */
    abort() {
      this.cleanup();
    }
  }
  Request.requestsCount = 0;
  Request.requests = {};
  if (typeof document !== "undefined") {
    if (typeof attachEvent === "function") {
      attachEvent("onunload", unloadHandler);
    } else if (typeof addEventListener === "function") {
      const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
      addEventListener(terminationEvent, unloadHandler, false);
    }
  }
  function unloadHandler() {
    for (let i2 in Request.requests) {
      if (Request.requests.hasOwnProperty(i2)) {
        Request.requests[i2].abort();
      }
    }
  }
  const nextTick = (() => {
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
      return (cb2) => Promise.resolve().then(cb2);
    } else {
      return (cb2, setTimeoutFn) => setTimeoutFn(cb2, 0);
    }
  })();
  const WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
  const usingBrowserWebSocket = true;
  const defaultBinaryType = "arraybuffer";
  const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
  class WS extends Transport {
    /**
     * WebSocket transport constructor.
     *
     * @param {Object} opts - connection options
     * @protected
     */
    constructor(opts) {
      super(opts);
      this.supportsBinary = !opts.forceBase64;
    }
    get name() {
      return "websocket";
    }
    doOpen() {
      if (!this.check()) {
        return;
      }
      const uri = this.uri();
      const protocols = this.opts.protocols;
      const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
      if (this.opts.extraHeaders) {
        opts.headers = this.opts.extraHeaders;
      }
      try {
        this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
      } catch (err) {
        return this.emitReserved("error", err);
      }
      this.ws.binaryType = this.socket.binaryType;
      this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */
    addEventListeners() {
      this.ws.onopen = () => {
        if (this.opts.autoUnref) {
          this.ws._socket.unref();
        }
        this.onOpen();
      };
      this.ws.onclose = (closeEvent) => this.onClose({
        description: "websocket connection closed",
        context: closeEvent
      });
      this.ws.onmessage = (ev) => this.onData(ev.data);
      this.ws.onerror = (e2) => this.onError("websocket error", e2);
    }
    write(packets) {
      this.writable = false;
      for (let i2 = 0; i2 < packets.length; i2++) {
        const packet = packets[i2];
        const lastPacket = i2 === packets.length - 1;
        encodePacket(packet, this.supportsBinary, (data) => {
          const opts = {};
          try {
            if (usingBrowserWebSocket) {
              this.ws.send(data);
            }
          } catch (e2) {
          }
          if (lastPacket) {
            nextTick(() => {
              this.writable = true;
              this.emitReserved("drain");
            }, this.setTimeoutFn);
          }
        });
      }
    }
    doClose() {
      if (typeof this.ws !== "undefined") {
        this.ws.close();
        this.ws = null;
      }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
      const schema = this.opts.secure ? "wss" : "ws";
      const query = this.query || {};
      if (this.opts.timestampRequests) {
        query[this.opts.timestampParam] = yeast();
      }
      if (!this.supportsBinary) {
        query.b64 = 1;
      }
      return this.createUri(schema, query);
    }
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @private
     */
    check() {
      return !!WebSocket;
    }
  }
  class WT extends Transport {
    get name() {
      return "webtransport";
    }
    doOpen() {
      if (typeof WebTransport !== "function") {
        return;
      }
      this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
      this.transport.closed.then(() => {
        this.onClose();
      }).catch((err) => {
        this.onError("webtransport error", err);
      });
      this.transport.ready.then(() => {
        this.transport.createBidirectionalStream().then((stream) => {
          const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
          const reader = stream.readable.pipeThrough(decoderStream).getReader();
          const encoderStream = createPacketEncoderStream();
          encoderStream.readable.pipeTo(stream.writable);
          this.writer = encoderStream.writable.getWriter();
          const read = () => {
            reader.read().then(({ done, value: value2 }) => {
              if (done) {
                return;
              }
              this.onPacket(value2);
              read();
            }).catch((err) => {
            });
          };
          read();
          const packet = { type: "open" };
          if (this.query.sid) {
            packet.data = `{"sid":"${this.query.sid}"}`;
          }
          this.writer.write(packet).then(() => this.onOpen());
        });
      });
    }
    write(packets) {
      this.writable = false;
      for (let i2 = 0; i2 < packets.length; i2++) {
        const packet = packets[i2];
        const lastPacket = i2 === packets.length - 1;
        this.writer.write(packet).then(() => {
          if (lastPacket) {
            nextTick(() => {
              this.writable = true;
              this.emitReserved("drain");
            }, this.setTimeoutFn);
          }
        });
      }
    }
    doClose() {
      var _a;
      (_a = this.transport) === null || _a === void 0 ? void 0 : _a.close();
    }
  }
  const transports = {
    websocket: WS,
    webtransport: WT,
    polling: Polling
  };
  const re$1 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  const parts = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor"
  ];
  function parse(str) {
    const src = str, b2 = str.indexOf("["), e2 = str.indexOf("]");
    if (b2 != -1 && e2 != -1) {
      str = str.substring(0, b2) + str.substring(b2, e2).replace(/:/g, ";") + str.substring(e2, str.length);
    }
    let m2 = re$1.exec(str || ""), uri = {}, i2 = 14;
    while (i2--) {
      uri[parts[i2]] = m2[i2] || "";
    }
    if (b2 != -1 && e2 != -1) {
      uri.source = src;
      uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
      uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
      uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri["path"]);
    uri.queryKey = queryKey(uri, uri["query"]);
    return uri;
  }
  function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == "/" || path.length === 0) {
      names.splice(0, 1);
    }
    if (path.slice(-1) == "/") {
      names.splice(names.length - 1, 1);
    }
    return names;
  }
  function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
      if ($1) {
        data[$1] = $2;
      }
    });
    return data;
  }
  let Socket$2 = class Socket2 extends Emitter {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    constructor(uri, opts = {}) {
      super();
      this.binaryType = defaultBinaryType;
      this.writeBuffer = [];
      if (uri && "object" === typeof uri) {
        opts = uri;
        uri = null;
      }
      if (uri) {
        uri = parse(uri);
        opts.hostname = uri.host;
        opts.secure = uri.protocol === "https" || uri.protocol === "wss";
        opts.port = uri.port;
        if (uri.query)
          opts.query = uri.query;
      } else if (opts.host) {
        opts.hostname = parse(opts.host).host;
      }
      installTimerFunctions(this, opts);
      this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
      if (opts.hostname && !opts.port) {
        opts.port = this.secure ? "443" : "80";
      }
      this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
      this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
      this.transports = opts.transports || [
        "polling",
        "websocket",
        "webtransport"
      ];
      this.writeBuffer = [];
      this.prevBufferLen = 0;
      this.opts = Object.assign({
        path: "/engine.io",
        agent: false,
        withCredentials: false,
        upgrade: true,
        timestampParam: "t",
        rememberUpgrade: false,
        addTrailingSlash: true,
        rejectUnauthorized: true,
        perMessageDeflate: {
          threshold: 1024
        },
        transportOptions: {},
        closeOnBeforeunload: false
      }, opts);
      this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
      if (typeof this.opts.query === "string") {
        this.opts.query = decode(this.opts.query);
      }
      this.id = null;
      this.upgrades = null;
      this.pingInterval = null;
      this.pingTimeout = null;
      this.pingTimeoutTimer = null;
      if (typeof addEventListener === "function") {
        if (this.opts.closeOnBeforeunload) {
          this.beforeunloadEventListener = () => {
            if (this.transport) {
              this.transport.removeAllListeners();
              this.transport.close();
            }
          };
          addEventListener("beforeunload", this.beforeunloadEventListener, false);
        }
        if (this.hostname !== "localhost") {
          this.offlineEventListener = () => {
            this.onClose("transport close", {
              description: "network connection lost"
            });
          };
          addEventListener("offline", this.offlineEventListener, false);
        }
      }
      this.open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    createTransport(name2) {
      const query = Object.assign({}, this.opts.query);
      query.EIO = protocol$1;
      query.transport = name2;
      if (this.id)
        query.sid = this.id;
      const opts = Object.assign({}, this.opts, {
        query,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port
      }, this.opts.transportOptions[name2]);
      return new transports[name2](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */
    open() {
      let transport;
      if (this.opts.rememberUpgrade && Socket2.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
        transport = "websocket";
      } else if (0 === this.transports.length) {
        this.setTimeoutFn(() => {
          this.emitReserved("error", "No transports available");
        }, 0);
        return;
      } else {
        transport = this.transports[0];
      }
      this.readyState = "opening";
      try {
        transport = this.createTransport(transport);
      } catch (e2) {
        this.transports.shift();
        this.open();
        return;
      }
      transport.open();
      this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */
    setTransport(transport) {
      if (this.transport) {
        this.transport.removeAllListeners();
      }
      this.transport = transport;
      transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (reason) => this.onClose("transport close", reason));
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */
    probe(name2) {
      let transport = this.createTransport(name2);
      let failed = false;
      Socket2.priorWebsocketSuccess = false;
      const onTransportOpen = () => {
        if (failed)
          return;
        transport.send([{ type: "ping", data: "probe" }]);
        transport.once("packet", (msg) => {
          if (failed)
            return;
          if ("pong" === msg.type && "probe" === msg.data) {
            this.upgrading = true;
            this.emitReserved("upgrading", transport);
            if (!transport)
              return;
            Socket2.priorWebsocketSuccess = "websocket" === transport.name;
            this.transport.pause(() => {
              if (failed)
                return;
              if ("closed" === this.readyState)
                return;
              cleanup();
              this.setTransport(transport);
              transport.send([{ type: "upgrade" }]);
              this.emitReserved("upgrade", transport);
              transport = null;
              this.upgrading = false;
              this.flush();
            });
          } else {
            const err = new Error("probe error");
            err.transport = transport.name;
            this.emitReserved("upgradeError", err);
          }
        });
      };
      function freezeTransport() {
        if (failed)
          return;
        failed = true;
        cleanup();
        transport.close();
        transport = null;
      }
      const onerror = (err) => {
        const error = new Error("probe error: " + err);
        error.transport = transport.name;
        freezeTransport();
        this.emitReserved("upgradeError", error);
      };
      function onTransportClose() {
        onerror("transport closed");
      }
      function onclose() {
        onerror("socket closed");
      }
      function onupgrade(to) {
        if (transport && to.name !== transport.name) {
          freezeTransport();
        }
      }
      const cleanup = () => {
        transport.removeListener("open", onTransportOpen);
        transport.removeListener("error", onerror);
        transport.removeListener("close", onTransportClose);
        this.off("close", onclose);
        this.off("upgrading", onupgrade);
      };
      transport.once("open", onTransportOpen);
      transport.once("error", onerror);
      transport.once("close", onTransportClose);
      this.once("close", onclose);
      this.once("upgrading", onupgrade);
      if (this.upgrades.indexOf("webtransport") !== -1 && name2 !== "webtransport") {
        this.setTimeoutFn(() => {
          if (!failed) {
            transport.open();
          }
        }, 200);
      } else {
        transport.open();
      }
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */
    onOpen() {
      this.readyState = "open";
      Socket2.priorWebsocketSuccess = "websocket" === this.transport.name;
      this.emitReserved("open");
      this.flush();
      if ("open" === this.readyState && this.opts.upgrade) {
        let i2 = 0;
        const l2 = this.upgrades.length;
        for (; i2 < l2; i2++) {
          this.probe(this.upgrades[i2]);
        }
      }
    }
    /**
     * Handles a packet.
     *
     * @private
     */
    onPacket(packet) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        this.emitReserved("packet", packet);
        this.emitReserved("heartbeat");
        this.resetPingTimeout();
        switch (packet.type) {
          case "open":
            this.onHandshake(JSON.parse(packet.data));
            break;
          case "ping":
            this.sendPacket("pong");
            this.emitReserved("ping");
            this.emitReserved("pong");
            break;
          case "error":
            const err = new Error("server error");
            err.code = packet.data;
            this.onError(err);
            break;
          case "message":
            this.emitReserved("data", packet.data);
            this.emitReserved("message", packet.data);
            break;
        }
      }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */
    onHandshake(data) {
      this.emitReserved("handshake", data);
      this.id = data.sid;
      this.transport.query.sid = data.sid;
      this.upgrades = this.filterUpgrades(data.upgrades);
      this.pingInterval = data.pingInterval;
      this.pingTimeout = data.pingTimeout;
      this.maxPayload = data.maxPayload;
      this.onOpen();
      if ("closed" === this.readyState)
        return;
      this.resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */
    resetPingTimeout() {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout);
      if (this.opts.autoUnref) {
        this.pingTimeoutTimer.unref();
      }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */
    onDrain() {
      this.writeBuffer.splice(0, this.prevBufferLen);
      this.prevBufferLen = 0;
      if (0 === this.writeBuffer.length) {
        this.emitReserved("drain");
      } else {
        this.flush();
      }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */
    flush() {
      if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        const packets = this.getWritablePackets();
        this.transport.send(packets);
        this.prevBufferLen = packets.length;
        this.emitReserved("flush");
      }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
    getWritablePackets() {
      const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
      if (!shouldCheckPayloadSize) {
        return this.writeBuffer;
      }
      let payloadSize = 1;
      for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
        const data = this.writeBuffer[i2].data;
        if (data) {
          payloadSize += byteLength(data);
        }
        if (i2 > 0 && payloadSize > this.maxPayload) {
          return this.writeBuffer.slice(0, i2);
        }
        payloadSize += 2;
      }
      return this.writeBuffer;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} callback function.
     * @return {Socket} for chaining.
     */
    write(msg, options, fn) {
      this.sendPacket("message", msg, options, fn);
      return this;
    }
    send(msg, options, fn) {
      this.sendPacket("message", msg, options, fn);
      return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */
    sendPacket(type, data, options, fn) {
      if ("function" === typeof data) {
        fn = data;
        data = void 0;
      }
      if ("function" === typeof options) {
        fn = options;
        options = null;
      }
      if ("closing" === this.readyState || "closed" === this.readyState) {
        return;
      }
      options = options || {};
      options.compress = false !== options.compress;
      const packet = {
        type,
        data,
        options
      };
      this.emitReserved("packetCreate", packet);
      this.writeBuffer.push(packet);
      if (fn)
        this.once("flush", fn);
      this.flush();
    }
    /**
     * Closes the connection.
     */
    close() {
      const close = () => {
        this.onClose("forced close");
        this.transport.close();
      };
      const cleanupAndClose = () => {
        this.off("upgrade", cleanupAndClose);
        this.off("upgradeError", cleanupAndClose);
        close();
      };
      const waitForUpgrade = () => {
        this.once("upgrade", cleanupAndClose);
        this.once("upgradeError", cleanupAndClose);
      };
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.readyState = "closing";
        if (this.writeBuffer.length) {
          this.once("drain", () => {
            if (this.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          });
        } else if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      }
      return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */
    onError(err) {
      Socket2.priorWebsocketSuccess = false;
      this.emitReserved("error", err);
      this.onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */
    onClose(reason, description) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.transport.removeAllListeners("close");
        this.transport.close();
        this.transport.removeAllListeners();
        if (typeof removeEventListener === "function") {
          removeEventListener("beforeunload", this.beforeunloadEventListener, false);
          removeEventListener("offline", this.offlineEventListener, false);
        }
        this.readyState = "closed";
        this.id = null;
        this.emitReserved("close", reason, description);
        this.writeBuffer = [];
        this.prevBufferLen = 0;
      }
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */
    filterUpgrades(upgrades) {
      const filteredUpgrades = [];
      let i2 = 0;
      const j2 = upgrades.length;
      for (; i2 < j2; i2++) {
        if (~this.transports.indexOf(upgrades[i2]))
          filteredUpgrades.push(upgrades[i2]);
      }
      return filteredUpgrades;
    }
  };
  Socket$2.protocol = protocol$1;
  function url(uri, path = "", loc) {
    let obj = uri;
    loc = loc || typeof location !== "undefined" && location;
    if (null == uri)
      uri = loc.protocol + "//" + loc.host;
    if (typeof uri === "string") {
      if ("/" === uri.charAt(0)) {
        if ("/" === uri.charAt(1)) {
          uri = loc.protocol + uri;
        } else {
          uri = loc.host + uri;
        }
      }
      if (!/^(https?|wss?):\/\//.test(uri)) {
        if ("undefined" !== typeof loc) {
          uri = loc.protocol + "//" + uri;
        } else {
          uri = "https://" + uri;
        }
      }
      obj = parse(uri);
    }
    if (!obj.port) {
      if (/^(http|ws)$/.test(obj.protocol)) {
        obj.port = "80";
      } else if (/^(http|ws)s$/.test(obj.protocol)) {
        obj.port = "443";
      }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
  }
  const withNativeArrayBuffer = typeof ArrayBuffer === "function";
  const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
  };
  const toString = Object.prototype.toString;
  const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
  const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
  function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
  }
  function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
      return false;
    }
    if (Array.isArray(obj)) {
      for (let i2 = 0, l2 = obj.length; i2 < l2; i2++) {
        if (hasBinary(obj[i2])) {
          return true;
        }
      }
      return false;
    }
    if (isBinary(obj)) {
      return true;
    }
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
      return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
        return true;
      }
    }
    return false;
  }
  function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length;
    return { packet: pack, buffers };
  }
  function _deconstructPacket(data, buffers) {
    if (!data)
      return data;
    if (isBinary(data)) {
      const placeholder = { _placeholder: true, num: buffers.length };
      buffers.push(data);
      return placeholder;
    } else if (Array.isArray(data)) {
      const newData = new Array(data.length);
      for (let i2 = 0; i2 < data.length; i2++) {
        newData[i2] = _deconstructPacket(data[i2], buffers);
      }
      return newData;
    } else if (typeof data === "object" && !(data instanceof Date)) {
      const newData = {};
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          newData[key] = _deconstructPacket(data[key], buffers);
        }
      }
      return newData;
    }
    return data;
  }
  function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments;
    return packet;
  }
  function _reconstructPacket(data, buffers) {
    if (!data)
      return data;
    if (data && data._placeholder === true) {
      const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
      if (isIndexValid) {
        return buffers[data.num];
      } else {
        throw new Error("illegal attachments");
      }
    } else if (Array.isArray(data)) {
      for (let i2 = 0; i2 < data.length; i2++) {
        data[i2] = _reconstructPacket(data[i2], buffers);
      }
    } else if (typeof data === "object") {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          data[key] = _reconstructPacket(data[key], buffers);
        }
      }
    }
    return data;
  }
  const RESERVED_EVENTS$1 = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener"
    // used by the Node.js EventEmitter
  ];
  const protocol = 5;
  var PacketType;
  (function(PacketType2) {
    PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
    PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
    PacketType2[PacketType2["ACK"] = 3] = "ACK";
    PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
  })(PacketType || (PacketType = {}));
  class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(replacer) {
      this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
      if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
        if (hasBinary(obj)) {
          return this.encodeAsBinary({
            type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
            nsp: obj.nsp,
            data: obj.data,
            id: obj.id
          });
        }
      }
      return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
      let str = "" + obj.type;
      if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
        str += obj.attachments + "-";
      }
      if (obj.nsp && "/" !== obj.nsp) {
        str += obj.nsp + ",";
      }
      if (null != obj.id) {
        str += obj.id;
      }
      if (null != obj.data) {
        str += JSON.stringify(obj.data, this.replacer);
      }
      return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
      const deconstruction = deconstructPacket(obj);
      const pack = this.encodeAsString(deconstruction.packet);
      const buffers = deconstruction.buffers;
      buffers.unshift(pack);
      return buffers;
    }
  }
  function isObject(value2) {
    return Object.prototype.toString.call(value2) === "[object Object]";
  }
  class Decoder extends Emitter {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    constructor(reviver) {
      super();
      this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
      let packet;
      if (typeof obj === "string") {
        if (this.reconstructor) {
          throw new Error("got plaintext data when reconstructing a packet");
        }
        packet = this.decodeString(obj);
        const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
        if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
          packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
          this.reconstructor = new BinaryReconstructor(packet);
          if (packet.attachments === 0) {
            super.emitReserved("decoded", packet);
          }
        } else {
          super.emitReserved("decoded", packet);
        }
      } else if (isBinary(obj) || obj.base64) {
        if (!this.reconstructor) {
          throw new Error("got binary data when not reconstructing a packet");
        } else {
          packet = this.reconstructor.takeBinaryData(obj);
          if (packet) {
            this.reconstructor = null;
            super.emitReserved("decoded", packet);
          }
        }
      } else {
        throw new Error("Unknown type: " + obj);
      }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
      let i2 = 0;
      const p2 = {
        type: Number(str.charAt(0))
      };
      if (PacketType[p2.type] === void 0) {
        throw new Error("unknown packet type " + p2.type);
      }
      if (p2.type === PacketType.BINARY_EVENT || p2.type === PacketType.BINARY_ACK) {
        const start = i2 + 1;
        while (str.charAt(++i2) !== "-" && i2 != str.length) {
        }
        const buf = str.substring(start, i2);
        if (buf != Number(buf) || str.charAt(i2) !== "-") {
          throw new Error("Illegal attachments");
        }
        p2.attachments = Number(buf);
      }
      if ("/" === str.charAt(i2 + 1)) {
        const start = i2 + 1;
        while (++i2) {
          const c2 = str.charAt(i2);
          if ("," === c2)
            break;
          if (i2 === str.length)
            break;
        }
        p2.nsp = str.substring(start, i2);
      } else {
        p2.nsp = "/";
      }
      const next = str.charAt(i2 + 1);
      if ("" !== next && Number(next) == next) {
        const start = i2 + 1;
        while (++i2) {
          const c2 = str.charAt(i2);
          if (null == c2 || Number(c2) != c2) {
            --i2;
            break;
          }
          if (i2 === str.length)
            break;
        }
        p2.id = Number(str.substring(start, i2 + 1));
      }
      if (str.charAt(++i2)) {
        const payload = this.tryParse(str.substr(i2));
        if (Decoder.isPayloadValid(p2.type, payload)) {
          p2.data = payload;
        } else {
          throw new Error("invalid payload");
        }
      }
      return p2;
    }
    tryParse(str) {
      try {
        return JSON.parse(str, this.reviver);
      } catch (e2) {
        return false;
      }
    }
    static isPayloadValid(type, payload) {
      switch (type) {
        case PacketType.CONNECT:
          return isObject(payload);
        case PacketType.DISCONNECT:
          return payload === void 0;
        case PacketType.CONNECT_ERROR:
          return typeof payload === "string" || isObject(payload);
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS$1.indexOf(payload[0]) === -1);
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          return Array.isArray(payload);
      }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
      if (this.reconstructor) {
        this.reconstructor.finishedReconstruction();
        this.reconstructor = null;
      }
    }
  }
  class BinaryReconstructor {
    constructor(packet) {
      this.packet = packet;
      this.buffers = [];
      this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
      this.buffers.push(binData);
      if (this.buffers.length === this.reconPack.attachments) {
        const packet = reconstructPacket(this.reconPack, this.buffers);
        this.finishedReconstruction();
        return packet;
      }
      return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
      this.reconPack = null;
      this.buffers = [];
    }
  }
  const parser = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    Decoder,
    Encoder,
    get PacketType() {
      return PacketType;
    },
    protocol
  }, Symbol.toStringTag, { value: "Module" }));
  function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
      obj.off(ev, fn);
    };
  }
  const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
  });
  let Socket$1 = class Socket extends Emitter {
    /**
     * `Socket` constructor.
     */
    constructor(io, nsp, opts) {
      super();
      this.connected = false;
      this.recovered = false;
      this.receiveBuffer = [];
      this.sendBuffer = [];
      this._queue = [];
      this._queueSeq = 0;
      this.ids = 0;
      this.acks = {};
      this.flags = {};
      this.io = io;
      this.nsp = nsp;
      if (opts && opts.auth) {
        this.auth = opts.auth;
      }
      this._opts = Object.assign({}, opts);
      if (this.io._autoConnect)
        this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */
    get disconnected() {
      return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
      if (this.subs)
        return;
      const io = this.io;
      this.subs = [
        on(io, "open", this.onopen.bind(this)),
        on(io, "packet", this.onpacket.bind(this)),
        on(io, "error", this.onerror.bind(this)),
        on(io, "close", this.onclose.bind(this))
      ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */
    get active() {
      return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */
    connect() {
      if (this.connected)
        return this;
      this.subEvents();
      if (!this.io["_reconnecting"])
        this.io.open();
      if ("open" === this.io._readyState)
        this.onopen();
      return this;
    }
    /**
     * Alias for {@link connect()}.
     */
    open() {
      return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */
    send(...args) {
      args.unshift("message");
      this.emit.apply(this, args);
      return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */
    emit(ev, ...args) {
      if (RESERVED_EVENTS.hasOwnProperty(ev)) {
        throw new Error('"' + ev.toString() + '" is a reserved event name');
      }
      args.unshift(ev);
      if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
        this._addToQueue(args);
        return this;
      }
      const packet = {
        type: PacketType.EVENT,
        data: args
      };
      packet.options = {};
      packet.options.compress = this.flags.compress !== false;
      if ("function" === typeof args[args.length - 1]) {
        const id2 = this.ids++;
        const ack = args.pop();
        this._registerAckCallback(id2, ack);
        packet.id = id2;
      }
      const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
      const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
      if (discardPacket)
        ;
      else if (this.connected) {
        this.notifyOutgoingListeners(packet);
        this.packet(packet);
      } else {
        this.sendBuffer.push(packet);
      }
      this.flags = {};
      return this;
    }
    /**
     * @private
     */
    _registerAckCallback(id2, ack) {
      var _a;
      const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
      if (timeout === void 0) {
        this.acks[id2] = ack;
        return;
      }
      const timer = this.io.setTimeoutFn(() => {
        delete this.acks[id2];
        for (let i2 = 0; i2 < this.sendBuffer.length; i2++) {
          if (this.sendBuffer[i2].id === id2) {
            this.sendBuffer.splice(i2, 1);
          }
        }
        ack.call(this, new Error("operation has timed out"));
      }, timeout);
      this.acks[id2] = (...args) => {
        this.io.clearTimeoutFn(timer);
        ack.apply(this, [null, ...args]);
      };
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */
    emitWithAck(ev, ...args) {
      const withErr = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
      return new Promise((resolve, reject) => {
        args.push((arg1, arg2) => {
          if (withErr) {
            return arg1 ? reject(arg1) : resolve(arg2);
          } else {
            return resolve(arg1);
          }
        });
        this.emit(ev, ...args);
      });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */
    _addToQueue(args) {
      let ack;
      if (typeof args[args.length - 1] === "function") {
        ack = args.pop();
      }
      const packet = {
        id: this._queueSeq++,
        tryCount: 0,
        pending: false,
        args,
        flags: Object.assign({ fromQueue: true }, this.flags)
      };
      args.push((err, ...responseArgs) => {
        if (packet !== this._queue[0]) {
          return;
        }
        const hasError = err !== null;
        if (hasError) {
          if (packet.tryCount > this._opts.retries) {
            this._queue.shift();
            if (ack) {
              ack(err);
            }
          }
        } else {
          this._queue.shift();
          if (ack) {
            ack(null, ...responseArgs);
          }
        }
        packet.pending = false;
        return this._drainQueue();
      });
      this._queue.push(packet);
      this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */
    _drainQueue(force = false) {
      if (!this.connected || this._queue.length === 0) {
        return;
      }
      const packet = this._queue[0];
      if (packet.pending && !force) {
        return;
      }
      packet.pending = true;
      packet.tryCount++;
      this.flags = packet.flags;
      this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
      packet.nsp = this.nsp;
      this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
      if (typeof this.auth == "function") {
        this.auth((data) => {
          this._sendConnectPacket(data);
        });
      } else {
        this._sendConnectPacket(this.auth);
      }
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */
    _sendConnectPacket(data) {
      this.packet({
        type: PacketType.CONNECT,
        data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data) : data
      });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
      if (!this.connected) {
        this.emitReserved("connect_error", err);
      }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(reason, description) {
      this.connected = false;
      delete this.id;
      this.emitReserved("disconnect", reason, description);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
      const sameNamespace = packet.nsp === this.nsp;
      if (!sameNamespace)
        return;
      switch (packet.type) {
        case PacketType.CONNECT:
          if (packet.data && packet.data.sid) {
            this.onconnect(packet.data.sid, packet.data.pid);
          } else {
            this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          }
          break;
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          this.onevent(packet);
          break;
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          this.onack(packet);
          break;
        case PacketType.DISCONNECT:
          this.ondisconnect();
          break;
        case PacketType.CONNECT_ERROR:
          this.destroy();
          const err = new Error(packet.data.message);
          err.data = packet.data.data;
          this.emitReserved("connect_error", err);
          break;
      }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
      const args = packet.data || [];
      if (null != packet.id) {
        args.push(this.ack(packet.id));
      }
      if (this.connected) {
        this.emitEvent(args);
      } else {
        this.receiveBuffer.push(Object.freeze(args));
      }
    }
    emitEvent(args) {
      if (this._anyListeners && this._anyListeners.length) {
        const listeners = this._anyListeners.slice();
        for (const listener of listeners) {
          listener.apply(this, args);
        }
      }
      super.emit.apply(this, args);
      if (this._pid && args.length && typeof args[args.length - 1] === "string") {
        this._lastOffset = args[args.length - 1];
      }
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id2) {
      const self2 = this;
      let sent = false;
      return function(...args) {
        if (sent)
          return;
        sent = true;
        self2.packet({
          type: PacketType.ACK,
          id: id2,
          data: args
        });
      };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
      const ack = this.acks[packet.id];
      if ("function" === typeof ack) {
        ack.apply(this, packet.data);
        delete this.acks[packet.id];
      }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id2, pid) {
      this.id = id2;
      this.recovered = pid && this._pid === pid;
      this._pid = pid;
      this.connected = true;
      this.emitBuffered();
      this.emitReserved("connect");
      this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
      this.receiveBuffer.forEach((args) => this.emitEvent(args));
      this.receiveBuffer = [];
      this.sendBuffer.forEach((packet) => {
        this.notifyOutgoingListeners(packet);
        this.packet(packet);
      });
      this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
      this.destroy();
      this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
      if (this.subs) {
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs = void 0;
      }
      this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */
    disconnect() {
      if (this.connected) {
        this.packet({ type: PacketType.DISCONNECT });
      }
      this.destroy();
      if (this.connected) {
        this.onclose("io client disconnect");
      }
      return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */
    close() {
      return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */
    compress(compress) {
      this.flags.compress = compress;
      return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */
    get volatile() {
      this.flags.volatile = true;
      return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */
    timeout(timeout) {
      this.flags.timeout = timeout;
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */
    onAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.push(listener);
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */
    prependAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.unshift(listener);
      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */
    offAny(listener) {
      if (!this._anyListeners) {
        return this;
      }
      if (listener) {
        const listeners = this._anyListeners;
        for (let i2 = 0; i2 < listeners.length; i2++) {
          if (listener === listeners[i2]) {
            listeners.splice(i2, 1);
            return this;
          }
        }
      } else {
        this._anyListeners = [];
      }
      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAny() {
      return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    onAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.push(listener);
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    prependAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.unshift(listener);
      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */
    offAnyOutgoing(listener) {
      if (!this._anyOutgoingListeners) {
        return this;
      }
      if (listener) {
        const listeners = this._anyOutgoingListeners;
        for (let i2 = 0; i2 < listeners.length; i2++) {
          if (listener === listeners[i2]) {
            listeners.splice(i2, 1);
            return this;
          }
        }
      } else {
        this._anyOutgoingListeners = [];
      }
      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(packet) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        const listeners = this._anyOutgoingListeners.slice();
        for (const listener of listeners) {
          listener.apply(this, packet.data);
        }
      }
    }
  };
  function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 1e4;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
  }
  Backoff.prototype.duration = function() {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var rand = Math.random();
      var deviation = Math.floor(rand * this.jitter * ms);
      ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
  };
  Backoff.prototype.reset = function() {
    this.attempts = 0;
  };
  Backoff.prototype.setMin = function(min) {
    this.ms = min;
  };
  Backoff.prototype.setMax = function(max) {
    this.max = max;
  };
  Backoff.prototype.setJitter = function(jitter) {
    this.jitter = jitter;
  };
  class Manager extends Emitter {
    constructor(uri, opts) {
      var _a;
      super();
      this.nsps = {};
      this.subs = [];
      if (uri && "object" === typeof uri) {
        opts = uri;
        uri = void 0;
      }
      opts = opts || {};
      opts.path = opts.path || "/socket.io";
      this.opts = opts;
      installTimerFunctions(this, opts);
      this.reconnection(opts.reconnection !== false);
      this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
      this.reconnectionDelay(opts.reconnectionDelay || 1e3);
      this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
      this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
      this.backoff = new Backoff({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
      });
      this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
      this._readyState = "closed";
      this.uri = uri;
      const _parser = opts.parser || parser;
      this.encoder = new _parser.Encoder();
      this.decoder = new _parser.Decoder();
      this._autoConnect = opts.autoConnect !== false;
      if (this._autoConnect)
        this.open();
    }
    reconnection(v2) {
      if (!arguments.length)
        return this._reconnection;
      this._reconnection = !!v2;
      return this;
    }
    reconnectionAttempts(v2) {
      if (v2 === void 0)
        return this._reconnectionAttempts;
      this._reconnectionAttempts = v2;
      return this;
    }
    reconnectionDelay(v2) {
      var _a;
      if (v2 === void 0)
        return this._reconnectionDelay;
      this._reconnectionDelay = v2;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v2);
      return this;
    }
    randomizationFactor(v2) {
      var _a;
      if (v2 === void 0)
        return this._randomizationFactor;
      this._randomizationFactor = v2;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v2);
      return this;
    }
    reconnectionDelayMax(v2) {
      var _a;
      if (v2 === void 0)
        return this._reconnectionDelayMax;
      this._reconnectionDelayMax = v2;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v2);
      return this;
    }
    timeout(v2) {
      if (!arguments.length)
        return this._timeout;
      this._timeout = v2;
      return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
      if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
        this.reconnect();
      }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
      if (~this._readyState.indexOf("open"))
        return this;
      this.engine = new Socket$2(this.uri, this.opts);
      const socket = this.engine;
      const self2 = this;
      this._readyState = "opening";
      this.skipReconnect = false;
      const openSubDestroy = on(socket, "open", function() {
        self2.onopen();
        fn && fn();
      });
      const onError = (err) => {
        this.cleanup();
        this._readyState = "closed";
        this.emitReserved("error", err);
        if (fn) {
          fn(err);
        } else {
          this.maybeReconnectOnOpen();
        }
      };
      const errorSub = on(socket, "error", onError);
      if (false !== this._timeout) {
        const timeout = this._timeout;
        const timer = this.setTimeoutFn(() => {
          openSubDestroy();
          onError(new Error("timeout"));
          socket.close();
        }, timeout);
        if (this.opts.autoUnref) {
          timer.unref();
        }
        this.subs.push(() => {
          this.clearTimeoutFn(timer);
        });
      }
      this.subs.push(openSubDestroy);
      this.subs.push(errorSub);
      return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
      return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
      this.cleanup();
      this._readyState = "open";
      this.emitReserved("open");
      const socket = this.engine;
      this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
      this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
      try {
        this.decoder.add(data);
      } catch (e2) {
        this.onclose("parse error", e2);
      }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
      nextTick(() => {
        this.emitReserved("packet", packet);
      }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
      this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
      let socket = this.nsps[nsp];
      if (!socket) {
        socket = new Socket$1(this, nsp, opts);
        this.nsps[nsp] = socket;
      } else if (this._autoConnect && !socket.active) {
        socket.connect();
      }
      return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
      const nsps = Object.keys(this.nsps);
      for (const nsp of nsps) {
        const socket2 = this.nsps[nsp];
        if (socket2.active) {
          return;
        }
      }
      this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
      const encodedPackets = this.encoder.encode(packet);
      for (let i2 = 0; i2 < encodedPackets.length; i2++) {
        this.engine.write(encodedPackets[i2], packet.options);
      }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs.length = 0;
      this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
      this.skipReconnect = true;
      this._reconnecting = false;
      this.onclose("forced close");
      if (this.engine)
        this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
      return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */
    onclose(reason, description) {
      this.cleanup();
      this.backoff.reset();
      this._readyState = "closed";
      this.emitReserved("close", reason, description);
      if (this._reconnection && !this.skipReconnect) {
        this.reconnect();
      }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
      if (this._reconnecting || this.skipReconnect)
        return this;
      const self2 = this;
      if (this.backoff.attempts >= this._reconnectionAttempts) {
        this.backoff.reset();
        this.emitReserved("reconnect_failed");
        this._reconnecting = false;
      } else {
        const delay = this.backoff.duration();
        this._reconnecting = true;
        const timer = this.setTimeoutFn(() => {
          if (self2.skipReconnect)
            return;
          this.emitReserved("reconnect_attempt", self2.backoff.attempts);
          if (self2.skipReconnect)
            return;
          self2.open((err) => {
            if (err) {
              self2._reconnecting = false;
              self2.reconnect();
              this.emitReserved("reconnect_error", err);
            } else {
              self2.onreconnect();
            }
          });
        }, delay);
        if (this.opts.autoUnref) {
          timer.unref();
        }
        this.subs.push(() => {
          this.clearTimeoutFn(timer);
        });
      }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
      const attempt = this.backoff.attempts;
      this._reconnecting = false;
      this.backoff.reset();
      this.emitReserved("reconnect", attempt);
    }
  }
  const cache = {};
  function lookup(uri, opts) {
    if (typeof uri === "object") {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    const parsed = url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id2 = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id2] && path in cache[id2]["nsps"];
    const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    let io;
    if (newConnection) {
      io = new Manager(source, opts);
    } else {
      if (!cache[id2]) {
        cache[id2] = new Manager(source, opts);
      }
      io = cache[id2];
    }
    if (parsed.query && !opts.query) {
      opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
  }
  Object.assign(lookup, {
    Manager,
    Socket: Socket$1,
    io: lookup,
    connect: lookup
  });
  var warn$2 = {};
  Object.defineProperty(warn$2, "__esModule", {
    value: true
  });
  var warn$1 = function warn2(s2) {
    console.warn("[react-gtm]", s2);
  };
  warn$2.default = warn$1;
  var _warn = warn$2;
  var _warn2 = _interopRequireDefault$2(_warn);
  function _interopRequireDefault$2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var Snippets = {
    tags: function tags(_ref) {
      var id2 = _ref.id, events = _ref.events, dataLayer = _ref.dataLayer, dataLayerName = _ref.dataLayerName, preview = _ref.preview, auth = _ref.auth;
      var gtm_auth = "&gtm_auth=" + auth;
      var gtm_preview = "&gtm_preview=" + preview;
      if (!id2)
        (0, _warn2.default)("GTM Id is required");
      var iframe = '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + id2 + gtm_auth + gtm_preview + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>';
      var script = "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(events).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + gtm_auth + gtm_preview + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + dataLayerName + "','" + id2 + "');";
      var dataLayerVar = this.dataLayer(dataLayer, dataLayerName);
      return {
        iframe,
        script,
        dataLayerVar
      };
    },
    dataLayer: function dataLayer(_dataLayer, dataLayerName) {
      return "\n      window." + dataLayerName + " = window." + dataLayerName + " || [];\n      window." + dataLayerName + ".push(" + JSON.stringify(_dataLayer) + ")";
    }
  };
  var Snippets_1 = Snippets;
  var _Snippets = Snippets_1;
  var _Snippets2 = _interopRequireDefault$1(_Snippets);
  function _interopRequireDefault$1(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var TagManager$1 = {
    dataScript: function dataScript(dataLayer) {
      var script = document.createElement("script");
      script.innerHTML = dataLayer;
      return script;
    },
    gtm: function gtm(args) {
      var snippets = _Snippets2.default.tags(args);
      var noScript = function noScript2() {
        var noscript = document.createElement("noscript");
        noscript.innerHTML = snippets.iframe;
        return noscript;
      };
      var script = function script2() {
        var script3 = document.createElement("script");
        script3.innerHTML = snippets.script;
        return script3;
      };
      var dataScript = this.dataScript(snippets.dataLayerVar);
      return {
        noScript,
        script,
        dataScript
      };
    },
    initialize: function initialize(_ref) {
      var gtmId = _ref.gtmId, _ref$events = _ref.events, events = _ref$events === void 0 ? {} : _ref$events, dataLayer = _ref.dataLayer, _ref$dataLayerName = _ref.dataLayerName, dataLayerName = _ref$dataLayerName === void 0 ? "dataLayer" : _ref$dataLayerName, _ref$auth = _ref.auth, auth = _ref$auth === void 0 ? "" : _ref$auth, _ref$preview = _ref.preview, preview = _ref$preview === void 0 ? "" : _ref$preview;
      var gtm = this.gtm({
        id: gtmId,
        events,
        dataLayer: dataLayer || void 0,
        dataLayerName,
        auth,
        preview
      });
      if (dataLayer)
        document.head.appendChild(gtm.dataScript);
      document.head.insertBefore(gtm.script(), document.head.childNodes[0]);
      document.body.insertBefore(gtm.noScript(), document.body.childNodes[0]);
    },
    dataLayer: function dataLayer(_ref2) {
      var _dataLayer = _ref2.dataLayer, _ref2$dataLayerName = _ref2.dataLayerName, dataLayerName = _ref2$dataLayerName === void 0 ? "dataLayer" : _ref2$dataLayerName;
      if (window[dataLayerName])
        return window[dataLayerName].push(_dataLayer);
      var snippets = _Snippets2.default.dataLayer(_dataLayer, dataLayerName);
      var dataScript = this.dataScript(snippets);
      document.head.insertBefore(dataScript, document.head.childNodes[0]);
    }
  };
  var TagManager_1 = TagManager$1;
  var _TagManager = TagManager_1;
  var _TagManager2 = _interopRequireDefault(_TagManager);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var dist = _TagManager2.default;
  const TagManager = /* @__PURE__ */ getDefaultExportFromCjs(dist);
  const createStoreImpl = (createState) => {
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace2) => {
      const nextState = typeof partial === "function" ? partial(state) : partial;
      if (!Object.is(nextState, state)) {
        const previousState = state;
        state = (replace2 != null ? replace2 : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
        listeners.forEach((listener) => listener(state, previousState));
      }
    };
    const getState = () => state;
    const subscribe = (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    };
    const destroy = () => {
      if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } ? "production" : void 0) !== "production") {
        console.warn(
          "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
        );
      }
      listeners.clear();
    };
    const api = { setState, getState, subscribe, destroy };
    state = createState(setState, getState, api);
    return api;
  };
  const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
  var withSelector = { exports: {} };
  var withSelector_production_min = {};
  var shim = { exports: {} };
  var useSyncExternalStoreShim_production_min = {};
  /**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var e$1 = reactExports;
  function h$3(a2, b2) {
    return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
  }
  var k = "function" === typeof Object.is ? Object.is : h$3, l$1 = e$1.useState, m$1 = e$1.useEffect, n$3 = e$1.useLayoutEffect, p$2 = e$1.useDebugValue;
  function q$1(a2, b2) {
    var d2 = b2(), f2 = l$1({ inst: { value: d2, getSnapshot: b2 } }), c2 = f2[0].inst, g2 = f2[1];
    n$3(function() {
      c2.value = d2;
      c2.getSnapshot = b2;
      r$1(c2) && g2({ inst: c2 });
    }, [a2, d2, b2]);
    m$1(function() {
      r$1(c2) && g2({ inst: c2 });
      return a2(function() {
        r$1(c2) && g2({ inst: c2 });
      });
    }, [a2]);
    p$2(d2);
    return d2;
  }
  function r$1(a2) {
    var b2 = a2.getSnapshot;
    a2 = a2.value;
    try {
      var d2 = b2();
      return !k(a2, d2);
    } catch (f2) {
      return true;
    }
  }
  function t$2(a2, b2) {
    return b2();
  }
  var u$3 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$2 : q$1;
  useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e$1.useSyncExternalStore ? e$1.useSyncExternalStore : u$3;
  {
    shim.exports = useSyncExternalStoreShim_production_min;
  }
  var shimExports = shim.exports;
  /**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var h$2 = reactExports, n$2 = shimExports;
  function p$1(a2, b2) {
    return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
  }
  var q = "function" === typeof Object.is ? Object.is : p$1, r = n$2.useSyncExternalStore, t$1 = h$2.useRef, u$2 = h$2.useEffect, v$1 = h$2.useMemo, w$1 = h$2.useDebugValue;
  withSelector_production_min.useSyncExternalStoreWithSelector = function(a2, b2, e2, l2, g2) {
    var c2 = t$1(null);
    if (null === c2.current) {
      var f2 = { hasValue: false, value: null };
      c2.current = f2;
    } else
      f2 = c2.current;
    c2 = v$1(function() {
      function a3(a4) {
        if (!c3) {
          c3 = true;
          d3 = a4;
          a4 = l2(a4);
          if (void 0 !== g2 && f2.hasValue) {
            var b3 = f2.value;
            if (g2(b3, a4))
              return k2 = b3;
          }
          return k2 = a4;
        }
        b3 = k2;
        if (q(d3, a4))
          return b3;
        var e3 = l2(a4);
        if (void 0 !== g2 && g2(b3, e3))
          return b3;
        d3 = a4;
        return k2 = e3;
      }
      var c3 = false, d3, k2, m2 = void 0 === e2 ? null : e2;
      return [function() {
        return a3(b2());
      }, null === m2 ? void 0 : function() {
        return a3(m2());
      }];
    }, [b2, e2, l2, g2]);
    var d2 = r(a2, c2[0], c2[1]);
    u$2(function() {
      f2.hasValue = true;
      f2.value = d2;
    }, [d2]);
    w$1(d2);
    return d2;
  };
  {
    withSelector.exports = withSelector_production_min;
  }
  var withSelectorExports = withSelector.exports;
  const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(withSelectorExports);
  const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
  let didWarnAboutEqualityFn = false;
  function useStore$1(api, selector = api.getState, equalityFn) {
    if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } ? "production" : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
      console.warn(
        "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
      );
      didWarnAboutEqualityFn = true;
    }
    const slice = useSyncExternalStoreWithSelector(
      api.subscribe,
      api.getState,
      api.getServerState || api.getState,
      selector,
      equalityFn
    );
    reactExports.useDebugValue(slice);
    return slice;
  }
  const createImpl = (createState) => {
    if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } ? "production" : void 0) !== "production" && typeof createState !== "function") {
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
      );
    }
    const api = typeof createState === "function" ? createStore(createState) : createState;
    const useBoundStore = (selector, equalityFn) => useStore$1(api, selector, equalityFn);
    Object.assign(useBoundStore, api);
    return useBoundStore;
  };
  const create = (createState) => createState ? createImpl(createState) : createImpl;
  var textarea;
  function decodeEntity(name2) {
    textarea = textarea || document.createElement("textarea");
    textarea.innerHTML = "&" + name2 + ";";
    return textarea.value;
  }
  var hasOwn = Object.prototype.hasOwnProperty;
  function has(object, key) {
    return object ? hasOwn.call(object, key) : false;
  }
  function assign(obj) {
    var sources = [].slice.call(arguments, 1);
    sources.forEach(function(source) {
      if (!source) {
        return;
      }
      if (typeof source !== "object") {
        throw new TypeError(source + "must be object");
      }
      Object.keys(source).forEach(function(key) {
        obj[key] = source[key];
      });
    });
    return obj;
  }
  var UNESCAPE_MD_RE = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
  function unescapeMd(str) {
    if (str.indexOf("\\") < 0) {
      return str;
    }
    return str.replace(UNESCAPE_MD_RE, "$1");
  }
  function isValidEntityCode(c2) {
    if (c2 >= 55296 && c2 <= 57343) {
      return false;
    }
    if (c2 >= 64976 && c2 <= 65007) {
      return false;
    }
    if ((c2 & 65535) === 65535 || (c2 & 65535) === 65534) {
      return false;
    }
    if (c2 >= 0 && c2 <= 8) {
      return false;
    }
    if (c2 === 11) {
      return false;
    }
    if (c2 >= 14 && c2 <= 31) {
      return false;
    }
    if (c2 >= 127 && c2 <= 159) {
      return false;
    }
    if (c2 > 1114111) {
      return false;
    }
    return true;
  }
  function fromCodePoint(c2) {
    if (c2 > 65535) {
      c2 -= 65536;
      var surrogate1 = 55296 + (c2 >> 10), surrogate2 = 56320 + (c2 & 1023);
      return String.fromCharCode(surrogate1, surrogate2);
    }
    return String.fromCharCode(c2);
  }
  var NAMED_ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
  var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
  function replaceEntityPattern(match, name2) {
    var code2 = 0;
    var decoded = decodeEntity(name2);
    if (name2 !== decoded) {
      return decoded;
    } else if (name2.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name2)) {
      code2 = name2[1].toLowerCase() === "x" ? parseInt(name2.slice(2), 16) : parseInt(name2.slice(1), 10);
      if (isValidEntityCode(code2)) {
        return fromCodePoint(code2);
      }
    }
    return match;
  }
  function replaceEntities(str) {
    if (str.indexOf("&") < 0) {
      return str;
    }
    return str.replace(NAMED_ENTITY_RE, replaceEntityPattern);
  }
  var HTML_ESCAPE_TEST_RE = /[&<>"]/;
  var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
  var HTML_REPLACEMENTS = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function replaceUnsafeChar(ch2) {
    return HTML_REPLACEMENTS[ch2];
  }
  function escapeHtml(str) {
    if (HTML_ESCAPE_TEST_RE.test(str)) {
      return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
    }
    return str;
  }
  var rules = {};
  rules.blockquote_open = function() {
    return "<blockquote>\n";
  };
  rules.blockquote_close = function(tokens, idx) {
    return "</blockquote>" + getBreak(tokens, idx);
  };
  rules.code = function(tokens, idx) {
    if (tokens[idx].block) {
      return "<pre><code>" + escapeHtml(tokens[idx].content) + "</code></pre>" + getBreak(tokens, idx);
    }
    return "<code>" + escapeHtml(tokens[idx].content) + "</code>";
  };
  rules.fence = function(tokens, idx, options, env, instance2) {
    var token = tokens[idx];
    var langClass = "";
    var langPrefix = options.langPrefix;
    var langName = "", fences2, fenceName;
    var highlighted;
    if (token.params) {
      fences2 = token.params.split(/\s+/g);
      fenceName = fences2.join(" ");
      if (has(instance2.rules.fence_custom, fences2[0])) {
        return instance2.rules.fence_custom[fences2[0]](tokens, idx, options, env, instance2);
      }
      langName = escapeHtml(replaceEntities(unescapeMd(fenceName)));
      langClass = ' class="' + langPrefix + langName + '"';
    }
    if (options.highlight) {
      highlighted = options.highlight.apply(options.highlight, [token.content].concat(fences2)) || escapeHtml(token.content);
    } else {
      highlighted = escapeHtml(token.content);
    }
    return "<pre><code" + langClass + ">" + highlighted + "</code></pre>" + getBreak(tokens, idx);
  };
  rules.fence_custom = {};
  rules.heading_open = function(tokens, idx) {
    return "<h" + tokens[idx].hLevel + ">";
  };
  rules.heading_close = function(tokens, idx) {
    return "</h" + tokens[idx].hLevel + ">\n";
  };
  rules.hr = function(tokens, idx, options) {
    return (options.xhtmlOut ? "<hr />" : "<hr>") + getBreak(tokens, idx);
  };
  rules.bullet_list_open = function() {
    return "<ul>\n";
  };
  rules.bullet_list_close = function(tokens, idx) {
    return "</ul>" + getBreak(tokens, idx);
  };
  rules.list_item_open = function() {
    return "<li>";
  };
  rules.list_item_close = function() {
    return "</li>\n";
  };
  rules.ordered_list_open = function(tokens, idx) {
    var token = tokens[idx];
    var order = token.order > 1 ? ' start="' + token.order + '"' : "";
    return "<ol" + order + ">\n";
  };
  rules.ordered_list_close = function(tokens, idx) {
    return "</ol>" + getBreak(tokens, idx);
  };
  rules.paragraph_open = function(tokens, idx) {
    return tokens[idx].tight ? "" : "<p>";
  };
  rules.paragraph_close = function(tokens, idx) {
    var addBreak = !(tokens[idx].tight && idx && tokens[idx - 1].type === "inline" && !tokens[idx - 1].content);
    return (tokens[idx].tight ? "" : "</p>") + (addBreak ? getBreak(tokens, idx) : "");
  };
  rules.link_open = function(tokens, idx, options) {
    var title = tokens[idx].title ? ' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"' : "";
    var target = options.linkTarget ? ' target="' + options.linkTarget + '"' : "";
    return '<a href="' + escapeHtml(tokens[idx].href) + '"' + title + target + ">";
  };
  rules.link_close = function() {
    return "</a>";
  };
  rules.image = function(tokens, idx, options) {
    var src = ' src="' + escapeHtml(tokens[idx].src) + '"';
    var title = tokens[idx].title ? ' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"' : "";
    var alt = ' alt="' + (tokens[idx].alt ? escapeHtml(replaceEntities(unescapeMd(tokens[idx].alt))) : "") + '"';
    var suffix = options.xhtmlOut ? " /" : "";
    return "<img" + src + alt + title + suffix + ">";
  };
  rules.table_open = function() {
    return "<table>\n";
  };
  rules.table_close = function() {
    return "</table>\n";
  };
  rules.thead_open = function() {
    return "<thead>\n";
  };
  rules.thead_close = function() {
    return "</thead>\n";
  };
  rules.tbody_open = function() {
    return "<tbody>\n";
  };
  rules.tbody_close = function() {
    return "</tbody>\n";
  };
  rules.tr_open = function() {
    return "<tr>";
  };
  rules.tr_close = function() {
    return "</tr>\n";
  };
  rules.th_open = function(tokens, idx) {
    var token = tokens[idx];
    return "<th" + (token.align ? ' style="text-align:' + token.align + '"' : "") + ">";
  };
  rules.th_close = function() {
    return "</th>";
  };
  rules.td_open = function(tokens, idx) {
    var token = tokens[idx];
    return "<td" + (token.align ? ' style="text-align:' + token.align + '"' : "") + ">";
  };
  rules.td_close = function() {
    return "</td>";
  };
  rules.strong_open = function() {
    return "<strong>";
  };
  rules.strong_close = function() {
    return "</strong>";
  };
  rules.em_open = function() {
    return "<em>";
  };
  rules.em_close = function() {
    return "</em>";
  };
  rules.del_open = function() {
    return "<del>";
  };
  rules.del_close = function() {
    return "</del>";
  };
  rules.ins_open = function() {
    return "<ins>";
  };
  rules.ins_close = function() {
    return "</ins>";
  };
  rules.mark_open = function() {
    return "<mark>";
  };
  rules.mark_close = function() {
    return "</mark>";
  };
  rules.sub = function(tokens, idx) {
    return "<sub>" + escapeHtml(tokens[idx].content) + "</sub>";
  };
  rules.sup = function(tokens, idx) {
    return "<sup>" + escapeHtml(tokens[idx].content) + "</sup>";
  };
  rules.hardbreak = function(tokens, idx, options) {
    return options.xhtmlOut ? "<br />\n" : "<br>\n";
  };
  rules.softbreak = function(tokens, idx, options) {
    return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
  };
  rules.text = function(tokens, idx) {
    return escapeHtml(tokens[idx].content);
  };
  rules.htmlblock = function(tokens, idx) {
    return tokens[idx].content;
  };
  rules.htmltag = function(tokens, idx) {
    return tokens[idx].content;
  };
  rules.abbr_open = function(tokens, idx) {
    return '<abbr title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '">';
  };
  rules.abbr_close = function() {
    return "</abbr>";
  };
  rules.footnote_ref = function(tokens, idx) {
    var n2 = Number(tokens[idx].id + 1).toString();
    var id2 = "fnref" + n2;
    if (tokens[idx].subId > 0) {
      id2 += ":" + tokens[idx].subId;
    }
    return '<sup class="footnote-ref"><a href="#fn' + n2 + '" id="' + id2 + '">[' + n2 + "]</a></sup>";
  };
  rules.footnote_block_open = function(tokens, idx, options) {
    var hr2 = options.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n';
    return hr2 + '<section class="footnotes">\n<ol class="footnotes-list">\n';
  };
  rules.footnote_block_close = function() {
    return "</ol>\n</section>\n";
  };
  rules.footnote_open = function(tokens, idx) {
    var id2 = Number(tokens[idx].id + 1).toString();
    return '<li id="fn' + id2 + '"  class="footnote-item">';
  };
  rules.footnote_close = function() {
    return "</li>\n";
  };
  rules.footnote_anchor = function(tokens, idx) {
    var n2 = Number(tokens[idx].id + 1).toString();
    var id2 = "fnref" + n2;
    if (tokens[idx].subId > 0) {
      id2 += ":" + tokens[idx].subId;
    }
    return ' <a href="#' + id2 + '" class="footnote-backref">↩</a>';
  };
  rules.dl_open = function() {
    return "<dl>\n";
  };
  rules.dt_open = function() {
    return "<dt>";
  };
  rules.dd_open = function() {
    return "<dd>";
  };
  rules.dl_close = function() {
    return "</dl>\n";
  };
  rules.dt_close = function() {
    return "</dt>\n";
  };
  rules.dd_close = function() {
    return "</dd>\n";
  };
  function nextToken(tokens, idx) {
    if (++idx >= tokens.length - 2) {
      return idx;
    }
    if (tokens[idx].type === "paragraph_open" && tokens[idx].tight && (tokens[idx + 1].type === "inline" && tokens[idx + 1].content.length === 0) && (tokens[idx + 2].type === "paragraph_close" && tokens[idx + 2].tight)) {
      return nextToken(tokens, idx + 2);
    }
    return idx;
  }
  var getBreak = rules.getBreak = function getBreak2(tokens, idx) {
    idx = nextToken(tokens, idx);
    if (idx < tokens.length && tokens[idx].type === "list_item_close") {
      return "";
    }
    return "\n";
  };
  function Renderer() {
    this.rules = assign({}, rules);
    this.getBreak = rules.getBreak;
  }
  Renderer.prototype.renderInline = function(tokens, options, env) {
    var _rules2 = this.rules;
    var len = tokens.length, i2 = 0;
    var result = "";
    while (len--) {
      result += _rules2[tokens[i2].type](tokens, i2++, options, env, this);
    }
    return result;
  };
  Renderer.prototype.render = function(tokens, options, env) {
    var _rules2 = this.rules;
    var len = tokens.length, i2 = -1;
    var result = "";
    while (++i2 < len) {
      if (tokens[i2].type === "inline") {
        result += this.renderInline(tokens[i2].children, options, env);
      } else {
        result += _rules2[tokens[i2].type](tokens, i2, options, env, this);
      }
    }
    return result;
  };
  function Ruler() {
    this.__rules__ = [];
    this.__cache__ = null;
  }
  Ruler.prototype.__find__ = function(name2) {
    var len = this.__rules__.length;
    var i2 = -1;
    while (len--) {
      if (this.__rules__[++i2].name === name2) {
        return i2;
      }
    }
    return -1;
  };
  Ruler.prototype.__compile__ = function() {
    var self2 = this;
    var chains = [""];
    self2.__rules__.forEach(function(rule) {
      if (!rule.enabled) {
        return;
      }
      rule.alt.forEach(function(altName) {
        if (chains.indexOf(altName) < 0) {
          chains.push(altName);
        }
      });
    });
    self2.__cache__ = {};
    chains.forEach(function(chain) {
      self2.__cache__[chain] = [];
      self2.__rules__.forEach(function(rule) {
        if (!rule.enabled) {
          return;
        }
        if (chain && rule.alt.indexOf(chain) < 0) {
          return;
        }
        self2.__cache__[chain].push(rule.fn);
      });
    });
  };
  Ruler.prototype.at = function(name2, fn, options) {
    var idx = this.__find__(name2);
    var opt = options || {};
    if (idx === -1) {
      throw new Error("Parser rule not found: " + name2);
    }
    this.__rules__[idx].fn = fn;
    this.__rules__[idx].alt = opt.alt || [];
    this.__cache__ = null;
  };
  Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
    var idx = this.__find__(beforeName);
    var opt = options || {};
    if (idx === -1) {
      throw new Error("Parser rule not found: " + beforeName);
    }
    this.__rules__.splice(idx, 0, {
      name: ruleName,
      enabled: true,
      fn,
      alt: opt.alt || []
    });
    this.__cache__ = null;
  };
  Ruler.prototype.after = function(afterName, ruleName, fn, options) {
    var idx = this.__find__(afterName);
    var opt = options || {};
    if (idx === -1) {
      throw new Error("Parser rule not found: " + afterName);
    }
    this.__rules__.splice(idx + 1, 0, {
      name: ruleName,
      enabled: true,
      fn,
      alt: opt.alt || []
    });
    this.__cache__ = null;
  };
  Ruler.prototype.push = function(ruleName, fn, options) {
    var opt = options || {};
    this.__rules__.push({
      name: ruleName,
      enabled: true,
      fn,
      alt: opt.alt || []
    });
    this.__cache__ = null;
  };
  Ruler.prototype.enable = function(list2, strict) {
    list2 = !Array.isArray(list2) ? [list2] : list2;
    if (strict) {
      this.__rules__.forEach(function(rule) {
        rule.enabled = false;
      });
    }
    list2.forEach(function(name2) {
      var idx = this.__find__(name2);
      if (idx < 0) {
        throw new Error("Rules manager: invalid rule name " + name2);
      }
      this.__rules__[idx].enabled = true;
    }, this);
    this.__cache__ = null;
  };
  Ruler.prototype.disable = function(list2) {
    list2 = !Array.isArray(list2) ? [list2] : list2;
    list2.forEach(function(name2) {
      var idx = this.__find__(name2);
      if (idx < 0) {
        throw new Error("Rules manager: invalid rule name " + name2);
      }
      this.__rules__[idx].enabled = false;
    }, this);
    this.__cache__ = null;
  };
  Ruler.prototype.getRules = function(chainName) {
    if (this.__cache__ === null) {
      this.__compile__();
    }
    return this.__cache__[chainName] || [];
  };
  function block(state) {
    if (state.inlineMode) {
      state.tokens.push({
        type: "inline",
        content: state.src.replace(/\n/g, " ").trim(),
        level: 0,
        lines: [0, 1],
        children: []
      });
    } else {
      state.block.parse(state.src, state.options, state.env, state.tokens);
    }
  }
  function StateInline(src, parserInline, options, env, outTokens) {
    this.src = src;
    this.env = env;
    this.options = options;
    this.parser = parserInline;
    this.tokens = outTokens;
    this.pos = 0;
    this.posMax = this.src.length;
    this.level = 0;
    this.pending = "";
    this.pendingLevel = 0;
    this.cache = [];
    this.isInLabel = false;
    this.linkLevel = 0;
    this.linkContent = "";
    this.labelUnmatchedScopes = 0;
  }
  StateInline.prototype.pushPending = function() {
    this.tokens.push({
      type: "text",
      content: this.pending,
      level: this.pendingLevel
    });
    this.pending = "";
  };
  StateInline.prototype.push = function(token) {
    if (this.pending) {
      this.pushPending();
    }
    this.tokens.push(token);
    this.pendingLevel = this.level;
  };
  StateInline.prototype.cacheSet = function(key, val) {
    for (var i2 = this.cache.length; i2 <= key; i2++) {
      this.cache.push(0);
    }
    this.cache[key] = val;
  };
  StateInline.prototype.cacheGet = function(key) {
    return key < this.cache.length ? this.cache[key] : 0;
  };
  function parseLinkLabel(state, start) {
    var level, found, marker, labelEnd = -1, max = state.posMax, oldPos = state.pos, oldFlag = state.isInLabel;
    if (state.isInLabel) {
      return -1;
    }
    if (state.labelUnmatchedScopes) {
      state.labelUnmatchedScopes--;
      return -1;
    }
    state.pos = start + 1;
    state.isInLabel = true;
    level = 1;
    while (state.pos < max) {
      marker = state.src.charCodeAt(state.pos);
      if (marker === 91) {
        level++;
      } else if (marker === 93) {
        level--;
        if (level === 0) {
          found = true;
          break;
        }
      }
      state.parser.skipToken(state);
    }
    if (found) {
      labelEnd = state.pos;
      state.labelUnmatchedScopes = 0;
    } else {
      state.labelUnmatchedScopes = level - 1;
    }
    state.pos = oldPos;
    state.isInLabel = oldFlag;
    return labelEnd;
  }
  function parseAbbr(str, parserInline, options, env) {
    var state, labelEnd, pos, max, label, title;
    if (str.charCodeAt(0) !== 42) {
      return -1;
    }
    if (str.charCodeAt(1) !== 91) {
      return -1;
    }
    if (str.indexOf("]:") === -1) {
      return -1;
    }
    state = new StateInline(str, parserInline, options, env, []);
    labelEnd = parseLinkLabel(state, 1);
    if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
      return -1;
    }
    max = state.posMax;
    for (pos = labelEnd + 2; pos < max; pos++) {
      if (state.src.charCodeAt(pos) === 10) {
        break;
      }
    }
    label = str.slice(2, labelEnd);
    title = str.slice(labelEnd + 2, pos).trim();
    if (title.length === 0) {
      return -1;
    }
    if (!env.abbreviations) {
      env.abbreviations = {};
    }
    if (typeof env.abbreviations[":" + label] === "undefined") {
      env.abbreviations[":" + label] = title;
    }
    return pos;
  }
  function abbr(state) {
    var tokens = state.tokens, i2, l2, content, pos;
    if (state.inlineMode) {
      return;
    }
    for (i2 = 1, l2 = tokens.length - 1; i2 < l2; i2++) {
      if (tokens[i2 - 1].type === "paragraph_open" && tokens[i2].type === "inline" && tokens[i2 + 1].type === "paragraph_close") {
        content = tokens[i2].content;
        while (content.length) {
          pos = parseAbbr(content, state.inline, state.options, state.env);
          if (pos < 0) {
            break;
          }
          content = content.slice(pos).trim();
        }
        tokens[i2].content = content;
        if (!content.length) {
          tokens[i2 - 1].tight = true;
          tokens[i2 + 1].tight = true;
        }
      }
    }
  }
  function normalizeLink(url2) {
    var normalized = replaceEntities(url2);
    try {
      normalized = decodeURI(normalized);
    } catch (err) {
    }
    return encodeURI(normalized);
  }
  function parseLinkDestination(state, pos) {
    var code2, level, link, start = pos, max = state.posMax;
    if (state.src.charCodeAt(pos) === 60) {
      pos++;
      while (pos < max) {
        code2 = state.src.charCodeAt(pos);
        if (code2 === 10) {
          return false;
        }
        if (code2 === 62) {
          link = normalizeLink(unescapeMd(state.src.slice(start + 1, pos)));
          if (!state.parser.validateLink(link)) {
            return false;
          }
          state.pos = pos + 1;
          state.linkContent = link;
          return true;
        }
        if (code2 === 92 && pos + 1 < max) {
          pos += 2;
          continue;
        }
        pos++;
      }
      return false;
    }
    level = 0;
    while (pos < max) {
      code2 = state.src.charCodeAt(pos);
      if (code2 === 32) {
        break;
      }
      if (code2 < 32 || code2 === 127) {
        break;
      }
      if (code2 === 92 && pos + 1 < max) {
        pos += 2;
        continue;
      }
      if (code2 === 40) {
        level++;
        if (level > 1) {
          break;
        }
      }
      if (code2 === 41) {
        level--;
        if (level < 0) {
          break;
        }
      }
      pos++;
    }
    if (start === pos) {
      return false;
    }
    link = unescapeMd(state.src.slice(start, pos));
    if (!state.parser.validateLink(link)) {
      return false;
    }
    state.linkContent = link;
    state.pos = pos;
    return true;
  }
  function parseLinkTitle(state, pos) {
    var code2, start = pos, max = state.posMax, marker = state.src.charCodeAt(pos);
    if (marker !== 34 && marker !== 39 && marker !== 40) {
      return false;
    }
    pos++;
    if (marker === 40) {
      marker = 41;
    }
    while (pos < max) {
      code2 = state.src.charCodeAt(pos);
      if (code2 === marker) {
        state.pos = pos + 1;
        state.linkContent = unescapeMd(state.src.slice(start + 1, pos));
        return true;
      }
      if (code2 === 92 && pos + 1 < max) {
        pos += 2;
        continue;
      }
      pos++;
    }
    return false;
  }
  function normalizeReference(str) {
    return str.trim().replace(/\s+/g, " ").toUpperCase();
  }
  function parseReference(str, parser2, options, env) {
    var state, labelEnd, pos, max, code2, start, href, title, label;
    if (str.charCodeAt(0) !== 91) {
      return -1;
    }
    if (str.indexOf("]:") === -1) {
      return -1;
    }
    state = new StateInline(str, parser2, options, env, []);
    labelEnd = parseLinkLabel(state, 0);
    if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
      return -1;
    }
    max = state.posMax;
    for (pos = labelEnd + 2; pos < max; pos++) {
      code2 = state.src.charCodeAt(pos);
      if (code2 !== 32 && code2 !== 10) {
        break;
      }
    }
    if (!parseLinkDestination(state, pos)) {
      return -1;
    }
    href = state.linkContent;
    pos = state.pos;
    start = pos;
    for (pos = pos + 1; pos < max; pos++) {
      code2 = state.src.charCodeAt(pos);
      if (code2 !== 32 && code2 !== 10) {
        break;
      }
    }
    if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
      title = state.linkContent;
      pos = state.pos;
    } else {
      title = "";
      pos = start;
    }
    while (pos < max && state.src.charCodeAt(pos) === 32) {
      pos++;
    }
    if (pos < max && state.src.charCodeAt(pos) !== 10) {
      return -1;
    }
    label = normalizeReference(str.slice(1, labelEnd));
    if (typeof env.references[label] === "undefined") {
      env.references[label] = { title, href };
    }
    return pos;
  }
  function references(state) {
    var tokens = state.tokens, i2, l2, content, pos;
    state.env.references = state.env.references || {};
    if (state.inlineMode) {
      return;
    }
    for (i2 = 1, l2 = tokens.length - 1; i2 < l2; i2++) {
      if (tokens[i2].type === "inline" && tokens[i2 - 1].type === "paragraph_open" && tokens[i2 + 1].type === "paragraph_close") {
        content = tokens[i2].content;
        while (content.length) {
          pos = parseReference(content, state.inline, state.options, state.env);
          if (pos < 0) {
            break;
          }
          content = content.slice(pos).trim();
        }
        tokens[i2].content = content;
        if (!content.length) {
          tokens[i2 - 1].tight = true;
          tokens[i2 + 1].tight = true;
        }
      }
    }
  }
  function inline(state) {
    var tokens = state.tokens, tok, i2, l2;
    for (i2 = 0, l2 = tokens.length; i2 < l2; i2++) {
      tok = tokens[i2];
      if (tok.type === "inline") {
        state.inline.parse(tok.content, state.options, state.env, tok.children);
      }
    }
  }
  function footnote_block(state) {
    var i2, l2, j2, t2, lastParagraph, list2, tokens, current, currentLabel, level = 0, insideRef = false, refTokens = {};
    if (!state.env.footnotes) {
      return;
    }
    state.tokens = state.tokens.filter(function(tok) {
      if (tok.type === "footnote_reference_open") {
        insideRef = true;
        current = [];
        currentLabel = tok.label;
        return false;
      }
      if (tok.type === "footnote_reference_close") {
        insideRef = false;
        refTokens[":" + currentLabel] = current;
        return false;
      }
      if (insideRef) {
        current.push(tok);
      }
      return !insideRef;
    });
    if (!state.env.footnotes.list) {
      return;
    }
    list2 = state.env.footnotes.list;
    state.tokens.push({
      type: "footnote_block_open",
      level: level++
    });
    for (i2 = 0, l2 = list2.length; i2 < l2; i2++) {
      state.tokens.push({
        type: "footnote_open",
        id: i2,
        level: level++
      });
      if (list2[i2].tokens) {
        tokens = [];
        tokens.push({
          type: "paragraph_open",
          tight: false,
          level: level++
        });
        tokens.push({
          type: "inline",
          content: "",
          level,
          children: list2[i2].tokens
        });
        tokens.push({
          type: "paragraph_close",
          tight: false,
          level: --level
        });
      } else if (list2[i2].label) {
        tokens = refTokens[":" + list2[i2].label];
      }
      state.tokens = state.tokens.concat(tokens);
      if (state.tokens[state.tokens.length - 1].type === "paragraph_close") {
        lastParagraph = state.tokens.pop();
      } else {
        lastParagraph = null;
      }
      t2 = list2[i2].count > 0 ? list2[i2].count : 1;
      for (j2 = 0; j2 < t2; j2++) {
        state.tokens.push({
          type: "footnote_anchor",
          id: i2,
          subId: j2,
          level
        });
      }
      if (lastParagraph) {
        state.tokens.push(lastParagraph);
      }
      state.tokens.push({
        type: "footnote_close",
        level: --level
      });
    }
    state.tokens.push({
      type: "footnote_block_close",
      level: --level
    });
  }
  var PUNCT_CHARS = ` 
()[]'".,!?-`;
  function regEscape(s2) {
    return s2.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
  }
  function abbr2(state) {
    var i2, j2, l2, tokens, token, text2, nodes, pos, level, reg, m2, regText, blockTokens = state.tokens;
    if (!state.env.abbreviations) {
      return;
    }
    if (!state.env.abbrRegExp) {
      regText = "(^|[" + PUNCT_CHARS.split("").map(regEscape).join("") + "])(" + Object.keys(state.env.abbreviations).map(function(x2) {
        return x2.substr(1);
      }).sort(function(a2, b2) {
        return b2.length - a2.length;
      }).map(regEscape).join("|") + ")($|[" + PUNCT_CHARS.split("").map(regEscape).join("") + "])";
      state.env.abbrRegExp = new RegExp(regText, "g");
    }
    reg = state.env.abbrRegExp;
    for (j2 = 0, l2 = blockTokens.length; j2 < l2; j2++) {
      if (blockTokens[j2].type !== "inline") {
        continue;
      }
      tokens = blockTokens[j2].children;
      for (i2 = tokens.length - 1; i2 >= 0; i2--) {
        token = tokens[i2];
        if (token.type !== "text") {
          continue;
        }
        pos = 0;
        text2 = token.content;
        reg.lastIndex = 0;
        level = token.level;
        nodes = [];
        while (m2 = reg.exec(text2)) {
          if (reg.lastIndex > pos) {
            nodes.push({
              type: "text",
              content: text2.slice(pos, m2.index + m2[1].length),
              level
            });
          }
          nodes.push({
            type: "abbr_open",
            title: state.env.abbreviations[":" + m2[2]],
            level: level++
          });
          nodes.push({
            type: "text",
            content: m2[2],
            level
          });
          nodes.push({
            type: "abbr_close",
            level: --level
          });
          pos = reg.lastIndex - m2[3].length;
        }
        if (!nodes.length) {
          continue;
        }
        if (pos < text2.length) {
          nodes.push({
            type: "text",
            content: text2.slice(pos),
            level
          });
        }
        blockTokens[j2].children = tokens = [].concat(tokens.slice(0, i2), nodes, tokens.slice(i2 + 1));
      }
    }
  }
  var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
  var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
  var SCOPED_ABBR = {
    "c": "©",
    "r": "®",
    "p": "§",
    "tm": "™"
  };
  function replaceScopedAbbr(str) {
    if (str.indexOf("(") < 0) {
      return str;
    }
    return str.replace(SCOPED_ABBR_RE, function(match, name2) {
      return SCOPED_ABBR[name2.toLowerCase()];
    });
  }
  function replace(state) {
    var i2, token, text2, inlineTokens, blkIdx;
    if (!state.options.typographer) {
      return;
    }
    for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
      if (state.tokens[blkIdx].type !== "inline") {
        continue;
      }
      inlineTokens = state.tokens[blkIdx].children;
      for (i2 = inlineTokens.length - 1; i2 >= 0; i2--) {
        token = inlineTokens[i2];
        if (token.type === "text") {
          text2 = token.content;
          text2 = replaceScopedAbbr(text2);
          if (RARE_RE.test(text2)) {
            text2 = text2.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/mg, "$1—$2").replace(/(^|\s)--(\s|$)/mg, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/mg, "$1–$2");
          }
          token.content = text2;
        }
      }
    }
  }
  var QUOTE_TEST_RE = /['"]/;
  var QUOTE_RE = /['"]/g;
  var PUNCT_RE = /[-\s()\[\]]/;
  var APOSTROPHE = "’";
  function isLetter(str, pos) {
    if (pos < 0 || pos >= str.length) {
      return false;
    }
    return !PUNCT_RE.test(str[pos]);
  }
  function replaceAt(str, index2, ch2) {
    return str.substr(0, index2) + ch2 + str.substr(index2 + 1);
  }
  function smartquotes(state) {
    var i2, token, text2, t2, pos, max, thisLevel, lastSpace, nextSpace, item, canOpen, canClose, j2, isSingle, blkIdx, tokens, stack;
    if (!state.options.typographer) {
      return;
    }
    stack = [];
    for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
      if (state.tokens[blkIdx].type !== "inline") {
        continue;
      }
      tokens = state.tokens[blkIdx].children;
      stack.length = 0;
      for (i2 = 0; i2 < tokens.length; i2++) {
        token = tokens[i2];
        if (token.type !== "text" || QUOTE_TEST_RE.test(token.text)) {
          continue;
        }
        thisLevel = tokens[i2].level;
        for (j2 = stack.length - 1; j2 >= 0; j2--) {
          if (stack[j2].level <= thisLevel) {
            break;
          }
        }
        stack.length = j2 + 1;
        text2 = token.content;
        pos = 0;
        max = text2.length;
        OUTER:
          while (pos < max) {
            QUOTE_RE.lastIndex = pos;
            t2 = QUOTE_RE.exec(text2);
            if (!t2) {
              break;
            }
            lastSpace = !isLetter(text2, t2.index - 1);
            pos = t2.index + 1;
            isSingle = t2[0] === "'";
            nextSpace = !isLetter(text2, pos);
            if (!nextSpace && !lastSpace) {
              if (isSingle) {
                token.content = replaceAt(token.content, t2.index, APOSTROPHE);
              }
              continue;
            }
            canOpen = !nextSpace;
            canClose = !lastSpace;
            if (canClose) {
              for (j2 = stack.length - 1; j2 >= 0; j2--) {
                item = stack[j2];
                if (stack[j2].level < thisLevel) {
                  break;
                }
                if (item.single === isSingle && stack[j2].level === thisLevel) {
                  item = stack[j2];
                  if (isSingle) {
                    tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[2]);
                    token.content = replaceAt(token.content, t2.index, state.options.quotes[3]);
                  } else {
                    tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[0]);
                    token.content = replaceAt(token.content, t2.index, state.options.quotes[1]);
                  }
                  stack.length = j2;
                  continue OUTER;
                }
              }
            }
            if (canOpen) {
              stack.push({
                token: i2,
                pos: t2.index,
                single: isSingle,
                level: thisLevel
              });
            } else if (canClose && isSingle) {
              token.content = replaceAt(token.content, t2.index, APOSTROPHE);
            }
          }
      }
    }
  }
  var _rules = [
    ["block", block],
    ["abbr", abbr],
    ["references", references],
    ["inline", inline],
    ["footnote_tail", footnote_block],
    ["abbr2", abbr2],
    ["replacements", replace],
    ["smartquotes", smartquotes]
  ];
  function Core() {
    this.options = {};
    this.ruler = new Ruler();
    for (var i2 = 0; i2 < _rules.length; i2++) {
      this.ruler.push(_rules[i2][0], _rules[i2][1]);
    }
  }
  Core.prototype.process = function(state) {
    var i2, l2, rules2;
    rules2 = this.ruler.getRules("");
    for (i2 = 0, l2 = rules2.length; i2 < l2; i2++) {
      rules2[i2](state);
    }
  };
  function StateBlock(src, parser2, options, env, tokens) {
    var ch2, s2, start, pos, len, indent, indent_found;
    this.src = src;
    this.parser = parser2;
    this.options = options;
    this.env = env;
    this.tokens = tokens;
    this.bMarks = [];
    this.eMarks = [];
    this.tShift = [];
    this.blkIndent = 0;
    this.line = 0;
    this.lineMax = 0;
    this.tight = false;
    this.parentType = "root";
    this.ddIndent = -1;
    this.level = 0;
    this.result = "";
    s2 = this.src;
    indent = 0;
    indent_found = false;
    for (start = pos = indent = 0, len = s2.length; pos < len; pos++) {
      ch2 = s2.charCodeAt(pos);
      if (!indent_found) {
        if (ch2 === 32) {
          indent++;
          continue;
        } else {
          indent_found = true;
        }
      }
      if (ch2 === 10 || pos === len - 1) {
        if (ch2 !== 10) {
          pos++;
        }
        this.bMarks.push(start);
        this.eMarks.push(pos);
        this.tShift.push(indent);
        indent_found = false;
        indent = 0;
        start = pos + 1;
      }
    }
    this.bMarks.push(s2.length);
    this.eMarks.push(s2.length);
    this.tShift.push(0);
    this.lineMax = this.bMarks.length - 1;
  }
  StateBlock.prototype.isEmpty = function isEmpty(line) {
    return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
  };
  StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
    for (var max = this.lineMax; from < max; from++) {
      if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
        break;
      }
    }
    return from;
  };
  StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
    for (var max = this.src.length; pos < max; pos++) {
      if (this.src.charCodeAt(pos) !== 32) {
        break;
      }
    }
    return pos;
  };
  StateBlock.prototype.skipChars = function skipChars(pos, code2) {
    for (var max = this.src.length; pos < max; pos++) {
      if (this.src.charCodeAt(pos) !== code2) {
        break;
      }
    }
    return pos;
  };
  StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code2, min) {
    if (pos <= min) {
      return pos;
    }
    while (pos > min) {
      if (code2 !== this.src.charCodeAt(--pos)) {
        return pos + 1;
      }
    }
    return pos;
  };
  StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
    var i2, first, last, queue, shift, line = begin;
    if (begin >= end) {
      return "";
    }
    if (line + 1 === end) {
      first = this.bMarks[line] + Math.min(this.tShift[line], indent);
      last = keepLastLF ? this.eMarks[line] + 1 : this.eMarks[line];
      return this.src.slice(first, last);
    }
    queue = new Array(end - begin);
    for (i2 = 0; line < end; line++, i2++) {
      shift = this.tShift[line];
      if (shift > indent) {
        shift = indent;
      }
      if (shift < 0) {
        shift = 0;
      }
      first = this.bMarks[line] + shift;
      if (line + 1 < end || keepLastLF) {
        last = this.eMarks[line] + 1;
      } else {
        last = this.eMarks[line];
      }
      queue[i2] = this.src.slice(first, last);
    }
    return queue.join("");
  };
  function code(state, startLine, endLine) {
    var nextLine, last;
    if (state.tShift[startLine] - state.blkIndent < 4) {
      return false;
    }
    last = nextLine = startLine + 1;
    while (nextLine < endLine) {
      if (state.isEmpty(nextLine)) {
        nextLine++;
        continue;
      }
      if (state.tShift[nextLine] - state.blkIndent >= 4) {
        nextLine++;
        last = nextLine;
        continue;
      }
      break;
    }
    state.line = nextLine;
    state.tokens.push({
      type: "code",
      content: state.getLines(startLine, last, 4 + state.blkIndent, true),
      block: true,
      lines: [startLine, state.line],
      level: state.level
    });
    return true;
  }
  function fences(state, startLine, endLine, silent) {
    var marker, len, params, nextLine, mem, haveEndMarker = false, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    if (pos + 3 > max) {
      return false;
    }
    marker = state.src.charCodeAt(pos);
    if (marker !== 126 && marker !== 96) {
      return false;
    }
    mem = pos;
    pos = state.skipChars(pos, marker);
    len = pos - mem;
    if (len < 3) {
      return false;
    }
    params = state.src.slice(pos, max).trim();
    if (params.indexOf("`") >= 0) {
      return false;
    }
    if (silent) {
      return true;
    }
    nextLine = startLine;
    for (; ; ) {
      nextLine++;
      if (nextLine >= endLine) {
        break;
      }
      pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      if (pos < max && state.tShift[nextLine] < state.blkIndent) {
        break;
      }
      if (state.src.charCodeAt(pos) !== marker) {
        continue;
      }
      if (state.tShift[nextLine] - state.blkIndent >= 4) {
        continue;
      }
      pos = state.skipChars(pos, marker);
      if (pos - mem < len) {
        continue;
      }
      pos = state.skipSpaces(pos);
      if (pos < max) {
        continue;
      }
      haveEndMarker = true;
      break;
    }
    len = state.tShift[startLine];
    state.line = nextLine + (haveEndMarker ? 1 : 0);
    state.tokens.push({
      type: "fence",
      params,
      content: state.getLines(startLine + 1, nextLine, len, true),
      lines: [startLine, state.line],
      level: state.level
    });
    return true;
  }
  function blockquote(state, startLine, endLine, silent) {
    var nextLine, lastLineEmpty, oldTShift, oldBMarks, oldIndent, oldParentType, lines, terminatorRules, i2, l2, terminate, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    if (pos > max) {
      return false;
    }
    if (state.src.charCodeAt(pos++) !== 62) {
      return false;
    }
    if (state.level >= state.options.maxNesting) {
      return false;
    }
    if (silent) {
      return true;
    }
    if (state.src.charCodeAt(pos) === 32) {
      pos++;
    }
    oldIndent = state.blkIndent;
    state.blkIndent = 0;
    oldBMarks = [state.bMarks[startLine]];
    state.bMarks[startLine] = pos;
    pos = pos < max ? state.skipSpaces(pos) : pos;
    lastLineEmpty = pos >= max;
    oldTShift = [state.tShift[startLine]];
    state.tShift[startLine] = pos - state.bMarks[startLine];
    terminatorRules = state.parser.ruler.getRules("blockquote");
    for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      if (pos >= max) {
        break;
      }
      if (state.src.charCodeAt(pos++) === 62) {
        if (state.src.charCodeAt(pos) === 32) {
          pos++;
        }
        oldBMarks.push(state.bMarks[nextLine]);
        state.bMarks[nextLine] = pos;
        pos = pos < max ? state.skipSpaces(pos) : pos;
        lastLineEmpty = pos >= max;
        oldTShift.push(state.tShift[nextLine]);
        state.tShift[nextLine] = pos - state.bMarks[nextLine];
        continue;
      }
      if (lastLineEmpty) {
        break;
      }
      terminate = false;
      for (i2 = 0, l2 = terminatorRules.length; i2 < l2; i2++) {
        if (terminatorRules[i2](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
      oldBMarks.push(state.bMarks[nextLine]);
      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = -1337;
    }
    oldParentType = state.parentType;
    state.parentType = "blockquote";
    state.tokens.push({
      type: "blockquote_open",
      lines: lines = [startLine, 0],
      level: state.level++
    });
    state.parser.tokenize(state, startLine, nextLine);
    state.tokens.push({
      type: "blockquote_close",
      level: --state.level
    });
    state.parentType = oldParentType;
    lines[1] = state.line;
    for (i2 = 0; i2 < oldTShift.length; i2++) {
      state.bMarks[i2 + startLine] = oldBMarks[i2];
      state.tShift[i2 + startLine] = oldTShift[i2];
    }
    state.blkIndent = oldIndent;
    return true;
  }
  function hr(state, startLine, endLine, silent) {
    var marker, cnt, ch2, pos = state.bMarks[startLine], max = state.eMarks[startLine];
    pos += state.tShift[startLine];
    if (pos > max) {
      return false;
    }
    marker = state.src.charCodeAt(pos++);
    if (marker !== 42 && marker !== 45 && marker !== 95) {
      return false;
    }
    cnt = 1;
    while (pos < max) {
      ch2 = state.src.charCodeAt(pos++);
      if (ch2 !== marker && ch2 !== 32) {
        return false;
      }
      if (ch2 === marker) {
        cnt++;
      }
    }
    if (cnt < 3) {
      return false;
    }
    if (silent) {
      return true;
    }
    state.line = startLine + 1;
    state.tokens.push({
      type: "hr",
      lines: [startLine, state.line],
      level: state.level
    });
    return true;
  }
  function skipBulletListMarker(state, startLine) {
    var marker, pos, max;
    pos = state.bMarks[startLine] + state.tShift[startLine];
    max = state.eMarks[startLine];
    if (pos >= max) {
      return -1;
    }
    marker = state.src.charCodeAt(pos++);
    if (marker !== 42 && marker !== 45 && marker !== 43) {
      return -1;
    }
    if (pos < max && state.src.charCodeAt(pos) !== 32) {
      return -1;
    }
    return pos;
  }
  function skipOrderedListMarker(state, startLine) {
    var ch2, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    if (pos + 1 >= max) {
      return -1;
    }
    ch2 = state.src.charCodeAt(pos++);
    if (ch2 < 48 || ch2 > 57) {
      return -1;
    }
    for (; ; ) {
      if (pos >= max) {
        return -1;
      }
      ch2 = state.src.charCodeAt(pos++);
      if (ch2 >= 48 && ch2 <= 57) {
        continue;
      }
      if (ch2 === 41 || ch2 === 46) {
        break;
      }
      return -1;
    }
    if (pos < max && state.src.charCodeAt(pos) !== 32) {
      return -1;
    }
    return pos;
  }
  function markTightParagraphs(state, idx) {
    var i2, l2, level = state.level + 2;
    for (i2 = idx + 2, l2 = state.tokens.length - 2; i2 < l2; i2++) {
      if (state.tokens[i2].level === level && state.tokens[i2].type === "paragraph_open") {
        state.tokens[i2 + 2].tight = true;
        state.tokens[i2].tight = true;
        i2 += 2;
      }
    }
  }
  function list(state, startLine, endLine, silent) {
    var nextLine, indent, oldTShift, oldIndent, oldTight, oldParentType, start, posAfterMarker, max, indentAfterMarker, markerValue, markerCharCode, isOrdered, contentStart, listTokIdx, prevEmptyEnd, listLines, itemLines, tight = true, terminatorRules, i2, l2, terminate;
    if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
      isOrdered = true;
    } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
      isOrdered = false;
    } else {
      return false;
    }
    if (state.level >= state.options.maxNesting) {
      return false;
    }
    markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
    if (silent) {
      return true;
    }
    listTokIdx = state.tokens.length;
    if (isOrdered) {
      start = state.bMarks[startLine] + state.tShift[startLine];
      markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));
      state.tokens.push({
        type: "ordered_list_open",
        order: markerValue,
        lines: listLines = [startLine, 0],
        level: state.level++
      });
    } else {
      state.tokens.push({
        type: "bullet_list_open",
        lines: listLines = [startLine, 0],
        level: state.level++
      });
    }
    nextLine = startLine;
    prevEmptyEnd = false;
    terminatorRules = state.parser.ruler.getRules("list");
    while (nextLine < endLine) {
      contentStart = state.skipSpaces(posAfterMarker);
      max = state.eMarks[nextLine];
      if (contentStart >= max) {
        indentAfterMarker = 1;
      } else {
        indentAfterMarker = contentStart - posAfterMarker;
      }
      if (indentAfterMarker > 4) {
        indentAfterMarker = 1;
      }
      if (indentAfterMarker < 1) {
        indentAfterMarker = 1;
      }
      indent = posAfterMarker - state.bMarks[nextLine] + indentAfterMarker;
      state.tokens.push({
        type: "list_item_open",
        lines: itemLines = [startLine, 0],
        level: state.level++
      });
      oldIndent = state.blkIndent;
      oldTight = state.tight;
      oldTShift = state.tShift[startLine];
      oldParentType = state.parentType;
      state.tShift[startLine] = contentStart - state.bMarks[startLine];
      state.blkIndent = indent;
      state.tight = true;
      state.parentType = "list";
      state.parser.tokenize(state, startLine, endLine, true);
      if (!state.tight || prevEmptyEnd) {
        tight = false;
      }
      prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1);
      state.blkIndent = oldIndent;
      state.tShift[startLine] = oldTShift;
      state.tight = oldTight;
      state.parentType = oldParentType;
      state.tokens.push({
        type: "list_item_close",
        level: --state.level
      });
      nextLine = startLine = state.line;
      itemLines[1] = nextLine;
      contentStart = state.bMarks[startLine];
      if (nextLine >= endLine) {
        break;
      }
      if (state.isEmpty(nextLine)) {
        break;
      }
      if (state.tShift[nextLine] < state.blkIndent) {
        break;
      }
      terminate = false;
      for (i2 = 0, l2 = terminatorRules.length; i2 < l2; i2++) {
        if (terminatorRules[i2](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
      if (isOrdered) {
        posAfterMarker = skipOrderedListMarker(state, nextLine);
        if (posAfterMarker < 0) {
          break;
        }
      } else {
        posAfterMarker = skipBulletListMarker(state, nextLine);
        if (posAfterMarker < 0) {
          break;
        }
      }
      if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
        break;
      }
    }
    state.tokens.push({
      type: isOrdered ? "ordered_list_close" : "bullet_list_close",
      level: --state.level
    });
    listLines[1] = nextLine;
    state.line = nextLine;
    if (tight) {
      markTightParagraphs(state, listTokIdx);
    }
    return true;
  }
  function footnote(state, startLine, endLine, silent) {
    var oldBMark, oldTShift, oldParentType, pos, label, start = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    if (start + 4 > max) {
      return false;
    }
    if (state.src.charCodeAt(start) !== 91) {
      return false;
    }
    if (state.src.charCodeAt(start + 1) !== 94) {
      return false;
    }
    if (state.level >= state.options.maxNesting) {
      return false;
    }
    for (pos = start + 2; pos < max; pos++) {
      if (state.src.charCodeAt(pos) === 32) {
        return false;
      }
      if (state.src.charCodeAt(pos) === 93) {
        break;
      }
    }
    if (pos === start + 2) {
      return false;
    }
    if (pos + 1 >= max || state.src.charCodeAt(++pos) !== 58) {
      return false;
    }
    if (silent) {
      return true;
    }
    pos++;
    if (!state.env.footnotes) {
      state.env.footnotes = {};
    }
    if (!state.env.footnotes.refs) {
      state.env.footnotes.refs = {};
    }
    label = state.src.slice(start + 2, pos - 2);
    state.env.footnotes.refs[":" + label] = -1;
    state.tokens.push({
      type: "footnote_reference_open",
      label,
      level: state.level++
    });
    oldBMark = state.bMarks[startLine];
    oldTShift = state.tShift[startLine];
    oldParentType = state.parentType;
    state.tShift[startLine] = state.skipSpaces(pos) - pos;
    state.bMarks[startLine] = pos;
    state.blkIndent += 4;
    state.parentType = "footnote";
    if (state.tShift[startLine] < state.blkIndent) {
      state.tShift[startLine] += state.blkIndent;
      state.bMarks[startLine] -= state.blkIndent;
    }
    state.parser.tokenize(state, startLine, endLine, true);
    state.parentType = oldParentType;
    state.blkIndent -= 4;
    state.tShift[startLine] = oldTShift;
    state.bMarks[startLine] = oldBMark;
    state.tokens.push({
      type: "footnote_reference_close",
      level: --state.level
    });
    return true;
  }
  function heading(state, startLine, endLine, silent) {
    var ch2, level, tmp, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
    if (pos >= max) {
      return false;
    }
    ch2 = state.src.charCodeAt(pos);
    if (ch2 !== 35 || pos >= max) {
      return false;
    }
    level = 1;
    ch2 = state.src.charCodeAt(++pos);
    while (ch2 === 35 && pos < max && level <= 6) {
      level++;
      ch2 = state.src.charCodeAt(++pos);
    }
    if (level > 6 || pos < max && ch2 !== 32) {
      return false;
    }
    if (silent) {
      return true;
    }
    max = state.skipCharsBack(max, 32, pos);
    tmp = state.skipCharsBack(max, 35, pos);
    if (tmp > pos && state.src.charCodeAt(tmp - 1) === 32) {
      max = tmp;
    }
    state.line = startLine + 1;
    state.tokens.push({
      type: "heading_open",
      hLevel: level,
      lines: [startLine, state.line],
      level: state.level
    });
    if (pos < max) {
      state.tokens.push({
        type: "inline",
        content: state.src.slice(pos, max).trim(),
        level: state.level + 1,
        lines: [startLine, state.line],
        children: []
      });
    }
    state.tokens.push({ type: "heading_close", hLevel: level, level: state.level });
    return true;
  }
  function lheading(state, startLine, endLine) {
    var marker, pos, max, next = startLine + 1;
    if (next >= endLine) {
      return false;
    }
    if (state.tShift[next] < state.blkIndent) {
      return false;
    }
    if (state.tShift[next] - state.blkIndent > 3) {
      return false;
    }
    pos = state.bMarks[next] + state.tShift[next];
    max = state.eMarks[next];
    if (pos >= max) {
      return false;
    }
    marker = state.src.charCodeAt(pos);
    if (marker !== 45 && marker !== 61) {
      return false;
    }
    pos = state.skipChars(pos, marker);
    pos = state.skipSpaces(pos);
    if (pos < max) {
      return false;
    }
    pos = state.bMarks[startLine] + state.tShift[startLine];
    state.line = next + 1;
    state.tokens.push({
      type: "heading_open",
      hLevel: marker === 61 ? 1 : 2,
      lines: [startLine, state.line],
      level: state.level
    });
    state.tokens.push({
      type: "inline",
      content: state.src.slice(pos, state.eMarks[startLine]).trim(),
      level: state.level + 1,
      lines: [startLine, state.line - 1],
      children: []
    });
    state.tokens.push({
      type: "heading_close",
      hLevel: marker === 61 ? 1 : 2,
      level: state.level
    });
    return true;
  }
  var html_blocks = {};
  [
    "article",
    "aside",
    "button",
    "blockquote",
    "body",
    "canvas",
    "caption",
    "col",
    "colgroup",
    "dd",
    "div",
    "dl",
    "dt",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "iframe",
    "li",
    "map",
    "object",
    "ol",
    "output",
    "p",
    "pre",
    "progress",
    "script",
    "section",
    "style",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "tr",
    "thead",
    "ul",
    "video"
  ].forEach(function(name2) {
    html_blocks[name2] = true;
  });
  var HTML_TAG_OPEN_RE = /^<([a-zA-Z]{1,15})[\s\/>]/;
  var HTML_TAG_CLOSE_RE = /^<\/([a-zA-Z]{1,15})[\s>]/;
  function isLetter$1(ch2) {
    var lc2 = ch2 | 32;
    return lc2 >= 97 && lc2 <= 122;
  }
  function htmlblock(state, startLine, endLine, silent) {
    var ch2, match, nextLine, pos = state.bMarks[startLine], max = state.eMarks[startLine], shift = state.tShift[startLine];
    pos += shift;
    if (!state.options.html) {
      return false;
    }
    if (shift > 3 || pos + 2 >= max) {
      return false;
    }
    if (state.src.charCodeAt(pos) !== 60) {
      return false;
    }
    ch2 = state.src.charCodeAt(pos + 1);
    if (ch2 === 33 || ch2 === 63) {
      if (silent) {
        return true;
      }
    } else if (ch2 === 47 || isLetter$1(ch2)) {
      if (ch2 === 47) {
        match = state.src.slice(pos, max).match(HTML_TAG_CLOSE_RE);
        if (!match) {
          return false;
        }
      } else {
        match = state.src.slice(pos, max).match(HTML_TAG_OPEN_RE);
        if (!match) {
          return false;
        }
      }
      if (html_blocks[match[1].toLowerCase()] !== true) {
        return false;
      }
      if (silent) {
        return true;
      }
    } else {
      return false;
    }
    nextLine = startLine + 1;
    while (nextLine < state.lineMax && !state.isEmpty(nextLine)) {
      nextLine++;
    }
    state.line = nextLine;
    state.tokens.push({
      type: "htmlblock",
      level: state.level,
      lines: [startLine, state.line],
      content: state.getLines(startLine, nextLine, 0, true)
    });
    return true;
  }
  function getLine(state, line) {
    var pos = state.bMarks[line] + state.blkIndent, max = state.eMarks[line];
    return state.src.substr(pos, max - pos);
  }
  function table(state, startLine, endLine, silent) {
    var ch2, lineText, pos, i2, nextLine, rows, cell, aligns, t2, tableLines, tbodyLines;
    if (startLine + 2 > endLine) {
      return false;
    }
    nextLine = startLine + 1;
    if (state.tShift[nextLine] < state.blkIndent) {
      return false;
    }
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    if (pos >= state.eMarks[nextLine]) {
      return false;
    }
    ch2 = state.src.charCodeAt(pos);
    if (ch2 !== 124 && ch2 !== 45 && ch2 !== 58) {
      return false;
    }
    lineText = getLine(state, startLine + 1);
    if (!/^[-:| ]+$/.test(lineText)) {
      return false;
    }
    rows = lineText.split("|");
    if (rows <= 2) {
      return false;
    }
    aligns = [];
    for (i2 = 0; i2 < rows.length; i2++) {
      t2 = rows[i2].trim();
      if (!t2) {
        if (i2 === 0 || i2 === rows.length - 1) {
          continue;
        } else {
          return false;
        }
      }
      if (!/^:?-+:?$/.test(t2)) {
        return false;
      }
      if (t2.charCodeAt(t2.length - 1) === 58) {
        aligns.push(t2.charCodeAt(0) === 58 ? "center" : "right");
      } else if (t2.charCodeAt(0) === 58) {
        aligns.push("left");
      } else {
        aligns.push("");
      }
    }
    lineText = getLine(state, startLine).trim();
    if (lineText.indexOf("|") === -1) {
      return false;
    }
    rows = lineText.replace(/^\||\|$/g, "").split("|");
    if (aligns.length !== rows.length) {
      return false;
    }
    if (silent) {
      return true;
    }
    state.tokens.push({
      type: "table_open",
      lines: tableLines = [startLine, 0],
      level: state.level++
    });
    state.tokens.push({
      type: "thead_open",
      lines: [startLine, startLine + 1],
      level: state.level++
    });
    state.tokens.push({
      type: "tr_open",
      lines: [startLine, startLine + 1],
      level: state.level++
    });
    for (i2 = 0; i2 < rows.length; i2++) {
      state.tokens.push({
        type: "th_open",
        align: aligns[i2],
        lines: [startLine, startLine + 1],
        level: state.level++
      });
      state.tokens.push({
        type: "inline",
        content: rows[i2].trim(),
        lines: [startLine, startLine + 1],
        level: state.level,
        children: []
      });
      state.tokens.push({ type: "th_close", level: --state.level });
    }
    state.tokens.push({ type: "tr_close", level: --state.level });
    state.tokens.push({ type: "thead_close", level: --state.level });
    state.tokens.push({
      type: "tbody_open",
      lines: tbodyLines = [startLine + 2, 0],
      level: state.level++
    });
    for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
      if (state.tShift[nextLine] < state.blkIndent) {
        break;
      }
      lineText = getLine(state, nextLine).trim();
      if (lineText.indexOf("|") === -1) {
        break;
      }
      rows = lineText.replace(/^\||\|$/g, "").split("|");
      state.tokens.push({ type: "tr_open", level: state.level++ });
      for (i2 = 0; i2 < rows.length; i2++) {
        state.tokens.push({ type: "td_open", align: aligns[i2], level: state.level++ });
        cell = rows[i2].substring(
          rows[i2].charCodeAt(0) === 124 ? 1 : 0,
          rows[i2].charCodeAt(rows[i2].length - 1) === 124 ? rows[i2].length - 1 : rows[i2].length
        ).trim();
        state.tokens.push({
          type: "inline",
          content: cell,
          level: state.level,
          children: []
        });
        state.tokens.push({ type: "td_close", level: --state.level });
      }
      state.tokens.push({ type: "tr_close", level: --state.level });
    }
    state.tokens.push({ type: "tbody_close", level: --state.level });
    state.tokens.push({ type: "table_close", level: --state.level });
    tableLines[1] = tbodyLines[1] = nextLine;
    state.line = nextLine;
    return true;
  }
  function skipMarker(state, line) {
    var pos, marker, start = state.bMarks[line] + state.tShift[line], max = state.eMarks[line];
    if (start >= max) {
      return -1;
    }
    marker = state.src.charCodeAt(start++);
    if (marker !== 126 && marker !== 58) {
      return -1;
    }
    pos = state.skipSpaces(start);
    if (start === pos) {
      return -1;
    }
    if (pos >= max) {
      return -1;
    }
    return pos;
  }
  function markTightParagraphs$1(state, idx) {
    var i2, l2, level = state.level + 2;
    for (i2 = idx + 2, l2 = state.tokens.length - 2; i2 < l2; i2++) {
      if (state.tokens[i2].level === level && state.tokens[i2].type === "paragraph_open") {
        state.tokens[i2 + 2].tight = true;
        state.tokens[i2].tight = true;
        i2 += 2;
      }
    }
  }
  function deflist(state, startLine, endLine, silent) {
    var contentStart, ddLine, dtLine, itemLines, listLines, listTokIdx, nextLine, oldIndent, oldDDIndent, oldParentType, oldTShift, oldTight, prevEmptyEnd, tight;
    if (silent) {
      if (state.ddIndent < 0) {
        return false;
      }
      return skipMarker(state, startLine) >= 0;
    }
    nextLine = startLine + 1;
    if (state.isEmpty(nextLine)) {
      if (++nextLine > endLine) {
        return false;
      }
    }
    if (state.tShift[nextLine] < state.blkIndent) {
      return false;
    }
    contentStart = skipMarker(state, nextLine);
    if (contentStart < 0) {
      return false;
    }
    if (state.level >= state.options.maxNesting) {
      return false;
    }
    listTokIdx = state.tokens.length;
    state.tokens.push({
      type: "dl_open",
      lines: listLines = [startLine, 0],
      level: state.level++
    });
    dtLine = startLine;
    ddLine = nextLine;
    OUTER:
      for (; ; ) {
        tight = true;
        prevEmptyEnd = false;
        state.tokens.push({
          type: "dt_open",
          lines: [dtLine, dtLine],
          level: state.level++
        });
        state.tokens.push({
          type: "inline",
          content: state.getLines(dtLine, dtLine + 1, state.blkIndent, false).trim(),
          level: state.level + 1,
          lines: [dtLine, dtLine],
          children: []
        });
        state.tokens.push({
          type: "dt_close",
          level: --state.level
        });
        for (; ; ) {
          state.tokens.push({
            type: "dd_open",
            lines: itemLines = [nextLine, 0],
            level: state.level++
          });
          oldTight = state.tight;
          oldDDIndent = state.ddIndent;
          oldIndent = state.blkIndent;
          oldTShift = state.tShift[ddLine];
          oldParentType = state.parentType;
          state.blkIndent = state.ddIndent = state.tShift[ddLine] + 2;
          state.tShift[ddLine] = contentStart - state.bMarks[ddLine];
          state.tight = true;
          state.parentType = "deflist";
          state.parser.tokenize(state, ddLine, endLine, true);
          if (!state.tight || prevEmptyEnd) {
            tight = false;
          }
          prevEmptyEnd = state.line - ddLine > 1 && state.isEmpty(state.line - 1);
          state.tShift[ddLine] = oldTShift;
          state.tight = oldTight;
          state.parentType = oldParentType;
          state.blkIndent = oldIndent;
          state.ddIndent = oldDDIndent;
          state.tokens.push({
            type: "dd_close",
            level: --state.level
          });
          itemLines[1] = nextLine = state.line;
          if (nextLine >= endLine) {
            break OUTER;
          }
          if (state.tShift[nextLine] < state.blkIndent) {
            break OUTER;
          }
          contentStart = skipMarker(state, nextLine);
          if (contentStart < 0) {
            break;
          }
          ddLine = nextLine;
        }
        if (nextLine >= endLine) {
          break;
        }
        dtLine = nextLine;
        if (state.isEmpty(dtLine)) {
          break;
        }
        if (state.tShift[dtLine] < state.blkIndent) {
          break;
        }
        ddLine = dtLine + 1;
        if (ddLine >= endLine) {
          break;
        }
        if (state.isEmpty(ddLine)) {
          ddLine++;
        }
        if (ddLine >= endLine) {
          break;
        }
        if (state.tShift[ddLine] < state.blkIndent) {
          break;
        }
        contentStart = skipMarker(state, ddLine);
        if (contentStart < 0) {
          break;
        }
      }
    state.tokens.push({
      type: "dl_close",
      level: --state.level
    });
    listLines[1] = nextLine;
    state.line = nextLine;
    if (tight) {
      markTightParagraphs$1(state, listTokIdx);
    }
    return true;
  }
  function paragraph(state, startLine) {
    var endLine, content, terminate, i2, l2, nextLine = startLine + 1, terminatorRules;
    endLine = state.lineMax;
    if (nextLine < endLine && !state.isEmpty(nextLine)) {
      terminatorRules = state.parser.ruler.getRules("paragraph");
      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        if (state.tShift[nextLine] - state.blkIndent > 3) {
          continue;
        }
        terminate = false;
        for (i2 = 0, l2 = terminatorRules.length; i2 < l2; i2++) {
          if (terminatorRules[i2](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
      }
    }
    content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
    state.line = nextLine;
    if (content.length) {
      state.tokens.push({
        type: "paragraph_open",
        tight: false,
        lines: [startLine, state.line],
        level: state.level
      });
      state.tokens.push({
        type: "inline",
        content,
        level: state.level + 1,
        lines: [startLine, state.line],
        children: []
      });
      state.tokens.push({
        type: "paragraph_close",
        tight: false,
        level: state.level
      });
    }
    return true;
  }
  var _rules$1 = [
    ["code", code],
    ["fences", fences, ["paragraph", "blockquote", "list"]],
    ["blockquote", blockquote, ["paragraph", "blockquote", "list"]],
    ["hr", hr, ["paragraph", "blockquote", "list"]],
    ["list", list, ["paragraph", "blockquote"]],
    ["footnote", footnote, ["paragraph"]],
    ["heading", heading, ["paragraph", "blockquote"]],
    ["lheading", lheading],
    ["htmlblock", htmlblock, ["paragraph", "blockquote"]],
    ["table", table, ["paragraph"]],
    ["deflist", deflist, ["paragraph"]],
    ["paragraph", paragraph]
  ];
  function ParserBlock() {
    this.ruler = new Ruler();
    for (var i2 = 0; i2 < _rules$1.length; i2++) {
      this.ruler.push(_rules$1[i2][0], _rules$1[i2][1], {
        alt: (_rules$1[i2][2] || []).slice()
      });
    }
  }
  ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
    var rules2 = this.ruler.getRules("");
    var len = rules2.length;
    var line = startLine;
    var hasEmptyLines = false;
    var ok2, i2;
    while (line < endLine) {
      state.line = line = state.skipEmptyLines(line);
      if (line >= endLine) {
        break;
      }
      if (state.tShift[line] < state.blkIndent) {
        break;
      }
      for (i2 = 0; i2 < len; i2++) {
        ok2 = rules2[i2](state, line, endLine, false);
        if (ok2) {
          break;
        }
      }
      state.tight = !hasEmptyLines;
      if (state.isEmpty(state.line - 1)) {
        hasEmptyLines = true;
      }
      line = state.line;
      if (line < endLine && state.isEmpty(line)) {
        hasEmptyLines = true;
        line++;
        if (line < endLine && state.parentType === "list" && state.isEmpty(line)) {
          break;
        }
        state.line = line;
      }
    }
  };
  var TABS_SCAN_RE = /[\n\t]/g;
  var NEWLINES_RE = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
  var SPACES_RE = /\u00a0/g;
  ParserBlock.prototype.parse = function(str, options, env, outTokens) {
    var state, lineStart = 0, lastTabPos = 0;
    if (!str) {
      return [];
    }
    str = str.replace(SPACES_RE, " ");
    str = str.replace(NEWLINES_RE, "\n");
    if (str.indexOf("	") >= 0) {
      str = str.replace(TABS_SCAN_RE, function(match, offset) {
        var result;
        if (str.charCodeAt(offset) === 10) {
          lineStart = offset + 1;
          lastTabPos = 0;
          return match;
        }
        result = "    ".slice((offset - lineStart - lastTabPos) % 4);
        lastTabPos = offset - lineStart + 1;
        return result;
      });
    }
    state = new StateBlock(str, this, options, env, outTokens);
    this.tokenize(state, state.line, state.lineMax);
  };
  function isTerminatorChar(ch2) {
    switch (ch2) {
      case 10:
      case 92:
      case 96:
      case 42:
      case 95:
      case 94:
      case 91:
      case 93:
      case 33:
      case 38:
      case 60:
      case 62:
      case 123:
      case 125:
      case 36:
      case 37:
      case 64:
      case 126:
      case 43:
      case 61:
      case 58:
        return true;
      default:
        return false;
    }
  }
  function text(state, silent) {
    var pos = state.pos;
    while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
      pos++;
    }
    if (pos === state.pos) {
      return false;
    }
    if (!silent) {
      state.pending += state.src.slice(state.pos, pos);
    }
    state.pos = pos;
    return true;
  }
  function newline(state, silent) {
    var pmax, max, pos = state.pos;
    if (state.src.charCodeAt(pos) !== 10) {
      return false;
    }
    pmax = state.pending.length - 1;
    max = state.posMax;
    if (!silent) {
      if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
        if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
          for (var i2 = pmax - 2; i2 >= 0; i2--) {
            if (state.pending.charCodeAt(i2) !== 32) {
              state.pending = state.pending.substring(0, i2 + 1);
              break;
            }
          }
          state.push({
            type: "hardbreak",
            level: state.level
          });
        } else {
          state.pending = state.pending.slice(0, -1);
          state.push({
            type: "softbreak",
            level: state.level
          });
        }
      } else {
        state.push({
          type: "softbreak",
          level: state.level
        });
      }
    }
    pos++;
    while (pos < max && state.src.charCodeAt(pos) === 32) {
      pos++;
    }
    state.pos = pos;
    return true;
  }
  var ESCAPED = [];
  for (var i$1 = 0; i$1 < 256; i$1++) {
    ESCAPED.push(0);
  }
  "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch2) {
    ESCAPED[ch2.charCodeAt(0)] = 1;
  });
  function escape$1(state, silent) {
    var ch2, pos = state.pos, max = state.posMax;
    if (state.src.charCodeAt(pos) !== 92) {
      return false;
    }
    pos++;
    if (pos < max) {
      ch2 = state.src.charCodeAt(pos);
      if (ch2 < 256 && ESCAPED[ch2] !== 0) {
        if (!silent) {
          state.pending += state.src[pos];
        }
        state.pos += 2;
        return true;
      }
      if (ch2 === 10) {
        if (!silent) {
          state.push({
            type: "hardbreak",
            level: state.level
          });
        }
        pos++;
        while (pos < max && state.src.charCodeAt(pos) === 32) {
          pos++;
        }
        state.pos = pos;
        return true;
      }
    }
    if (!silent) {
      state.pending += "\\";
    }
    state.pos++;
    return true;
  }
  function backticks(state, silent) {
    var start, max, marker, matchStart, matchEnd, pos = state.pos, ch2 = state.src.charCodeAt(pos);
    if (ch2 !== 96) {
      return false;
    }
    start = pos;
    pos++;
    max = state.posMax;
    while (pos < max && state.src.charCodeAt(pos) === 96) {
      pos++;
    }
    marker = state.src.slice(start, pos);
    matchStart = matchEnd = pos;
    while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
      matchEnd = matchStart + 1;
      while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96) {
        matchEnd++;
      }
      if (matchEnd - matchStart === marker.length) {
        if (!silent) {
          state.push({
            type: "code",
            content: state.src.slice(pos, matchStart).replace(/[ \n]+/g, " ").trim(),
            block: false,
            level: state.level
          });
        }
        state.pos = matchEnd;
        return true;
      }
    }
    if (!silent) {
      state.pending += marker;
    }
    state.pos += marker.length;
    return true;
  }
  function del(state, silent) {
    var found, pos, stack, max = state.posMax, start = state.pos, lastChar, nextChar;
    if (state.src.charCodeAt(start) !== 126) {
      return false;
    }
    if (silent) {
      return false;
    }
    if (start + 4 >= max) {
      return false;
    }
    if (state.src.charCodeAt(start + 1) !== 126) {
      return false;
    }
    if (state.level >= state.options.maxNesting) {
      return false;
    }
    lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
    nextChar = state.src.charCodeAt(start + 2);
    if (lastChar === 126) {
      return false;
    }
    if (nextChar === 126) {
      return false;
    }
    if (nextChar === 32 || nextChar === 10) {
      return false;
    }
    pos = start + 2;
    while (pos < max && state.src.charCodeAt(pos) === 126) {
      pos++;
    }
    if (pos > start + 3) {
      state.pos += pos - start;
      if (!silent) {
        state.pending += state.src.slice(start, pos);
      }
      return true;
    }
    state.pos = start + 2;
    stack = 1;
    while (state.pos + 1 < max) {
      if (state.src.charCodeAt(state.pos) === 126) {
        if (state.src.charCodeAt(state.pos + 1) === 126) {
          lastChar = state.src.charCodeAt(state.pos - 1);
          nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
          if (nextChar !== 126 && lastChar !== 126) {
            if (lastChar !== 32 && lastChar !== 10) {
              stack--;
            } else if (nextChar !== 32 && nextChar !== 10) {
              stack++;
            }
            if (stack <= 0) {
              found = true;
              break;
            }
          }
        }
      }
      state.parser.skipToken(state);
    }
    if (!found) {
      state.pos = start;
      return false;
    }
    state.posMax = state.pos;
    state.pos = start + 2;
    if (!silent) {
      state.push({ type: "del_open", level: state.level++ });
      state.parser.tokenize(state);
      state.push({ type: "del_close", level: --state.level });
    }
    state.pos = state.posMax + 2;
    state.posMax = max;
    return true;
  }
  function ins(state, silent) {
    var found, pos, stack, max = state.posMax, start = state.pos, lastChar, nextChar;
    if (state.src.charCodeAt(start) !== 43) {
      return false;
    }
    if (silent) {
      return false;
    }
    if (start + 4 >= max) {
      return false;
    }
    if (state.src.charCodeAt(start + 1) !== 43) {
      return false;
    }
    if (state.level >= state.options.maxNesting) {
      return false;
    }
    lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
    nextChar = state.src.charCodeAt(start + 2);
    if (lastChar === 43) {
      return false;
    }
    if (nextChar === 43) {
      return false;
    }
    if (nextChar === 32 || nextChar === 10) {
      return false;
    }
    pos = start + 2;
    while (pos < max && state.src.charCodeAt(pos) === 43) {
      pos++;
    }
    if (pos !== start + 2) {
      state.pos += pos - start;
      if (!silent) {
        state.pending += state.src.slice(start, pos);
      }
      return true;
    }
    state.pos = start + 2;
    stack = 1;
    while (state.pos + 1 < max) {
      if (state.src.charCodeAt(state.pos) === 43) {
        if (state.src.charCodeAt(state.pos + 1) === 43) {
          lastChar = state.src.charCodeAt(state.pos - 1);
          nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
          if (nextChar !== 43 && lastChar !== 43) {
            if (lastChar !== 32 && lastChar !== 10) {
              stack--;
            } else if (nextChar !== 32 && nextChar !== 10) {
              stack++;
            }
            if (stack <= 0) {
              found = true;
              break;
            }
          }
        }
      }
      state.parser.skipToken(state);
    }
    if (!found) {
      state.pos = start;
      return false;
    }
    state.posMax = state.pos;
    state.pos = start + 2;
    if (!silent) {
      state.push({ type: "ins_open", level: state.level++ });
      state.parser.tokenize(state);
      state.push({ type: "ins_close", level: --state.level });
    }
    state.pos = state.posMax + 2;
    state.posMax = max;
    return true;
  }
  function mark(state, silent) {
    var found, pos, stack, max = state.posMax, start = state.pos, lastChar, nextChar;
    if (state.src.charCodeAt(start) !== 61) {
      return false;
    }
    if (silent) {
      return false;
    }
    if (start + 4 >= max) {
      return false;
    }
    if (state.src.charCodeAt(start + 1) !== 61) {
      return false;
    }
    if (state.level >= state.options.maxNesting) {
      return false;
    }
    lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
    nextChar = state.src.charCodeAt(start + 2);
    if (lastChar === 61) {
      return false;
    }
    if (nextChar === 61) {
      return false;
    }
    if (nextChar === 32 || nextChar === 10) {
      return false;
    }
    pos = start + 2;
    while (pos < max && state.src.charCodeAt(pos) === 61) {
      pos++;
    }
    if (pos !== start + 2) {
      state.pos += pos - start;
      if (!silent) {
        state.pending += state.src.slice(start, pos);
      }
      return true;
    }
    state.pos = start + 2;
    stack = 1;
    while (state.pos + 1 < max) {
      if (state.src.charCodeAt(state.pos) === 61) {
        if (state.src.charCodeAt(state.pos + 1) === 61) {
          lastChar = state.src.charCodeAt(state.pos - 1);
          nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
          if (nextChar !== 61 && lastChar !== 61) {
            if (lastChar !== 32 && lastChar !== 10) {
              stack--;
            } else if (nextChar !== 32 && nextChar !== 10) {
              stack++;
            }
            if (stack <= 0) {
              found = true;
              break;
            }
          }
        }
      }
      state.parser.skipToken(state);
    }
    if (!found) {
      state.pos = start;
      return false;
    }
    state.posMax = state.pos;
    state.pos = start + 2;
    if (!silent) {
      state.push({ type: "mark_open", level: state.level++ });
      state.parser.tokenize(state);
      state.push({ type: "mark_close", level: --state.level });
    }
    state.pos = state.posMax + 2;
    state.posMax = max;
    return true;
  }
  function isAlphaNum(code2) {
    return code2 >= 48 && code2 <= 57 || code2 >= 65 && code2 <= 90 || code2 >= 97 && code2 <= 122;
  }
  function scanDelims(state, start) {
    var pos = start, lastChar, nextChar, count, can_open = true, can_close = true, max = state.posMax, marker = state.src.charCodeAt(start);
    lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
    while (pos < max && state.src.charCodeAt(pos) === marker) {
      pos++;
    }
    if (pos >= max) {
      can_open = false;
    }
    count = pos - start;
    if (count >= 4) {
      can_open = can_close = false;
    } else {
      nextChar = pos < max ? state.src.charCodeAt(pos) : -1;
      if (nextChar === 32 || nextChar === 10) {
        can_open = false;
      }
      if (lastChar === 32 || lastChar === 10) {
        can_close = false;
      }
      if (marker === 95) {
        if (isAlphaNum(lastChar)) {
          can_open = false;
        }
        if (isAlphaNum(nextChar)) {
          can_close = false;
        }
      }
    }
    return {
      can_open,
      can_close,
      delims: count
    };
  }
  function emphasis(state, silent) {
    var startCount, count, found, oldCount, newCount, stack, res, max = state.posMax, start = state.pos, marker = state.src.charCodeAt(start);
    if (marker !== 95 && marker !== 42) {
      return false;
    }
    if (silent) {
      return false;
    }
    res = scanDelims(state, start);
    startCount = res.delims;
    if (!res.can_open) {
      state.pos += startCount;
      if (!silent) {
        state.pending += state.src.slice(start, state.pos);
      }
      return true;
    }
    if (state.level >= state.options.maxNesting) {
      return false;
    }
    state.pos = start + startCount;
    stack = [startCount];
    while (state.pos < max) {
      if (state.src.charCodeAt(state.pos) === marker) {
        res = scanDelims(state, state.pos);
        count = res.delims;
        if (res.can_close) {
          oldCount = stack.pop();
          newCount = count;
          while (oldCount !== newCount) {
            if (newCount < oldCount) {
              stack.push(oldCount - newCount);
              break;
            }
            newCount -= oldCount;
            if (stack.length === 0) {
              break;
            }
            state.pos += oldCount;
            oldCount = stack.pop();
          }
          if (stack.length === 0) {
            startCount = oldCount;
            found = true;
            break;
          }
          state.pos += count;
          continue;
        }
        if (res.can_open) {
          stack.push(count);
        }
        state.pos += count;
        continue;
      }
      state.parser.skipToken(state);
    }
    if (!found) {
      state.pos = start;
      return false;
    }
    state.posMax = state.pos;
    state.pos = start + startCount;
    if (!silent) {
      if (startCount === 2 || startCount === 3) {
        state.push({ type: "strong_open", level: state.level++ });
      }
      if (startCount === 1 || startCount === 3) {
        state.push({ type: "em_open", level: state.level++ });
      }
      state.parser.tokenize(state);
      if (startCount === 1 || startCount === 3) {
        state.push({ type: "em_close", level: --state.level });
      }
      if (startCount === 2 || startCount === 3) {
        state.push({ type: "strong_close", level: --state.level });
      }
    }
    state.pos = state.posMax + startCount;
    state.posMax = max;
    return true;
  }
  var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
  function sub(state, silent) {
    var found, content, max = state.posMax, start = state.pos;
    if (state.src.charCodeAt(start) !== 126) {
      return false;
    }
    if (silent) {
      return false;
    }
    if (start + 2 >= max) {
      return false;
    }
    if (state.level >= state.options.maxNesting) {
      return false;
    }
    state.pos = start + 1;
    while (state.pos < max) {
      if (state.src.charCodeAt(state.pos) === 126) {
        found = true;
        break;
      }
      state.parser.skipToken(state);
    }
    if (!found || start + 1 === state.pos) {
      state.pos = start;
      return false;
    }
    content = state.src.slice(start + 1, state.pos);
    if (content.match(/(^|[^\\])(\\\\)*\s/)) {
      state.pos = start;
      return false;
    }
    state.posMax = state.pos;
    state.pos = start + 1;
    if (!silent) {
      state.push({
        type: "sub",
        level: state.level,
        content: content.replace(UNESCAPE_RE, "$1")
      });
    }
    state.pos = state.posMax + 1;
    state.posMax = max;
    return true;
  }
  var UNESCAPE_RE$1 = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
  function sup(state, silent) {
    var found, content, max = state.posMax, start = state.pos;
    if (state.src.charCodeAt(start) !== 94) {
      return false;
    }
    if (silent) {
      return false;
    }
    if (start + 2 >= max) {
      return false;
    }
    if (state.level >= state.options.maxNesting) {
      return false;
    }
    state.pos = start + 1;
    while (state.pos < max) {
      if (state.src.charCodeAt(state.pos) === 94) {
        found = true;
        break;
      }
      state.parser.skipToken(state);
    }
    if (!found || start + 1 === state.pos) {
      state.pos = start;
      return false;
    }
    content = state.src.slice(start + 1, state.pos);
    if (content.match(/(^|[^\\])(\\\\)*\s/)) {
      state.pos = start;
      return false;
    }
    state.posMax = state.pos;
    state.pos = start + 1;
    if (!silent) {
      state.push({
        type: "sup",
        level: state.level,
        content: content.replace(UNESCAPE_RE$1, "$1")
      });
    }
    state.pos = state.posMax + 1;
    state.posMax = max;
    return true;
  }
  function links(state, silent) {
    var labelStart, labelEnd, label, href, title, pos, ref, code2, isImage = false, oldPos = state.pos, max = state.posMax, start = state.pos, marker = state.src.charCodeAt(start);
    if (marker === 33) {
      isImage = true;
      marker = state.src.charCodeAt(++start);
    }
    if (marker !== 91) {
      return false;
    }
    if (state.level >= state.options.maxNesting) {
      return false;
    }
    labelStart = start + 1;
    labelEnd = parseLinkLabel(state, start);
    if (labelEnd < 0) {
      return false;
    }
    pos = labelEnd + 1;
    if (pos < max && state.src.charCodeAt(pos) === 40) {
      pos++;
      for (; pos < max; pos++) {
        code2 = state.src.charCodeAt(pos);
        if (code2 !== 32 && code2 !== 10) {
          break;
        }
      }
      if (pos >= max) {
        return false;
      }
      start = pos;
      if (parseLinkDestination(state, pos)) {
        href = state.linkContent;
        pos = state.pos;
      } else {
        href = "";
      }
      start = pos;
      for (; pos < max; pos++) {
        code2 = state.src.charCodeAt(pos);
        if (code2 !== 32 && code2 !== 10) {
          break;
        }
      }
      if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
        title = state.linkContent;
        pos = state.pos;
        for (; pos < max; pos++) {
          code2 = state.src.charCodeAt(pos);
          if (code2 !== 32 && code2 !== 10) {
            break;
          }
        }
      } else {
        title = "";
      }
      if (pos >= max || state.src.charCodeAt(pos) !== 41) {
        state.pos = oldPos;
        return false;
      }
      pos++;
    } else {
      if (state.linkLevel > 0) {
        return false;
      }
      for (; pos < max; pos++) {
        code2 = state.src.charCodeAt(pos);
        if (code2 !== 32 && code2 !== 10) {
          break;
        }
      }
      if (pos < max && state.src.charCodeAt(pos) === 91) {
        start = pos + 1;
        pos = parseLinkLabel(state, pos);
        if (pos >= 0) {
          label = state.src.slice(start, pos++);
        } else {
          pos = start - 1;
        }
      }
      if (!label) {
        if (typeof label === "undefined") {
          pos = labelEnd + 1;
        }
        label = state.src.slice(labelStart, labelEnd);
      }
      ref = state.env.references[normalizeReference(label)];
      if (!ref) {
        state.pos = oldPos;
        return false;
      }
      href = ref.href;
      title = ref.title;
    }
    if (!silent) {
      state.pos = labelStart;
      state.posMax = labelEnd;
      if (isImage) {
        state.push({
          type: "image",
          src: href,
          title,
          alt: state.src.substr(labelStart, labelEnd - labelStart),
          level: state.level
        });
      } else {
        state.push({
          type: "link_open",
          href,
          title,
          level: state.level++
        });
        state.linkLevel++;
        state.parser.tokenize(state);
        state.linkLevel--;
        state.push({ type: "link_close", level: --state.level });
      }
    }
    state.pos = pos;
    state.posMax = max;
    return true;
  }
  function footnote_inline(state, silent) {
    var labelStart, labelEnd, footnoteId, oldLength, max = state.posMax, start = state.pos;
    if (start + 2 >= max) {
      return false;
    }
    if (state.src.charCodeAt(start) !== 94) {
      return false;
    }
    if (state.src.charCodeAt(start + 1) !== 91) {
      return false;
    }
    if (state.level >= state.options.maxNesting) {
      return false;
    }
    labelStart = start + 2;
    labelEnd = parseLinkLabel(state, start + 1);
    if (labelEnd < 0) {
      return false;
    }
    if (!silent) {
      if (!state.env.footnotes) {
        state.env.footnotes = {};
      }
      if (!state.env.footnotes.list) {
        state.env.footnotes.list = [];
      }
      footnoteId = state.env.footnotes.list.length;
      state.pos = labelStart;
      state.posMax = labelEnd;
      state.push({
        type: "footnote_ref",
        id: footnoteId,
        level: state.level
      });
      state.linkLevel++;
      oldLength = state.tokens.length;
      state.parser.tokenize(state);
      state.env.footnotes.list[footnoteId] = { tokens: state.tokens.splice(oldLength) };
      state.linkLevel--;
    }
    state.pos = labelEnd + 1;
    state.posMax = max;
    return true;
  }
  function footnote_ref(state, silent) {
    var label, pos, footnoteId, footnoteSubId, max = state.posMax, start = state.pos;
    if (start + 3 > max) {
      return false;
    }
    if (!state.env.footnotes || !state.env.footnotes.refs) {
      return false;
    }
    if (state.src.charCodeAt(start) !== 91) {
      return false;
    }
    if (state.src.charCodeAt(start + 1) !== 94) {
      return false;
    }
    if (state.level >= state.options.maxNesting) {
      return false;
    }
    for (pos = start + 2; pos < max; pos++) {
      if (state.src.charCodeAt(pos) === 32) {
        return false;
      }
      if (state.src.charCodeAt(pos) === 10) {
        return false;
      }
      if (state.src.charCodeAt(pos) === 93) {
        break;
      }
    }
    if (pos === start + 2) {
      return false;
    }
    if (pos >= max) {
      return false;
    }
    pos++;
    label = state.src.slice(start + 2, pos - 1);
    if (typeof state.env.footnotes.refs[":" + label] === "undefined") {
      return false;
    }
    if (!silent) {
      if (!state.env.footnotes.list) {
        state.env.footnotes.list = [];
      }
      if (state.env.footnotes.refs[":" + label] < 0) {
        footnoteId = state.env.footnotes.list.length;
        state.env.footnotes.list[footnoteId] = { label, count: 0 };
        state.env.footnotes.refs[":" + label] = footnoteId;
      } else {
        footnoteId = state.env.footnotes.refs[":" + label];
      }
      footnoteSubId = state.env.footnotes.list[footnoteId].count;
      state.env.footnotes.list[footnoteId].count++;
      state.push({
        type: "footnote_ref",
        id: footnoteId,
        subId: footnoteSubId,
        level: state.level
      });
    }
    state.pos = pos;
    state.posMax = max;
    return true;
  }
  var url_schemas = [
    "coap",
    "doi",
    "javascript",
    "aaa",
    "aaas",
    "about",
    "acap",
    "cap",
    "cid",
    "crid",
    "data",
    "dav",
    "dict",
    "dns",
    "file",
    "ftp",
    "geo",
    "go",
    "gopher",
    "h323",
    "http",
    "https",
    "iax",
    "icap",
    "im",
    "imap",
    "info",
    "ipp",
    "iris",
    "iris.beep",
    "iris.xpc",
    "iris.xpcs",
    "iris.lwz",
    "ldap",
    "mailto",
    "mid",
    "msrp",
    "msrps",
    "mtqp",
    "mupdate",
    "news",
    "nfs",
    "ni",
    "nih",
    "nntp",
    "opaquelocktoken",
    "pop",
    "pres",
    "rtsp",
    "service",
    "session",
    "shttp",
    "sieve",
    "sip",
    "sips",
    "sms",
    "snmp",
    "soap.beep",
    "soap.beeps",
    "tag",
    "tel",
    "telnet",
    "tftp",
    "thismessage",
    "tn3270",
    "tip",
    "tv",
    "urn",
    "vemmi",
    "ws",
    "wss",
    "xcon",
    "xcon-userid",
    "xmlrpc.beep",
    "xmlrpc.beeps",
    "xmpp",
    "z39.50r",
    "z39.50s",
    "adiumxtra",
    "afp",
    "afs",
    "aim",
    "apt",
    "attachment",
    "aw",
    "beshare",
    "bitcoin",
    "bolo",
    "callto",
    "chrome",
    "chrome-extension",
    "com-eventbrite-attendee",
    "content",
    "cvs",
    "dlna-playsingle",
    "dlna-playcontainer",
    "dtn",
    "dvb",
    "ed2k",
    "facetime",
    "feed",
    "finger",
    "fish",
    "gg",
    "git",
    "gizmoproject",
    "gtalk",
    "hcp",
    "icon",
    "ipn",
    "irc",
    "irc6",
    "ircs",
    "itms",
    "jar",
    "jms",
    "keyparc",
    "lastfm",
    "ldaps",
    "magnet",
    "maps",
    "market",
    "message",
    "mms",
    "ms-help",
    "msnim",
    "mumble",
    "mvn",
    "notes",
    "oid",
    "palm",
    "paparazzi",
    "platform",
    "proxy",
    "psyc",
    "query",
    "res",
    "resource",
    "rmi",
    "rsync",
    "rtmp",
    "secondlife",
    "sftp",
    "sgn",
    "skype",
    "smb",
    "soldat",
    "spotify",
    "ssh",
    "steam",
    "svn",
    "teamspeak",
    "things",
    "udp",
    "unreal",
    "ut2004",
    "ventrilo",
    "view-source",
    "webcal",
    "wtai",
    "wyciwyg",
    "xfire",
    "xri",
    "ymsgr"
  ];
  var EMAIL_RE = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
  var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
  function autolink(state, silent) {
    var tail, linkMatch, emailMatch, url2, fullUrl, pos = state.pos;
    if (state.src.charCodeAt(pos) !== 60) {
      return false;
    }
    tail = state.src.slice(pos);
    if (tail.indexOf(">") < 0) {
      return false;
    }
    linkMatch = tail.match(AUTOLINK_RE);
    if (linkMatch) {
      if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) {
        return false;
      }
      url2 = linkMatch[0].slice(1, -1);
      fullUrl = normalizeLink(url2);
      if (!state.parser.validateLink(url2)) {
        return false;
      }
      if (!silent) {
        state.push({
          type: "link_open",
          href: fullUrl,
          level: state.level
        });
        state.push({
          type: "text",
          content: url2,
          level: state.level + 1
        });
        state.push({ type: "link_close", level: state.level });
      }
      state.pos += linkMatch[0].length;
      return true;
    }
    emailMatch = tail.match(EMAIL_RE);
    if (emailMatch) {
      url2 = emailMatch[0].slice(1, -1);
      fullUrl = normalizeLink("mailto:" + url2);
      if (!state.parser.validateLink(fullUrl)) {
        return false;
      }
      if (!silent) {
        state.push({
          type: "link_open",
          href: fullUrl,
          level: state.level
        });
        state.push({
          type: "text",
          content: url2,
          level: state.level + 1
        });
        state.push({ type: "link_close", level: state.level });
      }
      state.pos += emailMatch[0].length;
      return true;
    }
    return false;
  }
  function replace$1(regex, options) {
    regex = regex.source;
    options = options || "";
    return function self2(name2, val) {
      if (!name2) {
        return new RegExp(regex, options);
      }
      val = val.source || val;
      regex = regex.replace(name2, val);
      return self2;
    };
  }
  var attr_name = /[a-zA-Z_:][a-zA-Z0-9:._-]*/;
  var unquoted = /[^"'=<>`\x00-\x20]+/;
  var single_quoted = /'[^']*'/;
  var double_quoted = /"[^"]*"/;
  var attr_value = replace$1(/(?:unquoted|single_quoted|double_quoted)/)("unquoted", unquoted)("single_quoted", single_quoted)("double_quoted", double_quoted)();
  var attribute = replace$1(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name", attr_name)("attr_value", attr_value)();
  var open_tag = replace$1(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute", attribute)();
  var close_tag = /<\/[A-Za-z][A-Za-z0-9]*\s*>/;
  var comment = /<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/;
  var processing = /<[?].*?[?]>/;
  var declaration = /<![A-Z]+\s+[^>]*>/;
  var cdata = /<!\[CDATA\[[\s\S]*?\]\]>/;
  var HTML_TAG_RE = replace$1(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag", open_tag)("close_tag", close_tag)("comment", comment)("processing", processing)("declaration", declaration)("cdata", cdata)();
  function isLetter$2(ch2) {
    var lc2 = ch2 | 32;
    return lc2 >= 97 && lc2 <= 122;
  }
  function htmltag(state, silent) {
    var ch2, match, max, pos = state.pos;
    if (!state.options.html) {
      return false;
    }
    max = state.posMax;
    if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max) {
      return false;
    }
    ch2 = state.src.charCodeAt(pos + 1);
    if (ch2 !== 33 && ch2 !== 63 && ch2 !== 47 && !isLetter$2(ch2)) {
      return false;
    }
    match = state.src.slice(pos).match(HTML_TAG_RE);
    if (!match) {
      return false;
    }
    if (!silent) {
      state.push({
        type: "htmltag",
        content: state.src.slice(pos, pos + match[0].length),
        level: state.level
      });
    }
    state.pos += match[0].length;
    return true;
  }
  var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
  var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
  function entity(state, silent) {
    var ch2, code2, match, pos = state.pos, max = state.posMax;
    if (state.src.charCodeAt(pos) !== 38) {
      return false;
    }
    if (pos + 1 < max) {
      ch2 = state.src.charCodeAt(pos + 1);
      if (ch2 === 35) {
        match = state.src.slice(pos).match(DIGITAL_RE);
        if (match) {
          if (!silent) {
            code2 = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
            state.pending += isValidEntityCode(code2) ? fromCodePoint(code2) : fromCodePoint(65533);
          }
          state.pos += match[0].length;
          return true;
        }
      } else {
        match = state.src.slice(pos).match(NAMED_RE);
        if (match) {
          var decoded = decodeEntity(match[1]);
          if (match[1] !== decoded) {
            if (!silent) {
              state.pending += decoded;
            }
            state.pos += match[0].length;
            return true;
          }
        }
      }
    }
    if (!silent) {
      state.pending += "&";
    }
    state.pos++;
    return true;
  }
  var _rules$2 = [
    ["text", text],
    ["newline", newline],
    ["escape", escape$1],
    ["backticks", backticks],
    ["del", del],
    ["ins", ins],
    ["mark", mark],
    ["emphasis", emphasis],
    ["sub", sub],
    ["sup", sup],
    ["links", links],
    ["footnote_inline", footnote_inline],
    ["footnote_ref", footnote_ref],
    ["autolink", autolink],
    ["htmltag", htmltag],
    ["entity", entity]
  ];
  function ParserInline() {
    this.ruler = new Ruler();
    for (var i2 = 0; i2 < _rules$2.length; i2++) {
      this.ruler.push(_rules$2[i2][0], _rules$2[i2][1]);
    }
    this.validateLink = validateLink;
  }
  ParserInline.prototype.skipToken = function(state) {
    var rules2 = this.ruler.getRules("");
    var len = rules2.length;
    var pos = state.pos;
    var i2, cached_pos;
    if ((cached_pos = state.cacheGet(pos)) > 0) {
      state.pos = cached_pos;
      return;
    }
    for (i2 = 0; i2 < len; i2++) {
      if (rules2[i2](state, true)) {
        state.cacheSet(pos, state.pos);
        return;
      }
    }
    state.pos++;
    state.cacheSet(pos, state.pos);
  };
  ParserInline.prototype.tokenize = function(state) {
    var rules2 = this.ruler.getRules("");
    var len = rules2.length;
    var end = state.posMax;
    var ok2, i2;
    while (state.pos < end) {
      for (i2 = 0; i2 < len; i2++) {
        ok2 = rules2[i2](state, false);
        if (ok2) {
          break;
        }
      }
      if (ok2) {
        if (state.pos >= end) {
          break;
        }
        continue;
      }
      state.pending += state.src[state.pos++];
    }
    if (state.pending) {
      state.pushPending();
    }
  };
  ParserInline.prototype.parse = function(str, options, env, outTokens) {
    var state = new StateInline(str, this, options, env, outTokens);
    this.tokenize(state);
  };
  function validateLink(url2) {
    var BAD_PROTOCOLS = ["vbscript", "javascript", "file", "data"];
    var str = url2.trim().toLowerCase();
    str = replaceEntities(str);
    if (str.indexOf(":") !== -1 && BAD_PROTOCOLS.indexOf(str.split(":")[0]) !== -1) {
      return false;
    }
    return true;
  }
  var defaultConfig = {
    options: {
      html: false,
      // Enable HTML tags in source
      xhtmlOut: false,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkTarget: "",
      // set target to open link in
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
      quotes: "“”‘’",
      // Highlighter function. Should return escaped HTML,
      // or '' if input not changed
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: [
          "block",
          "inline",
          "references",
          "replacements",
          "smartquotes",
          "references",
          "abbr2",
          "footnote_tail"
        ]
      },
      block: {
        rules: [
          "blockquote",
          "code",
          "fences",
          "footnote",
          "heading",
          "hr",
          "htmlblock",
          "lheading",
          "list",
          "paragraph",
          "table"
        ]
      },
      inline: {
        rules: [
          "autolink",
          "backticks",
          "del",
          "emphasis",
          "entity",
          "escape",
          "footnote_ref",
          "htmltag",
          "links",
          "newline",
          "text"
        ]
      }
    }
  };
  var fullConfig = {
    options: {
      html: false,
      // Enable HTML tags in source
      xhtmlOut: false,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkTarget: "",
      // set target to open link in
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
      quotes: "“”‘’",
      // Highlighter function. Should return escaped HTML,
      // or '' if input not changed
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      // Don't restrict core/block/inline rules
      core: {},
      block: {},
      inline: {}
    }
  };
  var commonmarkConfig = {
    options: {
      html: true,
      // Enable HTML tags in source
      xhtmlOut: true,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkTarget: "",
      // set target to open link in
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
      quotes: "“”‘’",
      // Highlighter function. Should return escaped HTML,
      // or '' if input not changed
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: [
          "block",
          "inline",
          "references",
          "abbr2"
        ]
      },
      block: {
        rules: [
          "blockquote",
          "code",
          "fences",
          "heading",
          "hr",
          "htmlblock",
          "lheading",
          "list",
          "paragraph"
        ]
      },
      inline: {
        rules: [
          "autolink",
          "backticks",
          "emphasis",
          "entity",
          "escape",
          "htmltag",
          "links",
          "newline",
          "text"
        ]
      }
    }
  };
  var config = {
    "default": defaultConfig,
    "full": fullConfig,
    "commonmark": commonmarkConfig
  };
  function StateCore(instance2, str, env) {
    this.src = str;
    this.env = env;
    this.options = instance2.options;
    this.tokens = [];
    this.inlineMode = false;
    this.inline = instance2.inline;
    this.block = instance2.block;
    this.renderer = instance2.renderer;
    this.typographer = instance2.typographer;
  }
  function Remarkable(preset, options) {
    if (typeof preset !== "string") {
      options = preset;
      preset = "default";
    }
    if (options && options.linkify != null) {
      console.warn(
        "linkify option is removed. Use linkify plugin instead:\n\nimport Remarkable from 'remarkable';\nimport linkify from 'remarkable/linkify';\nnew Remarkable().use(linkify)\n"
      );
    }
    this.inline = new ParserInline();
    this.block = new ParserBlock();
    this.core = new Core();
    this.renderer = new Renderer();
    this.ruler = new Ruler();
    this.options = {};
    this.configure(config[preset]);
    this.set(options || {});
  }
  Remarkable.prototype.set = function(options) {
    assign(this.options, options);
  };
  Remarkable.prototype.configure = function(presets) {
    var self2 = this;
    if (!presets) {
      throw new Error("Wrong `remarkable` preset, check name/content");
    }
    if (presets.options) {
      self2.set(presets.options);
    }
    if (presets.components) {
      Object.keys(presets.components).forEach(function(name2) {
        if (presets.components[name2].rules) {
          self2[name2].ruler.enable(presets.components[name2].rules, true);
        }
      });
    }
  };
  Remarkable.prototype.use = function(plugin, options) {
    plugin(this, options);
    return this;
  };
  Remarkable.prototype.parse = function(str, env) {
    var state = new StateCore(this, str, env);
    this.core.process(state);
    return state.tokens;
  };
  Remarkable.prototype.render = function(str, env) {
    env = env || {};
    return this.renderer.render(this.parse(str, env), this.options, env);
  };
  Remarkable.prototype.parseInline = function(str, env) {
    var state = new StateCore(this, str, env);
    state.inlineMode = true;
    this.core.process(state);
    return state.tokens;
  };
  Remarkable.prototype.renderInline = function(str, env) {
    env = env || {};
    return this.renderer.render(this.parseInline(str, env), this.options, env);
  };
  var version$2 = "3.16.2";
  function defaults(dest, src) {
    for (var prop in src) {
      if (src.hasOwnProperty(prop) && dest[prop] === void 0) {
        dest[prop] = src[prop];
      }
    }
    return dest;
  }
  function ellipsis(str, truncateLen, ellipsisChars) {
    var ellipsisLength;
    if (str.length > truncateLen) {
      if (ellipsisChars == null) {
        ellipsisChars = "&hellip;";
        ellipsisLength = 3;
      } else {
        ellipsisLength = ellipsisChars.length;
      }
      str = str.substring(0, truncateLen - ellipsisLength) + ellipsisChars;
    }
    return str;
  }
  function indexOf(arr, element) {
    if (Array.prototype.indexOf) {
      return arr.indexOf(element);
    } else {
      for (var i2 = 0, len = arr.length; i2 < len; i2++) {
        if (arr[i2] === element)
          return i2;
      }
      return -1;
    }
  }
  function remove(arr, fn) {
    for (var i2 = arr.length - 1; i2 >= 0; i2--) {
      if (fn(arr[i2]) === true) {
        arr.splice(i2, 1);
      }
    }
  }
  function splitAndCapture(str, splitRegex) {
    if (!splitRegex.global)
      throw new Error("`splitRegex` must have the 'g' flag set");
    var result = [], lastIdx = 0, match;
    while (match = splitRegex.exec(str)) {
      result.push(str.substring(lastIdx, match.index));
      result.push(match[0]);
      lastIdx = match.index + match[0].length;
    }
    result.push(str.substring(lastIdx));
    return result;
  }
  function throwUnhandledCaseError(theValue) {
    throw new Error("Unhandled case for value: '".concat(theValue, "'"));
  }
  var HtmlTag = (
    /** @class */
    function() {
      function HtmlTag2(cfg) {
        if (cfg === void 0) {
          cfg = {};
        }
        this.tagName = "";
        this.attrs = {};
        this.innerHTML = "";
        this.whitespaceRegex = /\s+/;
        this.tagName = cfg.tagName || "";
        this.attrs = cfg.attrs || {};
        this.innerHTML = cfg.innerHtml || cfg.innerHTML || "";
      }
      HtmlTag2.prototype.setTagName = function(tagName) {
        this.tagName = tagName;
        return this;
      };
      HtmlTag2.prototype.getTagName = function() {
        return this.tagName || "";
      };
      HtmlTag2.prototype.setAttr = function(attrName, attrValue) {
        var tagAttrs = this.getAttrs();
        tagAttrs[attrName] = attrValue;
        return this;
      };
      HtmlTag2.prototype.getAttr = function(attrName) {
        return this.getAttrs()[attrName];
      };
      HtmlTag2.prototype.setAttrs = function(attrs) {
        Object.assign(this.getAttrs(), attrs);
        return this;
      };
      HtmlTag2.prototype.getAttrs = function() {
        return this.attrs || (this.attrs = {});
      };
      HtmlTag2.prototype.setClass = function(cssClass) {
        return this.setAttr("class", cssClass);
      };
      HtmlTag2.prototype.addClass = function(cssClass) {
        var classAttr = this.getClass(), whitespaceRegex = this.whitespaceRegex, classes = !classAttr ? [] : classAttr.split(whitespaceRegex), newClasses = cssClass.split(whitespaceRegex), newClass;
        while (newClass = newClasses.shift()) {
          if (indexOf(classes, newClass) === -1) {
            classes.push(newClass);
          }
        }
        this.getAttrs()["class"] = classes.join(" ");
        return this;
      };
      HtmlTag2.prototype.removeClass = function(cssClass) {
        var classAttr = this.getClass(), whitespaceRegex = this.whitespaceRegex, classes = !classAttr ? [] : classAttr.split(whitespaceRegex), removeClasses = cssClass.split(whitespaceRegex), removeClass;
        while (classes.length && (removeClass = removeClasses.shift())) {
          var idx = indexOf(classes, removeClass);
          if (idx !== -1) {
            classes.splice(idx, 1);
          }
        }
        this.getAttrs()["class"] = classes.join(" ");
        return this;
      };
      HtmlTag2.prototype.getClass = function() {
        return this.getAttrs()["class"] || "";
      };
      HtmlTag2.prototype.hasClass = function(cssClass) {
        return (" " + this.getClass() + " ").indexOf(" " + cssClass + " ") !== -1;
      };
      HtmlTag2.prototype.setInnerHTML = function(html) {
        this.innerHTML = html;
        return this;
      };
      HtmlTag2.prototype.setInnerHtml = function(html) {
        return this.setInnerHTML(html);
      };
      HtmlTag2.prototype.getInnerHTML = function() {
        return this.innerHTML || "";
      };
      HtmlTag2.prototype.getInnerHtml = function() {
        return this.getInnerHTML();
      };
      HtmlTag2.prototype.toAnchorString = function() {
        var tagName = this.getTagName(), attrsStr = this.buildAttrsStr();
        attrsStr = attrsStr ? " " + attrsStr : "";
        return ["<", tagName, attrsStr, ">", this.getInnerHtml(), "</", tagName, ">"].join("");
      };
      HtmlTag2.prototype.buildAttrsStr = function() {
        if (!this.attrs)
          return "";
        var attrs = this.getAttrs(), attrsArr = [];
        for (var prop in attrs) {
          if (attrs.hasOwnProperty(prop)) {
            attrsArr.push(prop + '="' + attrs[prop] + '"');
          }
        }
        return attrsArr.join(" ");
      };
      return HtmlTag2;
    }()
  );
  function truncateSmart(url2, truncateLen, ellipsisChars) {
    var ellipsisLengthBeforeParsing;
    var ellipsisLength;
    if (ellipsisChars == null) {
      ellipsisChars = "&hellip;";
      ellipsisLength = 3;
      ellipsisLengthBeforeParsing = 8;
    } else {
      ellipsisLength = ellipsisChars.length;
      ellipsisLengthBeforeParsing = ellipsisChars.length;
    }
    var parse_url = function(url3) {
      var urlObj2 = {};
      var urlSub = url3;
      var match = urlSub.match(/^([a-z]+):\/\//i);
      if (match) {
        urlObj2.scheme = match[1];
        urlSub = urlSub.substr(match[0].length);
      }
      match = urlSub.match(/^(.*?)(?=(\?|#|\/|$))/i);
      if (match) {
        urlObj2.host = match[1];
        urlSub = urlSub.substr(match[0].length);
      }
      match = urlSub.match(/^\/(.*?)(?=(\?|#|$))/i);
      if (match) {
        urlObj2.path = match[1];
        urlSub = urlSub.substr(match[0].length);
      }
      match = urlSub.match(/^\?(.*?)(?=(#|$))/i);
      if (match) {
        urlObj2.query = match[1];
        urlSub = urlSub.substr(match[0].length);
      }
      match = urlSub.match(/^#(.*?)$/i);
      if (match) {
        urlObj2.fragment = match[1];
      }
      return urlObj2;
    };
    var buildUrl = function(urlObj2) {
      var url3 = "";
      if (urlObj2.scheme && urlObj2.host) {
        url3 += urlObj2.scheme + "://";
      }
      if (urlObj2.host) {
        url3 += urlObj2.host;
      }
      if (urlObj2.path) {
        url3 += "/" + urlObj2.path;
      }
      if (urlObj2.query) {
        url3 += "?" + urlObj2.query;
      }
      if (urlObj2.fragment) {
        url3 += "#" + urlObj2.fragment;
      }
      return url3;
    };
    var buildSegment = function(segment, remainingAvailableLength3) {
      var remainingAvailableLengthHalf = remainingAvailableLength3 / 2, startOffset = Math.ceil(remainingAvailableLengthHalf), endOffset = -1 * Math.floor(remainingAvailableLengthHalf), end2 = "";
      if (endOffset < 0) {
        end2 = segment.substr(endOffset);
      }
      return segment.substr(0, startOffset) + ellipsisChars + end2;
    };
    if (url2.length <= truncateLen) {
      return url2;
    }
    var availableLength = truncateLen - ellipsisLength;
    var urlObj = parse_url(url2);
    if (urlObj.query) {
      var matchQuery = urlObj.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);
      if (matchQuery) {
        urlObj.query = urlObj.query.substr(0, matchQuery[1].length);
        url2 = buildUrl(urlObj);
      }
    }
    if (url2.length <= truncateLen) {
      return url2;
    }
    if (urlObj.host) {
      urlObj.host = urlObj.host.replace(/^www\./, "");
      url2 = buildUrl(urlObj);
    }
    if (url2.length <= truncateLen) {
      return url2;
    }
    var str = "";
    if (urlObj.host) {
      str += urlObj.host;
    }
    if (str.length >= availableLength) {
      if (urlObj.host.length == truncateLen) {
        return (urlObj.host.substr(0, truncateLen - ellipsisLength) + ellipsisChars).substr(0, availableLength + ellipsisLengthBeforeParsing);
      }
      return buildSegment(str, availableLength).substr(0, availableLength + ellipsisLengthBeforeParsing);
    }
    var pathAndQuery = "";
    if (urlObj.path) {
      pathAndQuery += "/" + urlObj.path;
    }
    if (urlObj.query) {
      pathAndQuery += "?" + urlObj.query;
    }
    if (pathAndQuery) {
      if ((str + pathAndQuery).length >= availableLength) {
        if ((str + pathAndQuery).length == truncateLen) {
          return (str + pathAndQuery).substr(0, truncateLen);
        }
        var remainingAvailableLength = availableLength - str.length;
        return (str + buildSegment(pathAndQuery, remainingAvailableLength)).substr(0, availableLength + ellipsisLengthBeforeParsing);
      } else {
        str += pathAndQuery;
      }
    }
    if (urlObj.fragment) {
      var fragment = "#" + urlObj.fragment;
      if ((str + fragment).length >= availableLength) {
        if ((str + fragment).length == truncateLen) {
          return (str + fragment).substr(0, truncateLen);
        }
        var remainingAvailableLength2 = availableLength - str.length;
        return (str + buildSegment(fragment, remainingAvailableLength2)).substr(0, availableLength + ellipsisLengthBeforeParsing);
      } else {
        str += fragment;
      }
    }
    if (urlObj.scheme && urlObj.host) {
      var scheme = urlObj.scheme + "://";
      if ((str + scheme).length < availableLength) {
        return (scheme + str).substr(0, truncateLen);
      }
    }
    if (str.length <= truncateLen) {
      return str;
    }
    var end = "";
    if (availableLength > 0) {
      end = str.substr(-1 * Math.floor(availableLength / 2));
    }
    return (str.substr(0, Math.ceil(availableLength / 2)) + ellipsisChars + end).substr(0, availableLength + ellipsisLengthBeforeParsing);
  }
  function truncateMiddle(url2, truncateLen, ellipsisChars) {
    if (url2.length <= truncateLen) {
      return url2;
    }
    var ellipsisLengthBeforeParsing;
    var ellipsisLength;
    if (ellipsisChars == null) {
      ellipsisChars = "&hellip;";
      ellipsisLengthBeforeParsing = 8;
      ellipsisLength = 3;
    } else {
      ellipsisLengthBeforeParsing = ellipsisChars.length;
      ellipsisLength = ellipsisChars.length;
    }
    var availableLength = truncateLen - ellipsisLength;
    var end = "";
    if (availableLength > 0) {
      end = url2.substr(-1 * Math.floor(availableLength / 2));
    }
    return (url2.substr(0, Math.ceil(availableLength / 2)) + ellipsisChars + end).substr(0, availableLength + ellipsisLengthBeforeParsing);
  }
  function truncateEnd(anchorText, truncateLen, ellipsisChars) {
    return ellipsis(anchorText, truncateLen, ellipsisChars);
  }
  var AnchorTagBuilder = (
    /** @class */
    function() {
      function AnchorTagBuilder2(cfg) {
        if (cfg === void 0) {
          cfg = {};
        }
        this.newWindow = false;
        this.truncate = {};
        this.className = "";
        this.newWindow = cfg.newWindow || false;
        this.truncate = cfg.truncate || {};
        this.className = cfg.className || "";
      }
      AnchorTagBuilder2.prototype.build = function(match) {
        return new HtmlTag({
          tagName: "a",
          attrs: this.createAttrs(match),
          innerHtml: this.processAnchorText(match.getAnchorText())
        });
      };
      AnchorTagBuilder2.prototype.createAttrs = function(match) {
        var attrs = {
          href: match.getAnchorHref()
          // we'll always have the `href` attribute
        };
        var cssClass = this.createCssClass(match);
        if (cssClass) {
          attrs["class"] = cssClass;
        }
        if (this.newWindow) {
          attrs["target"] = "_blank";
          attrs["rel"] = "noopener noreferrer";
        }
        if (this.truncate) {
          if (this.truncate.length && this.truncate.length < match.getAnchorText().length) {
            attrs["title"] = match.getAnchorHref();
          }
        }
        return attrs;
      };
      AnchorTagBuilder2.prototype.createCssClass = function(match) {
        var className = this.className;
        if (!className) {
          return "";
        } else {
          var returnClasses = [className], cssClassSuffixes = match.getCssClassSuffixes();
          for (var i2 = 0, len = cssClassSuffixes.length; i2 < len; i2++) {
            returnClasses.push(className + "-" + cssClassSuffixes[i2]);
          }
          return returnClasses.join(" ");
        }
      };
      AnchorTagBuilder2.prototype.processAnchorText = function(anchorText) {
        anchorText = this.doTruncate(anchorText);
        return anchorText;
      };
      AnchorTagBuilder2.prototype.doTruncate = function(anchorText) {
        var truncate = this.truncate;
        if (!truncate || !truncate.length)
          return anchorText;
        var truncateLength = truncate.length, truncateLocation = truncate.location;
        if (truncateLocation === "smart") {
          return truncateSmart(anchorText, truncateLength);
        } else if (truncateLocation === "middle") {
          return truncateMiddle(anchorText, truncateLength);
        } else {
          return truncateEnd(anchorText, truncateLength);
        }
      };
      return AnchorTagBuilder2;
    }()
  );
  var Match = (
    /** @class */
    function() {
      function Match2(cfg) {
        this.__jsduckDummyDocProp = null;
        this.matchedText = "";
        this.offset = 0;
        this.tagBuilder = cfg.tagBuilder;
        this.matchedText = cfg.matchedText;
        this.offset = cfg.offset;
      }
      Match2.prototype.getMatchedText = function() {
        return this.matchedText;
      };
      Match2.prototype.setOffset = function(offset) {
        this.offset = offset;
      };
      Match2.prototype.getOffset = function() {
        return this.offset;
      };
      Match2.prototype.getCssClassSuffixes = function() {
        return [this.getType()];
      };
      Match2.prototype.buildTag = function() {
        return this.tagBuilder.build(this);
      };
      return Match2;
    }()
  );
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  function __extends(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  }
  var __assign = function() {
    __assign = Object.assign || function __assign2(t2) {
      for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2))
            t2[p2] = s2[p2];
      }
      return t2;
    };
    return __assign.apply(this, arguments);
  };
  typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e2 = new Error(message);
    return e2.name = "SuppressedError", e2.error = error, e2.suppressed = suppressed, e2;
  };
  var EmailMatch = (
    /** @class */
    function(_super) {
      __extends(EmailMatch2, _super);
      function EmailMatch2(cfg) {
        var _this = _super.call(this, cfg) || this;
        _this.email = "";
        _this.email = cfg.email;
        return _this;
      }
      EmailMatch2.prototype.getType = function() {
        return "email";
      };
      EmailMatch2.prototype.getEmail = function() {
        return this.email;
      };
      EmailMatch2.prototype.getAnchorHref = function() {
        return "mailto:" + this.email;
      };
      EmailMatch2.prototype.getAnchorText = function() {
        return this.email;
      };
      return EmailMatch2;
    }(Match)
  );
  var HashtagMatch = (
    /** @class */
    function(_super) {
      __extends(HashtagMatch2, _super);
      function HashtagMatch2(cfg) {
        var _this = _super.call(this, cfg) || this;
        _this.serviceName = "";
        _this.hashtag = "";
        _this.serviceName = cfg.serviceName;
        _this.hashtag = cfg.hashtag;
        return _this;
      }
      HashtagMatch2.prototype.getType = function() {
        return "hashtag";
      };
      HashtagMatch2.prototype.getServiceName = function() {
        return this.serviceName;
      };
      HashtagMatch2.prototype.getHashtag = function() {
        return this.hashtag;
      };
      HashtagMatch2.prototype.getAnchorHref = function() {
        var serviceName = this.serviceName, hashtag = this.hashtag;
        switch (serviceName) {
          case "twitter":
            return "https://twitter.com/hashtag/" + hashtag;
          case "facebook":
            return "https://www.facebook.com/hashtag/" + hashtag;
          case "instagram":
            return "https://instagram.com/explore/tags/" + hashtag;
          case "tiktok":
            return "https://www.tiktok.com/tag/" + hashtag;
          default:
            throw new Error("Unknown service name to point hashtag to: " + serviceName);
        }
      };
      HashtagMatch2.prototype.getAnchorText = function() {
        return "#" + this.hashtag;
      };
      return HashtagMatch2;
    }(Match)
  );
  var MentionMatch = (
    /** @class */
    function(_super) {
      __extends(MentionMatch2, _super);
      function MentionMatch2(cfg) {
        var _this = _super.call(this, cfg) || this;
        _this.serviceName = "twitter";
        _this.mention = "";
        _this.mention = cfg.mention;
        _this.serviceName = cfg.serviceName;
        return _this;
      }
      MentionMatch2.prototype.getType = function() {
        return "mention";
      };
      MentionMatch2.prototype.getMention = function() {
        return this.mention;
      };
      MentionMatch2.prototype.getServiceName = function() {
        return this.serviceName;
      };
      MentionMatch2.prototype.getAnchorHref = function() {
        switch (this.serviceName) {
          case "twitter":
            return "https://twitter.com/" + this.mention;
          case "instagram":
            return "https://instagram.com/" + this.mention;
          case "soundcloud":
            return "https://soundcloud.com/" + this.mention;
          case "tiktok":
            return "https://www.tiktok.com/@" + this.mention;
          default:
            throw new Error("Unknown service name to point mention to: " + this.serviceName);
        }
      };
      MentionMatch2.prototype.getAnchorText = function() {
        return "@" + this.mention;
      };
      MentionMatch2.prototype.getCssClassSuffixes = function() {
        var cssClassSuffixes = _super.prototype.getCssClassSuffixes.call(this), serviceName = this.getServiceName();
        if (serviceName) {
          cssClassSuffixes.push(serviceName);
        }
        return cssClassSuffixes;
      };
      return MentionMatch2;
    }(Match)
  );
  var PhoneMatch = (
    /** @class */
    function(_super) {
      __extends(PhoneMatch2, _super);
      function PhoneMatch2(cfg) {
        var _this = _super.call(this, cfg) || this;
        _this.number = "";
        _this.plusSign = false;
        _this.number = cfg.number;
        _this.plusSign = cfg.plusSign;
        return _this;
      }
      PhoneMatch2.prototype.getType = function() {
        return "phone";
      };
      PhoneMatch2.prototype.getPhoneNumber = function() {
        return this.number;
      };
      PhoneMatch2.prototype.getNumber = function() {
        return this.getPhoneNumber();
      };
      PhoneMatch2.prototype.getAnchorHref = function() {
        return "tel:" + (this.plusSign ? "+" : "") + this.number;
      };
      PhoneMatch2.prototype.getAnchorText = function() {
        return this.matchedText;
      };
      return PhoneMatch2;
    }(Match)
  );
  var UrlMatch = (
    /** @class */
    function(_super) {
      __extends(UrlMatch2, _super);
      function UrlMatch2(cfg) {
        var _this = _super.call(this, cfg) || this;
        _this.url = "";
        _this.urlMatchType = "scheme";
        _this.protocolUrlMatch = false;
        _this.protocolRelativeMatch = false;
        _this.stripPrefix = {
          scheme: true,
          www: true
        };
        _this.stripTrailingSlash = true;
        _this.decodePercentEncoding = true;
        _this.schemePrefixRegex = /^(https?:\/\/)?/i;
        _this.wwwPrefixRegex = /^(https?:\/\/)?(www\.)?/i;
        _this.protocolRelativeRegex = /^\/\//;
        _this.protocolPrepended = false;
        _this.urlMatchType = cfg.urlMatchType;
        _this.url = cfg.url;
        _this.protocolUrlMatch = cfg.protocolUrlMatch;
        _this.protocolRelativeMatch = cfg.protocolRelativeMatch;
        _this.stripPrefix = cfg.stripPrefix;
        _this.stripTrailingSlash = cfg.stripTrailingSlash;
        _this.decodePercentEncoding = cfg.decodePercentEncoding;
        return _this;
      }
      UrlMatch2.prototype.getType = function() {
        return "url";
      };
      UrlMatch2.prototype.getUrlMatchType = function() {
        return this.urlMatchType;
      };
      UrlMatch2.prototype.getUrl = function() {
        var url2 = this.url;
        if (!this.protocolRelativeMatch && !this.protocolUrlMatch && !this.protocolPrepended) {
          url2 = this.url = "http://" + url2;
          this.protocolPrepended = true;
        }
        return url2;
      };
      UrlMatch2.prototype.getAnchorHref = function() {
        var url2 = this.getUrl();
        return url2.replace(/&amp;/g, "&");
      };
      UrlMatch2.prototype.getAnchorText = function() {
        var anchorText = this.getMatchedText();
        if (this.protocolRelativeMatch) {
          anchorText = this.stripProtocolRelativePrefix(anchorText);
        }
        if (this.stripPrefix.scheme) {
          anchorText = this.stripSchemePrefix(anchorText);
        }
        if (this.stripPrefix.www) {
          anchorText = this.stripWwwPrefix(anchorText);
        }
        if (this.stripTrailingSlash) {
          anchorText = this.removeTrailingSlash(anchorText);
        }
        if (this.decodePercentEncoding) {
          anchorText = this.removePercentEncoding(anchorText);
        }
        return anchorText;
      };
      UrlMatch2.prototype.stripSchemePrefix = function(url2) {
        return url2.replace(this.schemePrefixRegex, "");
      };
      UrlMatch2.prototype.stripWwwPrefix = function(url2) {
        return url2.replace(this.wwwPrefixRegex, "$1");
      };
      UrlMatch2.prototype.stripProtocolRelativePrefix = function(text2) {
        return text2.replace(this.protocolRelativeRegex, "");
      };
      UrlMatch2.prototype.removeTrailingSlash = function(anchorText) {
        if (anchorText.charAt(anchorText.length - 1) === "/") {
          anchorText = anchorText.slice(0, -1);
        }
        return anchorText;
      };
      UrlMatch2.prototype.removePercentEncoding = function(anchorText) {
        var preProcessedEntityAnchorText = anchorText.replace(/%22/gi, "&quot;").replace(/%26/gi, "&amp;").replace(/%27/gi, "&#39;").replace(/%3C/gi, "&lt;").replace(/%3E/gi, "&gt;");
        try {
          return decodeURIComponent(preProcessedEntityAnchorText);
        } catch (e2) {
          return preProcessedEntityAnchorText;
        }
      };
      return UrlMatch2;
    }(Match)
  );
  var Matcher = (
    /** @class */
    function() {
      function Matcher2(cfg) {
        this.__jsduckDummyDocProp = null;
        this.tagBuilder = cfg.tagBuilder;
      }
      return Matcher2;
    }()
  );
  var letterRe = /[A-Za-z]/;
  var digitRe = /[\d]/;
  var nonDigitRe = /[\D]/;
  var whitespaceRe = /\s/;
  var quoteRe = /['"]/;
  var controlCharsRe = /[\x00-\x1F\x7F]/;
  var alphaCharsStr = /A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC/.source;
  var emojiStr = /\u2700-\u27bf\udde6-\uddff\ud800-\udbff\udc00-\udfff\ufe0e\ufe0f\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0\ud83c\udffb-\udfff\u200d\u3299\u3297\u303d\u3030\u24c2\ud83c\udd70-\udd71\udd7e-\udd7f\udd8e\udd91-\udd9a\udde6-\uddff\ude01-\ude02\ude1a\ude2f\ude32-\ude3a\ude50-\ude51\u203c\u2049\u25aa-\u25ab\u25b6\u25c0\u25fb-\u25fe\u00a9\u00ae\u2122\u2139\udc04\u2600-\u26FF\u2b05\u2b06\u2b07\u2b1b\u2b1c\u2b50\u2b55\u231a\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\udccf\u2935\u2934\u2190-\u21ff/.source;
  var marksStr = /\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F/.source;
  var alphaCharsAndMarksStr = alphaCharsStr + emojiStr + marksStr;
  var decimalNumbersStr = /0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/.source;
  var alphaNumericCharsStr = alphaCharsAndMarksStr + decimalNumbersStr;
  var alphaNumericAndMarksCharsStr = alphaCharsAndMarksStr + decimalNumbersStr;
  var alphaNumericAndMarksCharRe = new RegExp("[".concat(alphaNumericAndMarksCharsStr, "]"));
  var ipStr = "(?:[" + decimalNumbersStr + "]{1,3}\\.){3}[" + decimalNumbersStr + "]{1,3}";
  var domainLabelStr = "[" + alphaNumericAndMarksCharsStr + "](?:[" + alphaNumericAndMarksCharsStr + "\\-_]{0,61}[" + alphaNumericAndMarksCharsStr + "])?";
  var getDomainLabelStr = function(group) {
    return "(?=(" + domainLabelStr + "))\\" + group;
  };
  var getDomainNameStr = function(group) {
    return "(?:" + getDomainLabelStr(group) + "(?:\\." + getDomainLabelStr(group + 1) + "){0,126}|" + ipStr + ")";
  };
  var domainNameCharRegex = alphaNumericAndMarksCharRe;
  var tldRegex = /(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|northwesternmutual|travelersinsurance|vermögensberatung|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbah1a3hjkrd|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|vermögensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--mgbcpq6gpa1a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbaakc7dvf|xn--mgbc0a9azcg|xn--nqv7fs00ema|americanfamily|bananarepublic|cancerresearch|cookingchannel|kerrylogistics|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--h2breg3eve|xn--jlq480n2rg|xn--jlq61u9w7b|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|xn--rvc1e0am3e|international|lifeinsurance|travelchannel|wolterskluwer|xn--cckwcxetd|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--h2brj9c8c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|scholarships|versicherung|xn--3e0b707e|xn--45br5cyl|xn--4dbrk0ce|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbgu82a|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|foodnetwork|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--3bst00m|xn--3ds443g|xn--3hcrj9c|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--mgbbh1a|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--otu796d|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|சிங்கப்பூர்|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nextdirect|properties|protection|prudential|realestate|republican|restaurant|schaeffler|tatamotors|technology|university|vlaanderen|volkswagen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--q7ce6a|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|alfaromeo|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|frontdoor|furniture|goldpoint|hisamitsu|homedepot|homegoods|homesense|institute|insurance|kuokgroup|lancaster|landrover|lifestyle|marketing|marshalls|melbourne|microsoft|panasonic|passagens|pramerica|richardli|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--ngbrx|xn--nqv7f|xn--p1acf|xn--qxa6a|xn--tckwe|xn--vhquv|yodobashi|موريتانيا|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|builders|business|capetown|catering|catholic|cipriani|cityeats|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|etisalat|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|guardian|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|maserati|mckinsey|memorial|merckmsd|mortgage|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|showtime|softbank|software|stcgroup|supplies|training|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|السعودية|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|avianca|banamex|bauhaus|bentley|bestbuy|booking|brother|bugatti|capital|caravan|careers|channel|charity|chintai|citadel|clubmed|college|cologne|comcast|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|grocery|guitars|hamburg|hangout|hitachi|holiday|hosting|hoteles|hotmail|hyundai|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lanxess|lasalle|latrobe|leclerc|limited|lincoln|markets|monster|netbank|netflix|network|neustar|okinawa|oldnavy|organic|origins|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|singles|staples|storage|support|surgery|systems|temasek|theater|theatre|tickets|tiffany|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|xfinity|yamaxun|youtube|zuerich|католик|اتصالات|البحرين|الجزائر|العليان|پاکستان|كاثوليك|இந்தியா|abarth|abbott|abbvie|africa|agency|airbus|airtel|alipay|alsace|alstom|amazon|anquan|aramco|author|bayern|beauty|berlin|bharti|bostik|boston|broker|camera|career|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hotels|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kinder|kindle|kosher|lancia|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|monash|mormon|moscow|museum|mutual|nagoya|natura|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|pictet|quebec|racing|realty|reisen|repair|report|review|rocher|rogers|ryukyu|safety|sakura|sanofi|school|schule|search|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|vuelos|walter|webcam|xihuan|yachts|yandex|zappos|москва|онлайн|ابوظبي|ارامكو|الاردن|المغرب|امارات|فلسطين|مليسيا|भारतम्|இலங்கை|ファッション|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|bosch|build|canon|cards|chase|cheap|cisco|citic|click|cloud|coach|codes|crown|cymru|dabur|dance|deals|delta|drive|dubai|earth|edeka|email|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|irish|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|linde|lipsy|loans|locus|lotte|lotto|macys|mango|media|miami|money|movie|music|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|rugby|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|sport|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|ישראל|ایران|بازار|بھارت|سودان|سورية|همراه|भारोत|संगठन|বাংলা|భారత్|ഭാരതം|嘉里大酒店|aarp|able|adac|aero|akdn|ally|amex|arab|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|dvag|erni|fage|fail|fans|farm|fast|fiat|fido|film|fire|fish|flir|food|ford|free|fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|hgtv|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kids|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|loft|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|read|reit|rent|rest|rich|room|rsvp|ruhr|safe|sale|sarl|save|saxo|scot|seat|seek|sexy|shaw|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|дети|сайт|بارت|بيتك|ڀارت|تونس|شبكة|عراق|عمان|موقع|भारत|ভারত|ভাৰত|ਭਾਰਤ|ભારત|ଭାରତ|ಭಾರತ|ලංකා|アマゾン|グーグル|クラウド|ポイント|组织机构|電訊盈科|香格里拉|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|cbs|ceo|cfa|cfd|com|cpa|crs|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gay|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|ibm|ice|icu|ifm|inc|ing|ink|int|ist|itv|jcb|jio|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|llc|llp|lol|lpl|ltd|man|map|mba|med|men|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|one|ong|onl|ooo|org|ott|ovh|pay|pet|phd|pid|pin|pnc|pro|pru|pub|pwc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|sca|scb|ses|sew|sex|sfr|ski|sky|soy|spa|srl|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|бел|ком|қаз|мкд|мон|орг|рус|срб|укр|հայ|קום|عرب|قطر|كوم|مصر|कॉम|नेट|คอม|ไทย|ລາວ|ストア|セール|みんな|中文网|亚马逊|天主教|我爱你|新加坡|淡马锡|诺基亚|飞利浦|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|ελ|ευ|бг|ею|рф|გე|닷넷|닷컴|삼성|한국|コム|世界|中信|中国|中國|企业|佛山|信息|健康|八卦|公司|公益|台湾|台灣|商城|商店|商标|嘉里|在线|大拿|娱乐|家電|广东|微博|慈善|手机|招聘|政务|政府|新闻|时尚|書籍|机构|游戏|澳門|点看|移动|网址|网店|网站|网络|联通|谷歌|购物|通販|集团|食品|餐厅|香港)/;
  var localPartCharRegex = new RegExp("[".concat(alphaNumericAndMarksCharsStr, "!#$%&'*+/=?^_`{|}~-]"));
  var strictTldRegex = new RegExp("^".concat(tldRegex.source, "$"));
  var EmailMatcher = (
    /** @class */
    function(_super) {
      __extends(EmailMatcher2, _super);
      function EmailMatcher2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.localPartCharRegex = localPartCharRegex;
        _this.strictTldRegex = strictTldRegex;
        return _this;
      }
      EmailMatcher2.prototype.parseMatches = function(text2) {
        var tagBuilder = this.tagBuilder, localPartCharRegex2 = this.localPartCharRegex, strictTldRegex2 = this.strictTldRegex, matches = [], len = text2.length, noCurrentEmailMatch = new CurrentEmailMatch();
        var mailtoTransitions = {
          m: "a",
          a: "i",
          i: "l",
          l: "t",
          t: "o",
          o: ":"
        };
        var charIdx = 0, state = 0, currentEmailMatch = noCurrentEmailMatch;
        while (charIdx < len) {
          var char = text2.charAt(charIdx);
          switch (state) {
            case 0:
              stateNonEmailAddress(char);
              break;
            case 1:
              stateMailTo(text2.charAt(charIdx - 1), char);
              break;
            case 2:
              stateLocalPart(char);
              break;
            case 3:
              stateLocalPartDot(char);
              break;
            case 4:
              stateAtSign(char);
              break;
            case 5:
              stateDomainChar(char);
              break;
            case 6:
              stateDomainHyphen(char);
              break;
            case 7:
              stateDomainDot(char);
              break;
            default:
              throwUnhandledCaseError(state);
          }
          charIdx++;
        }
        captureMatchIfValidAndReset();
        return matches;
        function stateNonEmailAddress(char2) {
          if (char2 === "m") {
            beginEmailMatch(
              1
              /* Mailto */
            );
          } else if (localPartCharRegex2.test(char2)) {
            beginEmailMatch();
          } else
            ;
        }
        function stateMailTo(prevChar, char2) {
          if (prevChar === ":") {
            if (localPartCharRegex2.test(char2)) {
              state = 2;
              currentEmailMatch = new CurrentEmailMatch(__assign(__assign({}, currentEmailMatch), { hasMailtoPrefix: true }));
            } else {
              resetToNonEmailMatchState();
            }
          } else if (mailtoTransitions[prevChar] === char2)
            ;
          else if (localPartCharRegex2.test(char2)) {
            state = 2;
          } else if (char2 === ".") {
            state = 3;
          } else if (char2 === "@") {
            state = 4;
          } else {
            resetToNonEmailMatchState();
          }
        }
        function stateLocalPart(char2) {
          if (char2 === ".") {
            state = 3;
          } else if (char2 === "@") {
            state = 4;
          } else if (localPartCharRegex2.test(char2))
            ;
          else {
            resetToNonEmailMatchState();
          }
        }
        function stateLocalPartDot(char2) {
          if (char2 === ".") {
            resetToNonEmailMatchState();
          } else if (char2 === "@") {
            resetToNonEmailMatchState();
          } else if (localPartCharRegex2.test(char2)) {
            state = 2;
          } else {
            resetToNonEmailMatchState();
          }
        }
        function stateAtSign(char2) {
          if (domainNameCharRegex.test(char2)) {
            state = 5;
          } else {
            resetToNonEmailMatchState();
          }
        }
        function stateDomainChar(char2) {
          if (char2 === ".") {
            state = 7;
          } else if (char2 === "-") {
            state = 6;
          } else if (domainNameCharRegex.test(char2))
            ;
          else {
            captureMatchIfValidAndReset();
          }
        }
        function stateDomainHyphen(char2) {
          if (char2 === "-" || char2 === ".") {
            captureMatchIfValidAndReset();
          } else if (domainNameCharRegex.test(char2)) {
            state = 5;
          } else {
            captureMatchIfValidAndReset();
          }
        }
        function stateDomainDot(char2) {
          if (char2 === "." || char2 === "-") {
            captureMatchIfValidAndReset();
          } else if (domainNameCharRegex.test(char2)) {
            state = 5;
            currentEmailMatch = new CurrentEmailMatch(__assign(__assign({}, currentEmailMatch), { hasDomainDot: true }));
          } else {
            captureMatchIfValidAndReset();
          }
        }
        function beginEmailMatch(newState) {
          if (newState === void 0) {
            newState = 2;
          }
          state = newState;
          currentEmailMatch = new CurrentEmailMatch({ idx: charIdx });
        }
        function resetToNonEmailMatchState() {
          state = 0;
          currentEmailMatch = noCurrentEmailMatch;
        }
        function captureMatchIfValidAndReset() {
          if (currentEmailMatch.hasDomainDot) {
            var matchedText = text2.slice(currentEmailMatch.idx, charIdx);
            if (/[-.]$/.test(matchedText)) {
              matchedText = matchedText.slice(0, -1);
            }
            var emailAddress = currentEmailMatch.hasMailtoPrefix ? matchedText.slice("mailto:".length) : matchedText;
            if (doesEmailHaveValidTld(emailAddress)) {
              matches.push(new EmailMatch({
                tagBuilder,
                matchedText,
                offset: currentEmailMatch.idx,
                email: emailAddress
              }));
            }
          }
          resetToNonEmailMatchState();
          function doesEmailHaveValidTld(emailAddress2) {
            var emailAddressTld = emailAddress2.split(".").pop() || "";
            var emailAddressNormalized = emailAddressTld.toLowerCase();
            var isValidTld = strictTldRegex2.test(emailAddressNormalized);
            return isValidTld;
          }
        }
      };
      return EmailMatcher2;
    }(Matcher)
  );
  var CurrentEmailMatch = (
    /** @class */
    function() {
      function CurrentEmailMatch2(cfg) {
        if (cfg === void 0) {
          cfg = {};
        }
        this.idx = cfg.idx !== void 0 ? cfg.idx : -1;
        this.hasMailtoPrefix = !!cfg.hasMailtoPrefix;
        this.hasDomainDot = !!cfg.hasDomainDot;
      }
      return CurrentEmailMatch2;
    }()
  );
  var UrlMatchValidator = (
    /** @class */
    function() {
      function UrlMatchValidator2() {
      }
      UrlMatchValidator2.isValid = function(urlMatch, protocolUrlMatch) {
        if (protocolUrlMatch && !this.isValidUriScheme(protocolUrlMatch) || this.urlMatchDoesNotHaveProtocolOrDot(urlMatch, protocolUrlMatch) || // At least one period ('.') must exist in the URL match for us to consider it an actual URL, *unless* it was a full protocol match (like 'http://localhost')
        this.urlMatchDoesNotHaveAtLeastOneWordChar(urlMatch, protocolUrlMatch) && // At least one letter character must exist in the domain name after a protocol match. Ex: skip over something like "git:1.0"
        !this.isValidIpAddress(urlMatch) || // Except if it's an IP address
        this.containsMultipleDots(urlMatch)) {
          return false;
        }
        return true;
      };
      UrlMatchValidator2.isValidIpAddress = function(uriSchemeMatch) {
        var newRegex = new RegExp(this.hasFullProtocolRegex.source + this.ipRegex.source);
        var uriScheme = uriSchemeMatch.match(newRegex);
        return uriScheme !== null;
      };
      UrlMatchValidator2.containsMultipleDots = function(urlMatch) {
        var stringBeforeSlash = urlMatch;
        if (this.hasFullProtocolRegex.test(urlMatch)) {
          stringBeforeSlash = urlMatch.split("://")[1];
        }
        return stringBeforeSlash.split("/")[0].indexOf("..") > -1;
      };
      UrlMatchValidator2.isValidUriScheme = function(uriSchemeMatch) {
        var uriSchemeMatchArr = uriSchemeMatch.match(this.uriSchemeRegex), uriScheme = uriSchemeMatchArr && uriSchemeMatchArr[0].toLowerCase();
        return uriScheme !== "javascript:" && uriScheme !== "vbscript:";
      };
      UrlMatchValidator2.urlMatchDoesNotHaveProtocolOrDot = function(urlMatch, protocolUrlMatch) {
        return !!urlMatch && (!protocolUrlMatch || !this.hasFullProtocolRegex.test(protocolUrlMatch)) && urlMatch.indexOf(".") === -1;
      };
      UrlMatchValidator2.urlMatchDoesNotHaveAtLeastOneWordChar = function(urlMatch, protocolUrlMatch) {
        if (urlMatch && protocolUrlMatch) {
          return !this.hasFullProtocolRegex.test(protocolUrlMatch) && !this.hasWordCharAfterProtocolRegex.test(urlMatch);
        } else {
          return false;
        }
      };
      UrlMatchValidator2.hasFullProtocolRegex = /^[A-Za-z][-.+A-Za-z0-9]*:\/\//;
      UrlMatchValidator2.uriSchemeRegex = /^[A-Za-z][-.+A-Za-z0-9]*:/;
      UrlMatchValidator2.hasWordCharAfterProtocolRegex = new RegExp(":[^\\s]*?[" + alphaCharsStr + "]");
      UrlMatchValidator2.ipRegex = /[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?(:[0-9]*)?\/?$/;
      return UrlMatchValidator2;
    }()
  );
  var matcherRegex = function() {
    var schemeRegex = /(?:[A-Za-z][-.+A-Za-z0-9]{0,63}:(?![A-Za-z][-.+A-Za-z0-9]{0,63}:\/\/)(?!\d+\/?)(?:\/\/)?)/, wwwRegex = /(?:www\.)/, urlSuffixRegex = new RegExp("[/?#](?:[" + alphaNumericAndMarksCharsStr + "\\-+&@#/%=~_()|'$*\\[\\]{}?!:,.;^✓]*[" + alphaNumericAndMarksCharsStr + "\\-+&@#/%=~_()|'$*\\[\\]{}✓])?");
    return new RegExp([
      "(?:",
      "(",
      schemeRegex.source,
      getDomainNameStr(2),
      ")",
      "|",
      "(",
      "(//)?",
      wwwRegex.source,
      getDomainNameStr(6),
      ")",
      "|",
      "(",
      "(//)?",
      getDomainNameStr(10) + "\\.",
      tldRegex.source,
      "(?![-" + alphaNumericCharsStr + "])",
      ")",
      ")",
      "(?::[0-9]+)?",
      "(?:" + urlSuffixRegex.source + ")?"
      // match for path, query string, and/or hash anchor - optional
    ].join(""), "gi");
  }();
  var wordCharRegExp = new RegExp("[" + alphaNumericAndMarksCharsStr + "]");
  var UrlMatcher = (
    /** @class */
    function(_super) {
      __extends(UrlMatcher2, _super);
      function UrlMatcher2(cfg) {
        var _this = _super.call(this, cfg) || this;
        _this.stripPrefix = {
          scheme: true,
          www: true
        };
        _this.stripTrailingSlash = true;
        _this.decodePercentEncoding = true;
        _this.matcherRegex = matcherRegex;
        _this.wordCharRegExp = wordCharRegExp;
        _this.stripPrefix = cfg.stripPrefix;
        _this.stripTrailingSlash = cfg.stripTrailingSlash;
        _this.decodePercentEncoding = cfg.decodePercentEncoding;
        return _this;
      }
      UrlMatcher2.prototype.parseMatches = function(text2) {
        var matcherRegex2 = this.matcherRegex, stripPrefix = this.stripPrefix, stripTrailingSlash = this.stripTrailingSlash, decodePercentEncoding = this.decodePercentEncoding, tagBuilder = this.tagBuilder, matches = [], match;
        var _loop_1 = function() {
          var matchStr = match[0], schemeUrlMatch = match[1], wwwUrlMatch = match[4], wwwProtocolRelativeMatch = match[5], tldProtocolRelativeMatch = match[9], offset = match.index, protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch, prevChar = text2.charAt(offset - 1);
          if (!UrlMatchValidator.isValid(matchStr, schemeUrlMatch)) {
            return "continue";
          }
          if (offset > 0 && prevChar === "@") {
            return "continue";
          }
          if (offset > 0 && protocolRelativeMatch && this_1.wordCharRegExp.test(prevChar)) {
            return "continue";
          }
          if (/\?$/.test(matchStr)) {
            matchStr = matchStr.substr(0, matchStr.length - 1);
          }
          if (this_1.matchHasUnbalancedClosingParen(matchStr)) {
            matchStr = matchStr.substr(0, matchStr.length - 1);
          } else {
            var pos = this_1.matchHasInvalidCharAfterTld(matchStr, schemeUrlMatch);
            if (pos > -1) {
              matchStr = matchStr.substr(0, pos);
            }
          }
          var foundCommonScheme = ["http://", "https://"].find(function(commonScheme) {
            return !!schemeUrlMatch && schemeUrlMatch.indexOf(commonScheme) !== -1;
          });
          if (foundCommonScheme) {
            var indexOfSchemeStart = matchStr.indexOf(foundCommonScheme);
            matchStr = matchStr.substr(indexOfSchemeStart);
            schemeUrlMatch = schemeUrlMatch.substr(indexOfSchemeStart);
            offset = offset + indexOfSchemeStart;
          }
          var urlMatchType = schemeUrlMatch ? "scheme" : wwwUrlMatch ? "www" : "tld", protocolUrlMatch = !!schemeUrlMatch;
          matches.push(new UrlMatch({
            tagBuilder,
            matchedText: matchStr,
            offset,
            urlMatchType,
            url: matchStr,
            protocolUrlMatch,
            protocolRelativeMatch: !!protocolRelativeMatch,
            stripPrefix,
            stripTrailingSlash,
            decodePercentEncoding
          }));
        };
        var this_1 = this;
        while ((match = matcherRegex2.exec(text2)) !== null) {
          _loop_1();
        }
        return matches;
      };
      UrlMatcher2.prototype.matchHasUnbalancedClosingParen = function(matchStr) {
        var endChar = matchStr.charAt(matchStr.length - 1);
        var startChar;
        if (endChar === ")") {
          startChar = "(";
        } else if (endChar === "]") {
          startChar = "[";
        } else if (endChar === "}") {
          startChar = "{";
        } else {
          return false;
        }
        var numOpenBraces = 0;
        for (var i2 = 0, len = matchStr.length - 1; i2 < len; i2++) {
          var char = matchStr.charAt(i2);
          if (char === startChar) {
            numOpenBraces++;
          } else if (char === endChar) {
            numOpenBraces = Math.max(numOpenBraces - 1, 0);
          }
        }
        if (numOpenBraces === 0) {
          return true;
        }
        return false;
      };
      UrlMatcher2.prototype.matchHasInvalidCharAfterTld = function(urlMatch, schemeUrlMatch) {
        if (!urlMatch) {
          return -1;
        }
        var offset = 0;
        if (schemeUrlMatch) {
          offset = urlMatch.indexOf(":");
          urlMatch = urlMatch.slice(offset);
        }
        var re2 = new RegExp("^((.?//)?[-." + alphaNumericAndMarksCharsStr + "]*[-" + alphaNumericAndMarksCharsStr + "]\\.[-" + alphaNumericAndMarksCharsStr + "]+)");
        var res = re2.exec(urlMatch);
        if (res === null) {
          return -1;
        }
        offset += res[1].length;
        urlMatch = urlMatch.slice(res[1].length);
        if (/^[^-.A-Za-z0-9:\/?#]/.test(urlMatch)) {
          return offset;
        }
        return -1;
      };
      return UrlMatcher2;
    }(Matcher)
  );
  var hashtagTextCharRe = new RegExp("[_".concat(alphaNumericAndMarksCharsStr, "]"));
  var HashtagMatcher = (
    /** @class */
    function(_super) {
      __extends(HashtagMatcher2, _super);
      function HashtagMatcher2(cfg) {
        var _this = _super.call(this, cfg) || this;
        _this.serviceName = "twitter";
        _this.serviceName = cfg.serviceName;
        return _this;
      }
      HashtagMatcher2.prototype.parseMatches = function(text2) {
        var tagBuilder = this.tagBuilder;
        var serviceName = this.serviceName;
        var matches = [];
        var len = text2.length;
        var charIdx = 0, hashCharIdx = -1, state = 0;
        while (charIdx < len) {
          var char = text2.charAt(charIdx);
          switch (state) {
            case 0:
              stateNone(char);
              break;
            case 1:
              stateNonHashtagWordChar(char);
              break;
            case 2:
              stateHashtagHashChar(char);
              break;
            case 3:
              stateHashtagTextChar(char);
              break;
            default:
              throwUnhandledCaseError(state);
          }
          charIdx++;
        }
        captureMatchIfValid();
        return matches;
        function stateNone(char2) {
          if (char2 === "#") {
            state = 2;
            hashCharIdx = charIdx;
          } else if (alphaNumericAndMarksCharRe.test(char2)) {
            state = 1;
          } else
            ;
        }
        function stateNonHashtagWordChar(char2) {
          if (alphaNumericAndMarksCharRe.test(char2))
            ;
          else {
            state = 0;
          }
        }
        function stateHashtagHashChar(char2) {
          if (hashtagTextCharRe.test(char2)) {
            state = 3;
          } else if (alphaNumericAndMarksCharRe.test(char2)) {
            state = 1;
          } else {
            state = 0;
          }
        }
        function stateHashtagTextChar(char2) {
          if (hashtagTextCharRe.test(char2))
            ;
          else {
            captureMatchIfValid();
            hashCharIdx = -1;
            if (alphaNumericAndMarksCharRe.test(char2)) {
              state = 1;
            } else {
              state = 0;
            }
          }
        }
        function captureMatchIfValid() {
          if (hashCharIdx > -1 && charIdx - hashCharIdx <= 140) {
            var matchedText = text2.slice(hashCharIdx, charIdx);
            var match = new HashtagMatch({
              tagBuilder,
              matchedText,
              offset: hashCharIdx,
              serviceName,
              hashtag: matchedText.slice(1)
            });
            matches.push(match);
          }
        }
      };
      return HashtagMatcher2;
    }(Matcher)
  );
  var hashtagServices = ["twitter", "facebook", "instagram", "tiktok"];
  var mostPhoneNumbers = /(?:(?:(?:(\+)?\d{1,3}[-\040.]?)?\(?\d{3}\)?[-\040.]?\d{3}[-\040.]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-\040.]?(?:\d[-\040.]?){6,12}\d+))([,;]+[0-9]+#?)*/;
  var japanesePhoneRe = /(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})/;
  var phoneMatcherRegex = new RegExp("".concat(mostPhoneNumbers.source, "|").concat(japanesePhoneRe.source), "g");
  var PhoneMatcher = (
    /** @class */
    function(_super) {
      __extends(PhoneMatcher2, _super);
      function PhoneMatcher2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.matcherRegex = phoneMatcherRegex;
        return _this;
      }
      PhoneMatcher2.prototype.parseMatches = function(text2) {
        var matcherRegex2 = this.matcherRegex, tagBuilder = this.tagBuilder, matches = [], match;
        while ((match = matcherRegex2.exec(text2)) !== null) {
          var matchedText = match[0], cleanNumber = matchedText.replace(/[^0-9,;#]/g, ""), plusSign = !!(match[1] || match[2]), before = match.index == 0 ? "" : text2.substr(match.index - 1, 1), after = text2.substr(match.index + matchedText.length, 1), contextClear = !before.match(/\d/) && !after.match(/\d/);
          if (this.testMatch(match[3]) && this.testMatch(matchedText) && contextClear) {
            matches.push(new PhoneMatch({
              tagBuilder,
              matchedText,
              offset: match.index,
              number: cleanNumber,
              plusSign
            }));
          }
        }
        return matches;
      };
      PhoneMatcher2.prototype.testMatch = function(text2) {
        return nonDigitRe.test(text2);
      };
      return PhoneMatcher2;
    }(Matcher)
  );
  var twitterRegex = new RegExp("@[_".concat(alphaNumericAndMarksCharsStr, "]{1,50}(?![_").concat(alphaNumericAndMarksCharsStr, "])"), "g");
  var instagramRegex = new RegExp("@[_.".concat(alphaNumericAndMarksCharsStr, "]{1,30}(?![_").concat(alphaNumericAndMarksCharsStr, "])"), "g");
  var soundcloudRegex = new RegExp("@[-_.".concat(alphaNumericAndMarksCharsStr, "]{1,50}(?![-_").concat(alphaNumericAndMarksCharsStr, "])"), "g");
  var tiktokRegex = new RegExp("@[_.".concat(alphaNumericAndMarksCharsStr, "]{1,23}[_").concat(alphaNumericAndMarksCharsStr, "](?![_").concat(alphaNumericAndMarksCharsStr, "])"), "g");
  var nonWordCharRegex = new RegExp("[^" + alphaNumericAndMarksCharsStr + "]");
  var MentionMatcher = (
    /** @class */
    function(_super) {
      __extends(MentionMatcher2, _super);
      function MentionMatcher2(cfg) {
        var _this = _super.call(this, cfg) || this;
        _this.serviceName = "twitter";
        _this.matcherRegexes = {
          twitter: twitterRegex,
          instagram: instagramRegex,
          soundcloud: soundcloudRegex,
          tiktok: tiktokRegex
        };
        _this.nonWordCharRegex = nonWordCharRegex;
        _this.serviceName = cfg.serviceName;
        return _this;
      }
      MentionMatcher2.prototype.parseMatches = function(text2) {
        var serviceName = this.serviceName, matcherRegex2 = this.matcherRegexes[this.serviceName], nonWordCharRegex2 = this.nonWordCharRegex, tagBuilder = this.tagBuilder, matches = [], match;
        if (!matcherRegex2) {
          return matches;
        }
        while ((match = matcherRegex2.exec(text2)) !== null) {
          var offset = match.index, prevChar = text2.charAt(offset - 1);
          if (offset === 0 || nonWordCharRegex2.test(prevChar)) {
            var matchedText = match[0].replace(/\.+$/g, ""), mention = matchedText.slice(1);
            matches.push(new MentionMatch({
              tagBuilder,
              matchedText,
              offset,
              serviceName,
              mention
            }));
          }
        }
        return matches;
      };
      return MentionMatcher2;
    }(Matcher)
  );
  function parseHtml(html, _a) {
    var onOpenTag = _a.onOpenTag, onCloseTag = _a.onCloseTag, onText = _a.onText, onComment = _a.onComment, onDoctype = _a.onDoctype;
    var noCurrentTag = new CurrentTag();
    var charIdx = 0, len = html.length, state = 0, currentDataIdx = 0, currentTag = noCurrentTag;
    while (charIdx < len) {
      var char = html.charAt(charIdx);
      switch (state) {
        case 0:
          stateData(char);
          break;
        case 1:
          stateTagOpen(char);
          break;
        case 2:
          stateEndTagOpen(char);
          break;
        case 3:
          stateTagName(char);
          break;
        case 4:
          stateBeforeAttributeName(char);
          break;
        case 5:
          stateAttributeName(char);
          break;
        case 6:
          stateAfterAttributeName(char);
          break;
        case 7:
          stateBeforeAttributeValue(char);
          break;
        case 8:
          stateAttributeValueDoubleQuoted(char);
          break;
        case 9:
          stateAttributeValueSingleQuoted(char);
          break;
        case 10:
          stateAttributeValueUnquoted(char);
          break;
        case 11:
          stateAfterAttributeValueQuoted(char);
          break;
        case 12:
          stateSelfClosingStartTag(char);
          break;
        case 13:
          stateMarkupDeclarationOpen();
          break;
        case 14:
          stateCommentStart(char);
          break;
        case 15:
          stateCommentStartDash(char);
          break;
        case 16:
          stateComment(char);
          break;
        case 17:
          stateCommentEndDash(char);
          break;
        case 18:
          stateCommentEnd(char);
          break;
        case 19:
          stateCommentEndBang(char);
          break;
        case 20:
          stateDoctype(char);
          break;
        default:
          throwUnhandledCaseError(state);
      }
      charIdx++;
    }
    if (currentDataIdx < charIdx) {
      emitText();
    }
    function stateData(char2) {
      if (char2 === "<") {
        startNewTag();
      }
    }
    function stateTagOpen(char2) {
      if (char2 === "!") {
        state = 13;
      } else if (char2 === "/") {
        state = 2;
        currentTag = new CurrentTag(__assign(__assign({}, currentTag), { isClosing: true }));
      } else if (char2 === "<") {
        startNewTag();
      } else if (letterRe.test(char2)) {
        state = 3;
        currentTag = new CurrentTag(__assign(__assign({}, currentTag), { isOpening: true }));
      } else {
        state = 0;
        currentTag = noCurrentTag;
      }
    }
    function stateTagName(char2) {
      if (whitespaceRe.test(char2)) {
        currentTag = new CurrentTag(__assign(__assign({}, currentTag), { name: captureTagName() }));
        state = 4;
      } else if (char2 === "<") {
        startNewTag();
      } else if (char2 === "/") {
        currentTag = new CurrentTag(__assign(__assign({}, currentTag), { name: captureTagName() }));
        state = 12;
      } else if (char2 === ">") {
        currentTag = new CurrentTag(__assign(__assign({}, currentTag), { name: captureTagName() }));
        emitTagAndPreviousTextNode();
      } else if (!letterRe.test(char2) && !digitRe.test(char2) && char2 !== ":") {
        resetToDataState();
      } else
        ;
    }
    function stateEndTagOpen(char2) {
      if (char2 === ">") {
        resetToDataState();
      } else if (letterRe.test(char2)) {
        state = 3;
      } else {
        resetToDataState();
      }
    }
    function stateBeforeAttributeName(char2) {
      if (whitespaceRe.test(char2))
        ;
      else if (char2 === "/") {
        state = 12;
      } else if (char2 === ">") {
        emitTagAndPreviousTextNode();
      } else if (char2 === "<") {
        startNewTag();
      } else if (char2 === "=" || quoteRe.test(char2) || controlCharsRe.test(char2)) {
        resetToDataState();
      } else {
        state = 5;
      }
    }
    function stateAttributeName(char2) {
      if (whitespaceRe.test(char2)) {
        state = 6;
      } else if (char2 === "/") {
        state = 12;
      } else if (char2 === "=") {
        state = 7;
      } else if (char2 === ">") {
        emitTagAndPreviousTextNode();
      } else if (char2 === "<") {
        startNewTag();
      } else if (quoteRe.test(char2)) {
        resetToDataState();
      } else
        ;
    }
    function stateAfterAttributeName(char2) {
      if (whitespaceRe.test(char2))
        ;
      else if (char2 === "/") {
        state = 12;
      } else if (char2 === "=") {
        state = 7;
      } else if (char2 === ">") {
        emitTagAndPreviousTextNode();
      } else if (char2 === "<") {
        startNewTag();
      } else if (quoteRe.test(char2)) {
        resetToDataState();
      } else {
        state = 5;
      }
    }
    function stateBeforeAttributeValue(char2) {
      if (whitespaceRe.test(char2))
        ;
      else if (char2 === '"') {
        state = 8;
      } else if (char2 === "'") {
        state = 9;
      } else if (/[>=`]/.test(char2)) {
        resetToDataState();
      } else if (char2 === "<") {
        startNewTag();
      } else {
        state = 10;
      }
    }
    function stateAttributeValueDoubleQuoted(char2) {
      if (char2 === '"') {
        state = 11;
      }
    }
    function stateAttributeValueSingleQuoted(char2) {
      if (char2 === "'") {
        state = 11;
      }
    }
    function stateAttributeValueUnquoted(char2) {
      if (whitespaceRe.test(char2)) {
        state = 4;
      } else if (char2 === ">") {
        emitTagAndPreviousTextNode();
      } else if (char2 === "<") {
        startNewTag();
      } else
        ;
    }
    function stateAfterAttributeValueQuoted(char2) {
      if (whitespaceRe.test(char2)) {
        state = 4;
      } else if (char2 === "/") {
        state = 12;
      } else if (char2 === ">") {
        emitTagAndPreviousTextNode();
      } else if (char2 === "<") {
        startNewTag();
      } else {
        state = 4;
        reconsumeCurrentCharacter();
      }
    }
    function stateSelfClosingStartTag(char2) {
      if (char2 === ">") {
        currentTag = new CurrentTag(__assign(__assign({}, currentTag), { isClosing: true }));
        emitTagAndPreviousTextNode();
      } else {
        state = 4;
      }
    }
    function stateMarkupDeclarationOpen(char2) {
      if (html.substr(charIdx, 2) === "--") {
        charIdx += 2;
        currentTag = new CurrentTag(__assign(__assign({}, currentTag), { type: "comment" }));
        state = 14;
      } else if (html.substr(charIdx, 7).toUpperCase() === "DOCTYPE") {
        charIdx += 7;
        currentTag = new CurrentTag(__assign(__assign({}, currentTag), { type: "doctype" }));
        state = 20;
      } else {
        resetToDataState();
      }
    }
    function stateCommentStart(char2) {
      if (char2 === "-") {
        state = 15;
      } else if (char2 === ">") {
        resetToDataState();
      } else {
        state = 16;
      }
    }
    function stateCommentStartDash(char2) {
      if (char2 === "-") {
        state = 18;
      } else if (char2 === ">") {
        resetToDataState();
      } else {
        state = 16;
      }
    }
    function stateComment(char2) {
      if (char2 === "-") {
        state = 17;
      }
    }
    function stateCommentEndDash(char2) {
      if (char2 === "-") {
        state = 18;
      } else {
        state = 16;
      }
    }
    function stateCommentEnd(char2) {
      if (char2 === ">") {
        emitTagAndPreviousTextNode();
      } else if (char2 === "!") {
        state = 19;
      } else if (char2 === "-")
        ;
      else {
        state = 16;
      }
    }
    function stateCommentEndBang(char2) {
      if (char2 === "-") {
        state = 17;
      } else if (char2 === ">") {
        emitTagAndPreviousTextNode();
      } else {
        state = 16;
      }
    }
    function stateDoctype(char2) {
      if (char2 === ">") {
        emitTagAndPreviousTextNode();
      } else if (char2 === "<") {
        startNewTag();
      } else
        ;
    }
    function resetToDataState() {
      state = 0;
      currentTag = noCurrentTag;
    }
    function startNewTag() {
      state = 1;
      currentTag = new CurrentTag({ idx: charIdx });
    }
    function emitTagAndPreviousTextNode() {
      var textBeforeTag = html.slice(currentDataIdx, currentTag.idx);
      if (textBeforeTag) {
        onText(textBeforeTag, currentDataIdx);
      }
      if (currentTag.type === "comment") {
        onComment(currentTag.idx);
      } else if (currentTag.type === "doctype") {
        onDoctype(currentTag.idx);
      } else {
        if (currentTag.isOpening) {
          onOpenTag(currentTag.name, currentTag.idx);
        }
        if (currentTag.isClosing) {
          onCloseTag(currentTag.name, currentTag.idx);
        }
      }
      resetToDataState();
      currentDataIdx = charIdx + 1;
    }
    function emitText() {
      var text2 = html.slice(currentDataIdx, charIdx);
      onText(text2, currentDataIdx);
      currentDataIdx = charIdx + 1;
    }
    function captureTagName() {
      var startIdx = currentTag.idx + (currentTag.isClosing ? 2 : 1);
      return html.slice(startIdx, charIdx).toLowerCase();
    }
    function reconsumeCurrentCharacter() {
      charIdx--;
    }
  }
  var CurrentTag = (
    /** @class */
    function() {
      function CurrentTag2(cfg) {
        if (cfg === void 0) {
          cfg = {};
        }
        this.idx = cfg.idx !== void 0 ? cfg.idx : -1;
        this.type = cfg.type || "tag";
        this.name = cfg.name || "";
        this.isOpening = !!cfg.isOpening;
        this.isClosing = !!cfg.isClosing;
      }
      return CurrentTag2;
    }()
  );
  var Autolinker = (
    /** @class */
    function() {
      function Autolinker2(cfg) {
        if (cfg === void 0) {
          cfg = {};
        }
        this.version = Autolinker2.version;
        this.urls = {};
        this.email = true;
        this.phone = true;
        this.hashtag = false;
        this.mention = false;
        this.newWindow = true;
        this.stripPrefix = {
          scheme: true,
          www: true
        };
        this.stripTrailingSlash = true;
        this.decodePercentEncoding = true;
        this.truncate = {
          length: 0,
          location: "end"
        };
        this.className = "";
        this.replaceFn = null;
        this.context = void 0;
        this.sanitizeHtml = false;
        this.matchers = null;
        this.tagBuilder = null;
        this.urls = this.normalizeUrlsCfg(cfg.urls);
        this.email = typeof cfg.email === "boolean" ? cfg.email : this.email;
        this.phone = typeof cfg.phone === "boolean" ? cfg.phone : this.phone;
        this.hashtag = cfg.hashtag || this.hashtag;
        this.mention = cfg.mention || this.mention;
        this.newWindow = typeof cfg.newWindow === "boolean" ? cfg.newWindow : this.newWindow;
        this.stripPrefix = this.normalizeStripPrefixCfg(cfg.stripPrefix);
        this.stripTrailingSlash = typeof cfg.stripTrailingSlash === "boolean" ? cfg.stripTrailingSlash : this.stripTrailingSlash;
        this.decodePercentEncoding = typeof cfg.decodePercentEncoding === "boolean" ? cfg.decodePercentEncoding : this.decodePercentEncoding;
        this.sanitizeHtml = cfg.sanitizeHtml || false;
        var mention = this.mention;
        if (mention !== false && ["twitter", "instagram", "soundcloud", "tiktok"].indexOf(mention) === -1) {
          throw new Error("invalid `mention` cfg '".concat(mention, "' - see docs"));
        }
        var hashtag = this.hashtag;
        if (hashtag !== false && hashtagServices.indexOf(hashtag) === -1) {
          throw new Error("invalid `hashtag` cfg '".concat(hashtag, "' - see docs"));
        }
        this.truncate = this.normalizeTruncateCfg(cfg.truncate);
        this.className = cfg.className || this.className;
        this.replaceFn = cfg.replaceFn || this.replaceFn;
        this.context = cfg.context || this;
      }
      Autolinker2.link = function(textOrHtml, options) {
        var autolinker = new Autolinker2(options);
        return autolinker.link(textOrHtml);
      };
      Autolinker2.parse = function(textOrHtml, options) {
        var autolinker = new Autolinker2(options);
        return autolinker.parse(textOrHtml);
      };
      Autolinker2.prototype.normalizeUrlsCfg = function(urls) {
        if (urls == null)
          urls = true;
        if (typeof urls === "boolean") {
          return { schemeMatches: urls, wwwMatches: urls, tldMatches: urls };
        } else {
          return {
            schemeMatches: typeof urls.schemeMatches === "boolean" ? urls.schemeMatches : true,
            wwwMatches: typeof urls.wwwMatches === "boolean" ? urls.wwwMatches : true,
            tldMatches: typeof urls.tldMatches === "boolean" ? urls.tldMatches : true
          };
        }
      };
      Autolinker2.prototype.normalizeStripPrefixCfg = function(stripPrefix) {
        if (stripPrefix == null)
          stripPrefix = true;
        if (typeof stripPrefix === "boolean") {
          return { scheme: stripPrefix, www: stripPrefix };
        } else {
          return {
            scheme: typeof stripPrefix.scheme === "boolean" ? stripPrefix.scheme : true,
            www: typeof stripPrefix.www === "boolean" ? stripPrefix.www : true
          };
        }
      };
      Autolinker2.prototype.normalizeTruncateCfg = function(truncate) {
        if (typeof truncate === "number") {
          return { length: truncate, location: "end" };
        } else {
          return defaults(truncate || {}, {
            length: Number.POSITIVE_INFINITY,
            location: "end"
          });
        }
      };
      Autolinker2.prototype.parse = function(textOrHtml) {
        var _this = this;
        var skipTagNames = ["a", "style", "script"], skipTagsStackCount = 0, matches = [];
        parseHtml(textOrHtml, {
          onOpenTag: function(tagName) {
            if (skipTagNames.indexOf(tagName) >= 0) {
              skipTagsStackCount++;
            }
          },
          onText: function(text2, offset) {
            if (skipTagsStackCount === 0) {
              var htmlCharacterEntitiesRegex = /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi;
              var textSplit = splitAndCapture(text2, htmlCharacterEntitiesRegex);
              var currentOffset_1 = offset;
              textSplit.forEach(function(splitText, i2) {
                if (i2 % 2 === 0) {
                  var textNodeMatches = _this.parseText(splitText, currentOffset_1);
                  matches.push.apply(matches, textNodeMatches);
                }
                currentOffset_1 += splitText.length;
              });
            }
          },
          onCloseTag: function(tagName) {
            if (skipTagNames.indexOf(tagName) >= 0) {
              skipTagsStackCount = Math.max(skipTagsStackCount - 1, 0);
            }
          },
          onComment: function(offset) {
          },
          onDoctype: function(offset) {
          }
          // no need to process doctype nodes
        });
        matches = this.compactMatches(matches);
        matches = this.removeUnwantedMatches(matches);
        return matches;
      };
      Autolinker2.prototype.compactMatches = function(matches) {
        matches.sort(function(a2, b2) {
          return a2.getOffset() - b2.getOffset();
        });
        var i2 = 0;
        while (i2 < matches.length - 1) {
          var match = matches[i2], offset = match.getOffset(), matchedTextLength = match.getMatchedText().length, endIdx = offset + matchedTextLength;
          if (i2 + 1 < matches.length) {
            if (matches[i2 + 1].getOffset() === offset) {
              var removeIdx = matches[i2 + 1].getMatchedText().length > matchedTextLength ? i2 : i2 + 1;
              matches.splice(removeIdx, 1);
              continue;
            }
            if (matches[i2 + 1].getOffset() < endIdx) {
              matches.splice(i2 + 1, 1);
              continue;
            }
          }
          i2++;
        }
        return matches;
      };
      Autolinker2.prototype.removeUnwantedMatches = function(matches) {
        if (!this.hashtag)
          remove(matches, function(match) {
            return match.getType() === "hashtag";
          });
        if (!this.email)
          remove(matches, function(match) {
            return match.getType() === "email";
          });
        if (!this.phone)
          remove(matches, function(match) {
            return match.getType() === "phone";
          });
        if (!this.mention)
          remove(matches, function(match) {
            return match.getType() === "mention";
          });
        if (!this.urls.schemeMatches) {
          remove(matches, function(m2) {
            return m2.getType() === "url" && m2.getUrlMatchType() === "scheme";
          });
        }
        if (!this.urls.wwwMatches) {
          remove(matches, function(m2) {
            return m2.getType() === "url" && m2.getUrlMatchType() === "www";
          });
        }
        if (!this.urls.tldMatches) {
          remove(matches, function(m2) {
            return m2.getType() === "url" && m2.getUrlMatchType() === "tld";
          });
        }
        return matches;
      };
      Autolinker2.prototype.parseText = function(text2, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        offset = offset || 0;
        var matchers = this.getMatchers(), matches = [];
        for (var i2 = 0, numMatchers = matchers.length; i2 < numMatchers; i2++) {
          var textMatches = matchers[i2].parseMatches(text2);
          for (var j2 = 0, numTextMatches = textMatches.length; j2 < numTextMatches; j2++) {
            textMatches[j2].setOffset(offset + textMatches[j2].getOffset());
          }
          matches.push.apply(matches, textMatches);
        }
        return matches;
      };
      Autolinker2.prototype.link = function(textOrHtml) {
        if (!textOrHtml) {
          return "";
        }
        if (this.sanitizeHtml) {
          textOrHtml = textOrHtml.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
        var matches = this.parse(textOrHtml), newHtml = [], lastIndex = 0;
        for (var i2 = 0, len = matches.length; i2 < len; i2++) {
          var match = matches[i2];
          newHtml.push(textOrHtml.substring(lastIndex, match.getOffset()));
          newHtml.push(this.createMatchReturnVal(match));
          lastIndex = match.getOffset() + match.getMatchedText().length;
        }
        newHtml.push(textOrHtml.substring(lastIndex));
        return newHtml.join("");
      };
      Autolinker2.prototype.createMatchReturnVal = function(match) {
        var replaceFnResult;
        if (this.replaceFn) {
          replaceFnResult = this.replaceFn.call(this.context, match);
        }
        if (typeof replaceFnResult === "string") {
          return replaceFnResult;
        } else if (replaceFnResult === false) {
          return match.getMatchedText();
        } else if (replaceFnResult instanceof HtmlTag) {
          return replaceFnResult.toAnchorString();
        } else {
          var anchorTag = match.buildTag();
          return anchorTag.toAnchorString();
        }
      };
      Autolinker2.prototype.getMatchers = function() {
        if (!this.matchers) {
          var tagBuilder = this.getTagBuilder();
          var matchers = [
            new HashtagMatcher({
              tagBuilder,
              serviceName: this.hashtag
            }),
            new EmailMatcher({ tagBuilder }),
            new PhoneMatcher({ tagBuilder }),
            new MentionMatcher({
              tagBuilder,
              serviceName: this.mention
            }),
            new UrlMatcher({
              tagBuilder,
              stripPrefix: this.stripPrefix,
              stripTrailingSlash: this.stripTrailingSlash,
              decodePercentEncoding: this.decodePercentEncoding
            })
          ];
          return this.matchers = matchers;
        } else {
          return this.matchers;
        }
      };
      Autolinker2.prototype.getTagBuilder = function() {
        var tagBuilder = this.tagBuilder;
        if (!tagBuilder) {
          tagBuilder = this.tagBuilder = new AnchorTagBuilder({
            newWindow: this.newWindow,
            truncate: this.truncate,
            className: this.className
          });
        }
        return tagBuilder;
      };
      Autolinker2.version = version$2;
      Autolinker2.AnchorTagBuilder = AnchorTagBuilder;
      Autolinker2.HtmlTag = HtmlTag;
      Autolinker2.matcher = {
        Email: EmailMatcher,
        Hashtag: HashtagMatcher,
        Matcher,
        Mention: MentionMatcher,
        Phone: PhoneMatcher,
        Url: UrlMatcher
      };
      Autolinker2.match = {
        Email: EmailMatch,
        Hashtag: HashtagMatch,
        Match,
        Mention: MentionMatch,
        Phone: PhoneMatch,
        Url: UrlMatch
      };
      return Autolinker2;
    }()
  );
  var LINK_SCAN_RE = /www|@|\:\/\//;
  function isLinkOpen(str) {
    return /^<a[>\s]/i.test(str);
  }
  function isLinkClose(str) {
    return /^<\/a\s*>/i.test(str);
  }
  function createLinkifier() {
    var links2 = [];
    var autolinker = new Autolinker({
      stripPrefix: false,
      url: true,
      email: true,
      replaceFn: function(match) {
        switch (match.getType()) {
          case "url":
            links2.push({
              text: match.matchedText,
              url: match.getUrl()
            });
            break;
          case "email":
            links2.push({
              text: match.matchedText,
              // normalize email protocol
              url: "mailto:" + match.getEmail().replace(/^mailto:/i, "")
            });
            break;
        }
        return false;
      }
    });
    return {
      links: links2,
      autolinker
    };
  }
  function parseTokens(state) {
    var i2, j2, l2, tokens, token, text2, nodes, ln, pos, level, htmlLinkLevel, blockTokens = state.tokens, linkifier = null, links2, autolinker;
    for (j2 = 0, l2 = blockTokens.length; j2 < l2; j2++) {
      if (blockTokens[j2].type !== "inline") {
        continue;
      }
      tokens = blockTokens[j2].children;
      htmlLinkLevel = 0;
      for (i2 = tokens.length - 1; i2 >= 0; i2--) {
        token = tokens[i2];
        if (token.type === "link_close") {
          i2--;
          while (tokens[i2].level !== token.level && tokens[i2].type !== "link_open") {
            i2--;
          }
          continue;
        }
        if (token.type === "htmltag") {
          if (isLinkOpen(token.content) && htmlLinkLevel > 0) {
            htmlLinkLevel--;
          }
          if (isLinkClose(token.content)) {
            htmlLinkLevel++;
          }
        }
        if (htmlLinkLevel > 0) {
          continue;
        }
        if (token.type === "text" && LINK_SCAN_RE.test(token.content)) {
          if (!linkifier) {
            linkifier = createLinkifier();
            links2 = linkifier.links;
            autolinker = linkifier.autolinker;
          }
          text2 = token.content;
          links2.length = 0;
          autolinker.link(text2);
          if (!links2.length) {
            continue;
          }
          nodes = [];
          level = token.level;
          for (ln = 0; ln < links2.length; ln++) {
            if (!state.inline.validateLink(links2[ln].url)) {
              continue;
            }
            pos = text2.indexOf(links2[ln].text);
            if (pos) {
              nodes.push({
                type: "text",
                content: text2.slice(0, pos),
                level
              });
            }
            nodes.push({
              type: "link_open",
              href: links2[ln].url,
              title: "",
              level: level++
            });
            nodes.push({
              type: "text",
              content: links2[ln].text,
              level
            });
            nodes.push({
              type: "link_close",
              level: --level
            });
            text2 = text2.slice(pos + links2[ln].text.length);
          }
          if (text2.length) {
            nodes.push({
              type: "text",
              content: text2,
              level
            });
          }
          blockTokens[j2].children = tokens = [].concat(tokens.slice(0, i2), nodes, tokens.slice(i2 + 1));
        }
      }
    }
  }
  function linkify(md2) {
    md2.core.ruler.push("linkify", parseTokens);
  }
  const DEV_MODE = false;
  const RIGOBOT_API_URL = "https://rigobot.herokuapp.com";
  const fullURL = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "");
  const convertMarkdownToHTML = (markdown) => {
    const md2 = new Remarkable().use(linkify);
    let html = md2.render(markdown);
    html = replaceSrc(html);
    return html;
  };
  const changeSidebarVisibility = () => {
    const sidebar = document.querySelector(".sidebar-component");
    if (sidebar) {
      const style = window.getComputedStyle(sidebar);
      if (style.left === "0px") {
        sidebar.classList.remove("sidebar-appear");
        sidebar.classList.add("sidebar-disappear");
      } else {
        sidebar == null ? void 0 : sidebar.classList.remove("sidebar-disappear");
        sidebar == null ? void 0 : sidebar.classList.add("sidebar-appear");
      }
      void (sidebar == null ? void 0 : sidebar.offsetWidth);
    }
  };
  function replaceSrc(rawText) {
    const regex = /src="\.\.\/\.\./g;
    const host = getHost();
    const modifiedText = rawText.replace(regex, `src="${host}`);
    return modifiedText;
  }
  const getExercise = async (slug) => {
    return await fetch(`${getHost()}/exercise/${slug}`);
  };
  function getParams(opts) {
    if (!Array.isArray(opts))
      opts = [opts];
    const urlParams = new URLSearchParams(window.location.search);
    let obj = {};
    opts.forEach((name2) => obj[name2] = urlParams.get(name2));
    const result = opts.length == 1 ? obj[opts[0]] : obj;
    return result;
  }
  const getHost = function() {
    let preConfig = getParams("config");
    if (preConfig && preConfig !== "")
      preConfig = JSON.parse(atob(preConfig));
    let HOST2 = preConfig ? `${preConfig.address}:${preConfig.port}` : getParams("host") || fullURL;
    return HOST2;
  };
  const getFileContent = async (slug, file) => {
    const response = await fetch(`${getHost()}/exercise/${slug}/file/${file}`);
    const data = await response.text();
    return data;
  };
  const startChat = async (purpose_id, token) => {
    const conversationUrl = RIGOBOT_API_URL + "/v1/conversation/?purpose=" + purpose_id;
    const config2 = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token
      }
    };
    const resp = await fetch(conversationUrl, config2);
    const data = await resp.json();
    return data;
  };
  const disconnected = () => {
    const modal = document.querySelector(
      "#socket-disconnected"
    );
    if (modal) {
      modal.style.display = "block";
    }
  };
  const onConnectCli = () => {
    const modal = document.querySelector(
      "#socket-disconnected"
    );
    if (modal) {
      modal.style.display = "none";
    }
  };
  const getParamsObject = () => {
    let params = window.location.hash.substring(1);
    const paramsUrlSearch = new URLSearchParams(params);
    let paramsObject = {};
    for (const [key, value2] of paramsUrlSearch.entries()) {
      paramsObject[key] = value2;
    }
    return paramsObject;
  };
  const debounce$1 = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  const removeSpecialCharacters = (inputString) => {
    return inputString.replace(/\x1B[@-_][0-?]*[ -/]*[@-~]/g, "");
  };
  const replaceSlot = (string, slot, value2) => {
    const slotRegex = new RegExp(slot, "g");
    return string.replace(slotRegex, value2);
  };
  const messages = {
    us: {
      testing: "Testing your code...",
      initializing: "Setting up the coding environment",
      compiling: "Building your code...",
      pending: "Working...",
      connecting: "Connecting...",
      saving: "Saving Files...",
      ready: "Ready...",
      compilerError: "Compiler error.",
      compilerWarning: "Compiled with warnings",
      compilerSuccess: "Compiled successfully!",
      testingError: "Check the terminal for more detailed info.",
      testingSuccess: "Everything as expected.",
      internalError: "Woops! There has been an internal error",
      prettifying: "Making code prettier",
      prettifySuccess: "Look how beautiful your code is now",
      completed: "Excellent!",
      prettifyError: "Warning! Unable to prettify and save",
      openWindow: "Opening window...",
      dialog: "Dialog Received",
      goodMessages: [
        "Yeah!",
        "Wuju!",
        "OMG!",
        "YUUUUPPPIII!",
        "Congrats!",
        "Way to go!",
        "I'm soooo happy!",
        "Nice!",
        "I'm sooo happy for you",
        "For now...",
        "Maybe you are smart?",
        "Coding is your thing",
        "You are good at this"
      ],
      badMessages: [
        "Not as expected, don't panic!",
        "Not as expected, keep trying!",
        "You'll get it the next time!",
        "Never give up!",
        "No pain no gain.",
        "Not correct my friend.",
        "Focus on the force inside you."
      ]
    },
    es: {
      testing: "Testeando tu código...",
      initializing: "Configurando el entorno de codificación",
      compiling: "Construyendo tu código...",
      pending: "Trabajando...",
      connecting: "Conectando...",
      saving: "Guardando archivos...",
      ready: "Listo...",
      compilerError: "Error de compilación.",
      compilerWarning: "Compilado con advertencias",
      compilerSuccess: "¡Compilado con éxito!",
      testingError: "Consulta la terminal para más información detallada.",
      testingSuccess: "Todo como se esperaba.",
      internalError: "¡Ups! Ha habido un error interno",
      prettifying: "Haciendo el código más bonito",
      prettifySuccess: "Mira qué bonito está tu código ahora",
      completed: "¡Excelente!",
      prettifyError: "¡Advertencia! No se pudo embellecer y guardar",
      openWindow: "Abriendo ventana...",
      dialog: "Diálogo recibido",
      goodMessages: [
        "¡Sí!",
        "¡Wuju!",
        "¡OMG!",
        "¡YUUUUPPPIII!",
        "¡Felicidades!",
        "¡Bien hecho!",
        "¡Estoy tan feliz!",
        "¡Genial!",
        "¡Estoy tan feliz por ti",
        "Por ahora...",
        "¿Tal vez eres inteligente?",
        "Codificar es lo tuyo",
        "Eres bueno en esto"
      ],
      badMessages: [
        "No como se esperaba, ¡no entres en pánico!",
        "No como se esperaba, ¡sigue intentando!",
        "¡Lo conseguirás la próxima vez!",
        "¡Nunca te rindas!",
        "Sin dolor no hay ganancia.",
        "No es correcto, amigo.",
        "Concéntrate en la fuerza dentro de ti."
      ]
    }
  };
  const getStatus = function(status = "initializing", language = "us") {
    const goodIcons = ["🤩", "🙂", "😃", "😎", "🤓", "😍", "🤗", "👌🏽", "✅"];
    const badIcons = [
      "🤮",
      "🤢",
      "🤐",
      "🤬",
      "😡",
      "😵",
      "🤷🏽‍♂️",
      "🤷🏻‍♀️",
      "😬",
      "😭",
      "😤",
      "🤭",
      "🤒",
      "💩",
      "🧟‍♂️"
    ];
    const getGoodIcon = () => goodIcons[Math.floor(Math.random() * goodIcons.length)];
    const getBadIcon = () => badIcons[Math.floor(Math.random() * badIcons.length)];
    const bad = (lang = "us") => {
      const badMessage = messages[lang].badMessages;
      return `${badMessage[Math.floor(Math.random() * badMessage.length)]}`;
    };
    switch (status) {
      case "initializing":
        return ["🚀", messages[language].initializing];
      case "compiling":
        return ["💼", messages[language].compiling];
      case "testing":
        return ["👀", messages[language].testing];
      case "pending":
        return ["👩‍💻", messages[language].pending];
      case "connecting":
        return ["📳", messages[language].connecting];
      case "saving":
        return ["💾", messages[language].saving];
      case "ready":
        return ["🐶", messages[language].ready];
      case "compiler-error":
        return [getBadIcon(), messages[language].compilerError];
      case "compiler-warning":
        return ["⚠️", messages[language].compilerWarning];
      case "compiler-success":
        return [getGoodIcon(), messages[language].compilerSuccess];
      case "testing-error":
        return [
          getBadIcon(),
          `${bad(language)} ${messages[language].testingError}`
        ];
      case "testing-success":
        return [getGoodIcon(), messages[language].testingSuccess];
      case "internal-error":
        return ["🔥💻", messages[language].internalError];
      case "prettifying":
        return ["✨", messages[language].prettifying];
      case "prettify-success":
        return ["🌟", messages[language].prettifySuccess];
      case "completed":
        return ["🎉", messages[language].completed];
      case "prettify-error":
        return ["⚠️", messages[language].prettifyError];
      case "open_window":
        return ["👀", messages[language].openWindow];
      case "dialog":
        return ["💬", messages[language].dialog];
      default:
        throw new Error("Invalid status: " + status);
    }
  };
  const actions = [
    "build",
    "prettify",
    "test",
    "run",
    "input",
    "open",
    "preview",
    "reset",
    "reload",
    "open_window",
    "generate",
    "ai_interaction",
    "open_terminal"
  ];
  const Socket = {
    socket: null,
    start: function(host, onDisconnect = null, onConnect = null) {
      this.socket = lookup.connect(host);
      if (this.socket) {
        this.socket.on("connect", () => onConnect && onConnect());
        this.socket.on("disconnect", () => onDisconnect && onDisconnect());
      } else {
        console.error(`Failed to connect to host: ${host}`);
      }
    },
    createScope: function(scopeName) {
      const scope = {
        socket: this.socket,
        name: scopeName,
        previewWindow: null,
        actionCallBacks: {
          clean: function(data, s2) {
            s2.logs = [];
          }
        },
        statusCallBacks: {},
        updatedCallback: null,
        status: {
          code: "connecting",
          message: getStatus("connecting")
        },
        logs: [],
        on: function(action, callBack) {
          this.actionCallBacks[action] = callBack;
        },
        onStatus: function(status, callBack) {
          this.statusCallBacks[status] = callBack;
        },
        openWindow: function(data) {
          this.emit("open_window", data);
        },
        emit: function(action, data) {
          if (actions.indexOf(action) < 0)
            throw new Error(
              'Invalid action "' + action + '" for socket connection'
            );
          else
            this.socket.emit(this.name, { action, data });
        },
        whenUpdated: function(callBack) {
          this.updatedCallback = callBack;
        }
      };
      this.socket.on(scopeName, (data) => {
        if (data.logs)
          scope.logs = scope.logs.concat(data.logs);
        if (data.status)
          scope.status = {
            code: data.status,
            message: data.data ? data.data.message || getStatus(data.status) : getStatus(data.status),
            gif: data.data ? data.data.gif : null,
            video: data.data ? data.data.video : null
          };
        if (typeof scope.actionCallBacks[data.action] === "function")
          scope.actionCallBacks[data.action](data, scope);
        if (typeof scope.statusCallBacks[data.status] === "function")
          scope.statusCallBacks[data.status](data, scope);
        if (scope.updatedCallback)
          scope.updatedCallback(scope, data);
      });
      return scope;
    }
  };
  let e = { data: "" }, t = (t2) => "object" == typeof window ? ((t2 ? t2.querySelector("#_goober") : window._goober) || Object.assign((t2 || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : t2 || e, l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, a = /\/\*[^]*?\*\/|  +/g, n$1 = /\n+/g, o = (e2, t2) => {
    let r2 = "", l2 = "", a2 = "";
    for (let n2 in e2) {
      let c2 = e2[n2];
      "@" == n2[0] ? "i" == n2[1] ? r2 = n2 + " " + c2 + ";" : l2 += "f" == n2[1] ? o(c2, n2) : n2 + "{" + o(c2, "k" == n2[1] ? "" : t2) + "}" : "object" == typeof c2 ? l2 += o(c2, t2 ? t2.replace(/([^,])+/g, (e3) => n2.replace(/(^:.*)|([^,])+/g, (t3) => /&/.test(t3) ? t3.replace(/&/g, e3) : e3 ? e3 + " " + t3 : t3)) : n2) : null != c2 && (n2 = /^--/.test(n2) ? n2 : n2.replace(/[A-Z]/g, "-$&").toLowerCase(), a2 += o.p ? o.p(n2, c2) : n2 + ":" + c2 + ";");
    }
    return r2 + (t2 && a2 ? t2 + "{" + a2 + "}" : a2) + l2;
  }, c = {}, s = (e2) => {
    if ("object" == typeof e2) {
      let t2 = "";
      for (let r2 in e2)
        t2 += r2 + s(e2[r2]);
      return t2;
    }
    return e2;
  }, i = (e2, t2, r2, i2, p2) => {
    let u2 = s(e2), d2 = c[u2] || (c[u2] = ((e3) => {
      let t3 = 0, r3 = 11;
      for (; t3 < e3.length; )
        r3 = 101 * r3 + e3.charCodeAt(t3++) >>> 0;
      return "go" + r3;
    })(u2));
    if (!c[d2]) {
      let t3 = u2 !== e2 ? e2 : ((e3) => {
        let t4, r3, o2 = [{}];
        for (; t4 = l.exec(e3.replace(a, "")); )
          t4[4] ? o2.shift() : t4[3] ? (r3 = t4[3].replace(n$1, " ").trim(), o2.unshift(o2[0][r3] = o2[0][r3] || {})) : o2[0][t4[1]] = t4[2].replace(n$1, " ").trim();
        return o2[0];
      })(e2);
      c[d2] = o(p2 ? { ["@keyframes " + d2]: t3 } : t3, r2 ? "" : "." + d2);
    }
    let f2 = r2 && c.g ? c.g : null;
    return r2 && (c.g = c[d2]), ((e3, t3, r3, l2) => {
      l2 ? t3.data = t3.data.replace(l2, e3) : -1 === t3.data.indexOf(e3) && (t3.data = r3 ? e3 + t3.data : t3.data + e3);
    })(c[d2], t2, i2, f2), d2;
  }, p = (e2, t2, r2) => e2.reduce((e3, l2, a2) => {
    let n2 = t2[a2];
    if (n2 && n2.call) {
      let e4 = n2(r2), t3 = e4 && e4.props && e4.props.className || /^go/.test(e4) && e4;
      n2 = t3 ? "." + t3 : e4 && "object" == typeof e4 ? e4.props ? "" : o(e4, "") : false === e4 ? "" : e4;
    }
    return e3 + l2 + (null == n2 ? "" : n2);
  }, "");
  function u$1(e2) {
    let r2 = this || {}, l2 = e2.call ? e2(r2.p) : e2;
    return i(l2.unshift ? l2.raw ? p(l2, [].slice.call(arguments, 1), r2.p) : l2.reduce((e3, t2) => Object.assign(e3, t2 && t2.call ? t2(r2.p) : t2), {}) : l2, t(r2.target), r2.g, r2.o, r2.k);
  }
  let d, f, g;
  u$1.bind({ g: 1 });
  let h$1 = u$1.bind({ k: 1 });
  function m(e2, t2, r2, l2) {
    o.p = t2, d = e2, f = r2, g = l2;
  }
  function j(e2, t2) {
    let r2 = this || {};
    return function() {
      let l2 = arguments;
      function a2(n2, o2) {
        let c2 = Object.assign({}, n2), s2 = c2.className || a2.className;
        r2.p = Object.assign({ theme: f && f() }, c2), r2.o = / *go\d+/.test(s2), c2.className = u$1.apply(r2, l2) + (s2 ? " " + s2 : ""), t2 && (c2.ref = o2);
        let i2 = e2;
        return e2[0] && (i2 = c2.as || e2, delete c2.as), g && i2[0] && g(c2), d(i2, c2);
      }
      return t2 ? t2(a2) : a2;
    };
  }
  var W = (e2) => typeof e2 == "function", T = (e2, t2) => W(e2) ? e2(t2) : e2;
  var U = (() => {
    let e2 = 0;
    return () => (++e2).toString();
  })(), b = (() => {
    let e2;
    return () => {
      if (e2 === void 0 && typeof window < "u") {
        let t2 = matchMedia("(prefers-reduced-motion: reduce)");
        e2 = !t2 || t2.matches;
      }
      return e2;
    };
  })();
  var Q = 20;
  var S = /* @__PURE__ */ new Map(), X = 1e3, $ = (e2) => {
    if (S.has(e2))
      return;
    let t2 = setTimeout(() => {
      S.delete(e2), u({ type: 4, toastId: e2 });
    }, X);
    S.set(e2, t2);
  }, J = (e2) => {
    let t2 = S.get(e2);
    t2 && clearTimeout(t2);
  }, v = (e2, t2) => {
    switch (t2.type) {
      case 0:
        return { ...e2, toasts: [t2.toast, ...e2.toasts].slice(0, Q) };
      case 1:
        return t2.toast.id && J(t2.toast.id), { ...e2, toasts: e2.toasts.map((r2) => r2.id === t2.toast.id ? { ...r2, ...t2.toast } : r2) };
      case 2:
        let { toast: o2 } = t2;
        return e2.toasts.find((r2) => r2.id === o2.id) ? v(e2, { type: 1, toast: o2 }) : v(e2, { type: 0, toast: o2 });
      case 3:
        let { toastId: s2 } = t2;
        return s2 ? $(s2) : e2.toasts.forEach((r2) => {
          $(r2.id);
        }), { ...e2, toasts: e2.toasts.map((r2) => r2.id === s2 || s2 === void 0 ? { ...r2, visible: false } : r2) };
      case 4:
        return t2.toastId === void 0 ? { ...e2, toasts: [] } : { ...e2, toasts: e2.toasts.filter((r2) => r2.id !== t2.toastId) };
      case 5:
        return { ...e2, pausedAt: t2.time };
      case 6:
        let a2 = t2.time - (e2.pausedAt || 0);
        return { ...e2, pausedAt: void 0, toasts: e2.toasts.map((r2) => ({ ...r2, pauseDuration: r2.pauseDuration + a2 })) };
    }
  }, A = [], P = { toasts: [], pausedAt: void 0 }, u = (e2) => {
    P = v(P, e2), A.forEach((t2) => {
      t2(P);
    });
  }, Y = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, I = (e2 = {}) => {
    let [t2, o2] = reactExports.useState(P);
    reactExports.useEffect(() => (A.push(o2), () => {
      let a2 = A.indexOf(o2);
      a2 > -1 && A.splice(a2, 1);
    }), [t2]);
    let s2 = t2.toasts.map((a2) => {
      var r2, c2;
      return { ...e2, ...e2[a2.type], ...a2, duration: a2.duration || ((r2 = e2[a2.type]) == null ? void 0 : r2.duration) || (e2 == null ? void 0 : e2.duration) || Y[a2.type], style: { ...e2.style, ...(c2 = e2[a2.type]) == null ? void 0 : c2.style, ...a2.style } };
    });
    return { ...t2, toasts: s2 };
  };
  var G = (e2, t2 = "blank", o2) => ({ createdAt: Date.now(), visible: true, type: t2, ariaProps: { role: "status", "aria-live": "polite" }, message: e2, pauseDuration: 0, ...o2, id: (o2 == null ? void 0 : o2.id) || U() }), h = (e2) => (t2, o2) => {
    let s2 = G(t2, e2, o2);
    return u({ type: 2, toast: s2 }), s2.id;
  }, n = (e2, t2) => h("blank")(e2, t2);
  n.error = h("error");
  n.success = h("success");
  n.loading = h("loading");
  n.custom = h("custom");
  n.dismiss = (e2) => {
    u({ type: 3, toastId: e2 });
  };
  n.remove = (e2) => u({ type: 4, toastId: e2 });
  n.promise = (e2, t2, o2) => {
    let s2 = n.loading(t2.loading, { ...o2, ...o2 == null ? void 0 : o2.loading });
    return e2.then((a2) => (n.success(T(t2.success, a2), { id: s2, ...o2, ...o2 == null ? void 0 : o2.success }), a2)).catch((a2) => {
      n.error(T(t2.error, a2), { id: s2, ...o2, ...o2 == null ? void 0 : o2.error });
    }), e2;
  };
  var Z = (e2, t2) => {
    u({ type: 1, toast: { id: e2, height: t2 } });
  }, ee = () => {
    u({ type: 5, time: Date.now() });
  }, D = (e2) => {
    let { toasts: t2, pausedAt: o2 } = I(e2);
    reactExports.useEffect(() => {
      if (o2)
        return;
      let r2 = Date.now(), c2 = t2.map((i2) => {
        if (i2.duration === 1 / 0)
          return;
        let d2 = (i2.duration || 0) + i2.pauseDuration - (r2 - i2.createdAt);
        if (d2 < 0) {
          i2.visible && n.dismiss(i2.id);
          return;
        }
        return setTimeout(() => n.dismiss(i2.id), d2);
      });
      return () => {
        c2.forEach((i2) => i2 && clearTimeout(i2));
      };
    }, [t2, o2]);
    let s2 = reactExports.useCallback(() => {
      o2 && u({ type: 6, time: Date.now() });
    }, [o2]), a2 = reactExports.useCallback((r2, c2) => {
      let { reverseOrder: i2 = false, gutter: d2 = 8, defaultPosition: p2 } = c2 || {}, g2 = t2.filter((m2) => (m2.position || p2) === (r2.position || p2) && m2.height), E2 = g2.findIndex((m2) => m2.id === r2.id), x2 = g2.filter((m2, R2) => R2 < E2 && m2.visible).length;
      return g2.filter((m2) => m2.visible).slice(...i2 ? [x2 + 1] : [0, x2]).reduce((m2, R2) => m2 + (R2.height || 0) + d2, 0);
    }, [t2]);
    return { toasts: t2, handlers: { updateHeight: Z, startPause: ee, endPause: s2, calculateOffset: a2 } };
  };
  var oe = h$1`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, re = h$1`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, se = h$1`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, _$1 = j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e2) => e2.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${re} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e2) => e2.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;
  var ne = h$1`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, V = j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e2) => e2.secondary || "#e0e0e0"};
  border-right-color: ${(e2) => e2.primary || "#616161"};
  animation: ${ne} 1s linear infinite;
`;
  var pe = h$1`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, de = h$1`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, w = j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e2) => e2.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${de} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e2) => e2.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;
  var ue = j("div")`
  position: absolute;
`, le = j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Te = h$1`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, fe = j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Te} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, M = ({ toast: e2 }) => {
    let { icon: t2, type: o2, iconTheme: s2 } = e2;
    return t2 !== void 0 ? typeof t2 == "string" ? reactExports.createElement(fe, null, t2) : t2 : o2 === "blank" ? null : reactExports.createElement(le, null, reactExports.createElement(V, { ...s2 }), o2 !== "loading" && reactExports.createElement(ue, null, o2 === "error" ? reactExports.createElement(_$1, { ...s2 }) : reactExports.createElement(w, { ...s2 })));
  };
  var ye = (e2) => `
0% {transform: translate3d(0,${e2 * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, ge = (e2) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e2 * -150}%,-1px) scale(.6); opacity:0;}
`, he = "0%{opacity:0;} 100%{opacity:1;}", xe = "0%{opacity:1;} 100%{opacity:0;}", be = j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, Se = j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Ae = (e2, t2) => {
    let s2 = e2.includes("top") ? 1 : -1, [a2, r2] = b() ? [he, xe] : [ye(s2), ge(s2)];
    return { animation: t2 ? `${h$1(a2)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${h$1(r2)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
  }, F = reactExports.memo(({ toast: e2, position: t2, style: o2, children: s2 }) => {
    let a2 = e2.height ? Ae(e2.position || t2 || "top-center", e2.visible) : { opacity: 0 }, r2 = reactExports.createElement(M, { toast: e2 }), c2 = reactExports.createElement(Se, { ...e2.ariaProps }, T(e2.message, e2));
    return reactExports.createElement(be, { className: e2.className, style: { ...a2, ...o2, ...e2.style } }, typeof s2 == "function" ? s2({ icon: r2, message: c2 }) : reactExports.createElement(reactExports.Fragment, null, r2, c2));
  });
  m(reactExports.createElement);
  var Ee = ({ id: e2, className: t2, style: o2, onHeightUpdate: s2, children: a2 }) => {
    let r2 = reactExports.useCallback((c2) => {
      if (c2) {
        let i2 = () => {
          let d2 = c2.getBoundingClientRect().height;
          s2(e2, d2);
        };
        i2(), new MutationObserver(i2).observe(c2, { subtree: true, childList: true, characterData: true });
      }
    }, [e2, s2]);
    return reactExports.createElement("div", { ref: r2, className: t2, style: o2 }, a2);
  }, Re = (e2, t2) => {
    let o2 = e2.includes("top"), s2 = o2 ? { top: 0 } : { bottom: 0 }, a2 = e2.includes("center") ? { justifyContent: "center" } : e2.includes("right") ? { justifyContent: "flex-end" } : {};
    return { left: 0, right: 0, display: "flex", position: "absolute", transition: b() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${t2 * (o2 ? 1 : -1)}px)`, ...s2, ...a2 };
  }, ve = u$1`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, O = 16, Ie = ({ reverseOrder: e2, position: t2 = "top-center", toastOptions: o2, gutter: s2, children: a2, containerStyle: r2, containerClassName: c2 }) => {
    let { toasts: i2, handlers: d2 } = D(o2);
    return reactExports.createElement("div", { style: { position: "fixed", zIndex: 9999, top: O, left: O, right: O, bottom: O, pointerEvents: "none", ...r2 }, className: c2, onMouseEnter: d2.startPause, onMouseLeave: d2.endPause }, i2.map((p2) => {
      let g2 = p2.position || t2, E2 = d2.calculateOffset(p2, { reverseOrder: e2, gutter: s2, defaultPosition: t2 }), x2 = Re(g2, E2);
      return reactExports.createElement(Ee, { id: p2.id, key: p2.id, onHeightUpdate: d2.updateHeight, className: p2.visible ? ve : "", style: x2 }, p2.type === "custom" ? T(p2.message, p2) : a2 ? a2(p2) : reactExports.createElement(F, { toast: p2, position: g2 }));
    }));
  };
  var _t = n;
  class MissingRigobotAccountError extends Error {
    constructor(message) {
      super(message);
      this.name = "MissingRigobotAccountError";
    }
  }
  const HOST = getHost();
  Socket.start(HOST, disconnected, onConnectCli);
  const FASTAPI_HOST = "https://ai.4geeks.com";
  const chatSocket = lookup(`${FASTAPI_HOST}`);
  chatSocket.on("connect", () => {
    console.log("connected to chat socket in ", FASTAPI_HOST);
  });
  const defaultParams = getParamsObject();
  const useStore = create((set, get2) => ({
    language: defaultParams.language || "us",
    languageMap: {
      us: "en",
      es: "sp"
    },
    showTutorial: true,
    learnpackPurposeId: defaultParams.purpose || 26,
    exercises: [],
    currentContent: "",
    targetButtonForFeedback: "feedback",
    dialogData: {},
    chatSocket,
    currentExercisePosition: defaultParams.currentExercise || 0,
    chatInitialMessage: "Hello! I'm **Rigobot**, your friendly **AI Mentor**! \n\n I can help you if you feel stuck, ask me anything about this exercise!",
    conversationIdsCache: {},
    lessonTitle: "",
    numberOfExercises: 0,
    user_id: null,
    solvedExercises: 0,
    hasSolution: false,
    shouldBeTested: false,
    status: "",
    showFeedback: false,
    token: "",
    bc_token: "",
    buildbuttonText: {
      text: "Run",
      className: ""
    },
    feedbackbuttonProps: {
      text: "Get feedback",
      className: ""
    },
    configObject: {
      config: {
        intro: "",
        grading: "",
        editor: {
          agent: ""
        }
      }
    },
    videoTutorial: "",
    allowedActions: [],
    compilerSocket: Socket.createScope("compiler"),
    showVideoTutorial: false,
    exerciseMessages: {},
    host: HOST,
    openedModals: {
      chat: false,
      login: false,
      video: false,
      reset: false
    },
    lastTestResult: {
      status: "",
      logs: ""
    },
    // setters
    start: () => {
      const {
        fetchExercises,
        fetchReadme,
        checkParams,
        startConversation,
        token,
        checkLoggedStatus,
        currentExercisePosition,
        setListeners,
        getConfigObject
      } = get2();
      fetchExercises().then(() => {
        return checkParams({ justReturn: false });
      }).then((params) => {
        if (Object.keys(params).length === 0) {
          fetchReadme();
        }
      }).then(() => {
        checkLoggedStatus({ startConversation: true });
      }).then(() => {
        setListeners();
      });
    },
    setListeners: () => {
      const {
        compilerSocket,
        setTestResult,
        toastFromStatus,
        setFeedbackButtonProps,
        setOpenedModals,
        setBuildButtonText
      } = get2();
      let debounceSuccess = debounce$1((data) => {
        const stdout = removeSpecialCharacters(data.logs[0]);
        setTestResult("successful", stdout);
        toastFromStatus("testing-success");
        if (get2().targetButtonForFeedback === "feedback") {
          setFeedbackButtonProps("Succeded", "bg-success text-white");
        } else {
          setBuildButtonText("Succeded", "bg-success text-white");
        }
      }, 100);
      let debounceError = debounce$1((data) => {
        const stdout = removeSpecialCharacters(data.logs[0]);
        setTestResult("failed", stdout);
        toastFromStatus("testing-error");
        if (get2().targetButtonForFeedback === "feedback") {
          setFeedbackButtonProps("Try again", "bg-fail text-white");
        } else {
          setBuildButtonText("Try again", "bg-fail text-white");
        }
      }, 100);
      compilerSocket.onStatus("testing-success", debounceSuccess);
      compilerSocket.onStatus("testing-error", debounceError);
      compilerSocket.onStatus("open_window", (data) => {
        toastFromStatus("open_window");
      });
      compilerSocket.on("dialog", (data) => {
        set({ dialogData: data.data });
        setOpenedModals({ dialog: true });
      });
    },
    getCurrentExercise: () => {
      const { exercises, currentExercisePosition } = get2();
      return exercises[currentExercisePosition];
    },
    setExerciseMessages: (messages2, position) => {
      set({
        exerciseMessages: { ...get2().exerciseMessages, [position]: messages2 }
      });
    },
    setShowVideoTutorial: (show) => {
      set({ showVideoTutorial: show });
    },
    setAllowedActions: (actions2) => {
      set({ allowedActions: actions2 });
    },
    // functions
    setBuildButtonText: (t2, c2 = "") => {
      set({ buildbuttonText: { text: t2, className: c2 } });
    },
    setFeedbackButtonProps: (t2, c2 = "") => {
      set({ feedbackbuttonProps: { text: t2, className: c2 } });
    },
    setOpenedModals: (modals2) => {
      const { openedModals } = get2();
      set({ openedModals: { ...openedModals, ...modals2 } });
    },
    setToken: (newToken) => {
      set({ token: newToken });
    },
    checkLoggedStatus: async (opts) => {
      const { startConversation, currentExercisePosition, setOpenedModals } = get2();
      try {
        const res = await fetch(`${HOST}/check/rigo/status`);
        const json = await res.json();
        if (res.status === 400) {
          throw Error("The user is not logged in");
        }
        set({ token: json.rigoToken });
        set({ bc_token: json.payload.token });
        if (opts.startConversation) {
          startConversation(currentExercisePosition);
        }
      } catch (err) {
        console.error("ERROR Trying to get Rigobot status ", err);
        set({ token: "" });
        setOpenedModals({ login: true });
      }
    },
    getContextFilesContent: async () => {
      const {
        getCurrentExercise,
        currentReadme,
        isBuildable,
        isTesteable,
        configObject,
        language
      } = get2();
      let context = "";
      const getExtractor = (mode2 = "isolated") => {
        const modeToExtractor = {
          isolated: (file) => {
            return !file.hidden && !file.name.toLowerCase().includes("readme") && !file.name.toLowerCase().includes("pycache");
          },
          incremental: (file) => {
            return file && !file.name.toLowerCase().includes("readme") || !file.name.toLowerCase().includes("pycache");
          }
        };
        return modeToExtractor[mode2];
      };
      let currentExercise = getCurrentExercise();
      const slug = currentExercise.slug;
      let mode = configObject.config.grading;
      if (!["incremental", "isolated"].includes(mode))
        mode = "incremental";
      let extractor = getExtractor(mode);
      let contextFiles = currentExercise.files.filter(extractor);
      let filePromises = contextFiles.map(async (file, index2) => {
        let fileContent = await getFileContent(slug, file.name);
        return `---
      # File name: ${file.name}. Content: 
      \`${fileContent}\`
      ---
      `;
      });
      return Promise.all(filePromises).then((filesContext) => {
        context += filesContext.join("\n");
        context += `
      ---This is the current exercise instructions:
      ${currentReadme}
      ---
      
      <MANDATORY FOR AI: The user's set up the application in "${language}" language, give your feedback in "${language}" language, please.>

      `;
        return context;
      });
    },
    getConfigObject: async () => {
      if (!HOST) {
        return;
      }
      try {
        const res = await fetch(`${HOST}/config`);
        const config2 = await res.json();
        set({ configObject: config2 });
        return config2;
      } catch (err) {
        disconnected();
      }
    },
    fetchExercises: async () => {
      const { getLessonTitle, fetchReadme, user_id, setOpenedModals } = get2();
      try {
        const res = await fetch(`${HOST}/config`);
        const config2 = await res.json();
        if (config2.config.warnings.agent) {
          set({
            dialogData: { message: config2.config.warnings.agent, format: "md" }
          });
          setOpenedModals({ dialog: true });
        }
        if (config2.config.warnings.extension) {
          set({
            dialogData: { message: config2.config.warnings.extension, format: "md" }
          });
          setOpenedModals({ dialog: true });
        }
        const slug = config2.config.slug;
        TagManager.dataLayer({
          dataLayer: {
            event: "start_exercise",
            slug,
            user_id
          }
        });
        set({ exercises: config2.exercises });
        set({ numberOfExercises: config2.exercises.length });
        set({ lessonTitle: config2.config.title.us });
        set({ configObject: config2 });
      } catch (err) {
        disconnected();
      }
    },
    checkParams: ({ justReturn }) => {
      const { setLanguage, setPosition, currentExercisePosition, language } = get2();
      let params = window.location.hash.substring(1);
      const paramsUrlSeaerch = new URLSearchParams(params);
      let paramsObject = {};
      for (const [key, value2] of paramsUrlSeaerch.entries()) {
        paramsObject[key] = value2;
      }
      if (justReturn) {
        return paramsObject;
      }
      const languageParam = paramsObject.language;
      const position = paramsObject.currentExercise;
      if (languageParam) {
        setLanguage(language, false);
      }
      if (position) {
        setPosition(Number(position));
      }
      return paramsObject;
    },
    fetchSingleExerciseInfo: async (index2) => {
      var _a;
      const { exercises } = get2();
      if (exercises.length <= 0) {
        return;
      }
      const slug = (_a = exercises[index2]) == null ? void 0 : _a.slug;
      if (!slug) {
        return;
      }
      const respose = await getExercise(slug);
      const exercise = await respose.json();
      let isTesteable = exercise.graded;
      let isBuildable;
      let hasSolution = false;
      if (exercise.entry)
        isBuildable = true;
      if (!exercise.language)
        isBuildable = false;
      const solutionFile = exercise.files.find(
        (file) => file.name.includes("solution.hide")
      );
      if (solutionFile) {
        hasSolution = true;
        let solution = await getFileContent(slug, solutionFile.name);
        set({ currentSolution: solution });
      }
      set({
        isTesteable,
        isBuildable,
        hasSolution
      });
      return exercise;
    },
    setPosition: (newPosition) => {
      const {
        startConversation,
        fetchReadme,
        token,
        setBuildButtonText,
        setFeedbackButtonProps,
        checkParams
      } = get2();
      let params = checkParams({ justReturn: true });
      let hash = `currentExercise=${newPosition}${params.language ? "&language=" + params.language : ""}`;
      window.location.hash = hash;
      set({ currentExercisePosition: newPosition });
      if (token) {
        startConversation(newPosition);
      }
      setBuildButtonText("Run", "");
      setFeedbackButtonProps("Get feedback", "");
      fetchReadme();
    },
    startConversation: async (exercisePosition) => {
      const { token, learnpackPurposeId, conversationIdsCache } = get2();
      let conversationId = null;
      let initialData = null;
      if (!token) {
        return;
      }
      try {
        conversationId = conversationIdsCache[exercisePosition];
        if (!conversationId) {
          throw new Error("ConversationID not found in cache");
        }
      } catch (err) {
        initialData = await startChat(learnpackPurposeId, token);
        conversationId = initialData.conversation_id;
      }
      if (initialData && initialData.salute) {
        set({ chatInitialMessage: initialData.salute });
      }
      set({
        conversationIdsCache: {
          ...conversationIdsCache,
          [exercisePosition]: conversationId
        }
      });
      chatSocket.emit("start", {
        token,
        purpose: learnpackPurposeId,
        conversationId
      });
    },
    loginToRigo: async (loginInfo) => {
      const {
        host,
        setToken,
        startConversation,
        currentExercisePosition,
        setOpenedModals
      } = get2();
      const config2 = {
        method: "post",
        body: JSON.stringify(loginInfo),
        headers: {
          "Content-Type": "application/json"
        }
      };
      try {
        const res = await fetch(host + "/login", config2);
        const json = await res.json();
        set({ bc_token: json.token, user_id: json.user_id });
        if (json.rigobot == null) {
          throw new MissingRigobotAccountError(
            "No rigobot user found, did you already accept Rigobot's invitation?"
          );
        }
        setToken(json.rigobot.key);
        _t.success("Successfully logged in");
      } catch (error) {
        if (error instanceof MissingRigobotAccountError) {
          setOpenedModals({ login: false, rigobotInvite: true });
          return false;
        } else {
          const errorMessage = `It appears that something was wrong with your 4Geeks credentials, please try again`;
          _t.error(errorMessage);
          return false;
        }
      }
      startConversation(currentExercisePosition);
      setOpenedModals({ login: false, chat: true });
      return true;
    },
    checkRigobotInvitation: async () => {
      const { bc_token, setToken, openLink, setOpenedModals } = get2();
      const rigoAcceptedUrl = `${RIGOBOT_API_URL}/v1/auth/me/token?breathecode_token=${bc_token}`;
      const res = await fetch(rigoAcceptedUrl);
      if (res.status != 200) {
        _t.error("You have not accepted Rigobot's invitation yet!");
        openLink(
          "https://rigobot.herokuapp.com/invite?referer=4geeks&token=" + bc_token
        );
        return;
      }
      const data = await res.json();
      setToken(data.key);
      const payload = { token: data.key };
      const config2 = {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      };
      await fetch(`${HOST}/set-rigobot-token`, config2);
      setOpenedModals({ chat: true });
    },
    openLink: (url2) => {
      const { compilerSocket, getCurrentExercise } = get2();
      const data = {
        url: url2,
        exerciseSlug: getCurrentExercise().slug
      };
      compilerSocket.openWindow(data);
    },
    clearBcToken: () => {
      set({ bc_token: "" });
    },
    fetchReadme: async () => {
      var _a;
      const {
        language,
        exercises,
        currentExercisePosition,
        getConfigObject,
        setShowVideoTutorial,
        fetchSingleExerciseInfo,
        configObject,
        openLink
      } = get2();
      const slug = (_a = exercises[currentExercisePosition]) == null ? void 0 : _a.slug;
      if (!slug) {
        return;
      }
      const response = await fetch(
        `${HOST}/exercise/${slug}/readme?lang=${language}`
      );
      const exercise = await response.json();
      if (exercise.attributes.tutorial) {
        set({ videoTutorial: exercise.attributes.tutorial });
      } else if (exercise.attributes.intro) {
        set({
          videoTutorial: exercise.attributes.intro,
          showVideoTutorial: true
        });
      } else {
        set({ videoTutorial: "", showVideoTutorial: false });
      }
      let readme = replaceSlot(exercise.body, "{{publicUrl}}", HOST);
      if (typeof configObject.config.variables === "object") {
        for (let v2 in configObject.config.variables) {
          readme = replaceSlot(
            readme,
            `{{${v2}}}`,
            configObject.config.variables[v2]
          );
        }
      }
      set({ currentContent: readme });
      set({ currentReadme: readme });
      fetchSingleExerciseInfo(currentExercisePosition);
      getConfigObject();
    },
    toggleSidebar: () => {
      changeSidebarVisibility();
    },
    setLanguage: (language, fetchExercise = true) => {
      const { fetchReadme, checkParams } = get2();
      set({ language });
      let params = checkParams({ justReturn: true });
      let hash = `language=${language}${params.currentExercise ? "&currentExercise=" + params.currentExercise : ""}`;
      window.location.hash = hash;
      if (fetchExercise) {
        fetchReadme();
      }
    },
    openTerminal: () => {
      const { compilerSocket, getCurrentExercise } = get2();
      const data = {
        exerciseSlug: getCurrentExercise().slug
      };
      compilerSocket.emit("open_terminal", data);
    },
    handlePositionChange: async (desiredPosition) => {
      const {
        configObject,
        currentExercisePosition,
        exercises,
        setPosition,
        isTesteable,
        runExerciseTests
      } = get2();
      const gradingMode = configObject.config.grading;
      const lastExercise = exercises.length - 1;
      if (desiredPosition > lastExercise || desiredPosition < 0) {
        _t.error("The exercise you are looking for does not exist!");
        return;
      }
      if (desiredPosition == currentExercisePosition) {
        return;
      }
      let letPass = true;
      if (desiredPosition > currentExercisePosition) {
        letPass = !isTesteable || gradingMode === "isolated" || gradingMode === "incremental" && exercises[currentExercisePosition].done;
      }
      if (!letPass) {
        runExerciseTests({
          toast: true,
          setFeedbackButton: true,
          feedbackButtonText: "Running...",
          targetButton: "feedback"
        });
        return;
      }
      setPosition(Number(desiredPosition));
    },
    toastFromStatus: (status) => {
      const { language } = get2();
      const [icon, message] = getStatus(status, language);
      let duration = 1500;
      if (status === "testing-error") {
        duration = 3e3;
      }
      _t.success(message, { icon, duration });
    },
    setTestResult: (status, logs) => {
      const { exercises } = get2();
      const copy2 = [...exercises];
      copy2[get2().currentExercisePosition].done = status === "successful";
      set({ exercises: copy2 });
    },
    setShouldBeTested: (value2) => {
      set({ shouldBeTested: value2 });
    },
    build: (buildText) => {
      const { setBuildButtonText, compilerSocket, getCurrentExercise } = get2();
      setBuildButtonText(buildText, "");
      const [icon, message] = getStatus("compiling");
      _t.success(message, { icon });
      const data = {
        exerciseSlug: getCurrentExercise().slug
      };
      compilerSocket.emit("build", data);
    },
    runExerciseTests: (opts) => {
      const {
        compilerSocket,
        getCurrentExercise,
        setFeedbackButtonProps,
        isTesteable,
        toastFromStatus
      } = get2();
      const data = {
        exerciseSlug: getCurrentExercise().slug
      };
      compilerSocket.emit("test", data);
      set({ shouldBeTested: false });
      if (opts == null ? void 0 : opts.targetButton) {
        set({ targetButtonForFeedback: opts.targetButton });
      }
      if (opts && opts.setFeedbackButton && opts.targetButton === "feedback")
        setFeedbackButtonProps(opts.feedbackButtonText, "palpitate");
      if (opts && opts.toast)
        toastFromStatus("testing");
    },
    // Turn the following property to true to easily test things using a button in the navbar
    registerAIInteraction: (stepPosition, interaction) => {
      const { compilerSocket, getCurrentExercise } = get2();
      const telemetryData = {
        exerciseSlug: getCurrentExercise().slug,
        stepPosition,
        event: "ai_interaction",
        eventData: interaction
      };
      compilerSocket.emit("ai_interaction", telemetryData);
    },
    // Leave this empty for development purposes
    displayTestButton: DEV_MODE,
    test: async () => {
      const { openTerminal } = get2();
      openTerminal();
    }
  }));
  function LessonContent() {
    const { currentContent, start, openLink } = useStore((state) => ({
      currentContent: state.currentContent,
      start: state.start,
      openLink: state.openLink
    }));
    reactExports.useEffect(() => {
      start();
    }, []);
    reactExports.useEffect(() => {
      const lessonContentDiv = document.querySelector(".lesson-content-component");
      if (!lessonContentDiv)
        return;
      const anchors = lessonContentDiv.getElementsByTagName("a");
      const handleClick = (event) => {
        event.preventDefault();
        openLink(event.target.href);
      };
      for (let anchor of anchors) {
        anchor.addEventListener("click", handleClick);
      }
      return () => {
        for (let anchor of anchors) {
          anchor.removeEventListener("click", handleClick);
        }
      };
    }, [currentContent]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lesson-content-component", dangerouslySetInnerHTML: { __html: convertMarkdownToHTML(currentContent) } }) });
  }
  const styles$4 = "";
  function warn() {
    if (console && console.warn) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (typeof args[0] === "string")
        args[0] = `react-i18next:: ${args[0]}`;
      console.warn(...args);
    }
  }
  const alreadyWarned = {};
  function warnOnce() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === "string" && alreadyWarned[args[0]])
      return;
    if (typeof args[0] === "string")
      alreadyWarned[args[0]] = /* @__PURE__ */ new Date();
    warn(...args);
  }
  const loadedClb = (i18n, cb2) => () => {
    if (i18n.isInitialized) {
      cb2();
    } else {
      const initialized = () => {
        setTimeout(() => {
          i18n.off("initialized", initialized);
        }, 0);
        cb2();
      };
      i18n.on("initialized", initialized);
    }
  };
  function loadNamespaces(i18n, ns, cb2) {
    i18n.loadNamespaces(ns, loadedClb(i18n, cb2));
  }
  function loadLanguages(i18n, lng, ns, cb2) {
    if (typeof ns === "string")
      ns = [ns];
    ns.forEach((n2) => {
      if (i18n.options.ns.indexOf(n2) < 0)
        i18n.options.ns.push(n2);
    });
    i18n.loadLanguages(lng, loadedClb(i18n, cb2));
  }
  function oldI18nextHasLoadedNamespace(ns, i18n) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const lng = i18n.languages[0];
    const fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
    const lastLng = i18n.languages[i18n.languages.length - 1];
    if (lng.toLowerCase() === "cimode")
      return true;
    const loadNotPending = (l2, n2) => {
      const loadState = i18n.services.backendConnector.state[`${l2}|${n2}`];
      return loadState === -1 || loadState === 2;
    };
    if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns))
      return false;
    if (i18n.hasResourceBundle(lng, ns))
      return true;
    if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages)
      return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns)))
      return true;
    return false;
  }
  function hasLoadedNamespace(ns, i18n) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!i18n.languages || !i18n.languages.length) {
      warnOnce("i18n.languages were undefined or empty", i18n.languages);
      return true;
    }
    const isNewerI18next = i18n.options.ignoreJSONStructure !== void 0;
    if (!isNewerI18next) {
      return oldI18nextHasLoadedNamespace(ns, i18n, options);
    }
    return i18n.hasLoadedNamespace(ns, {
      lng: options.lng,
      precheck: (i18nInstance2, loadNotPending) => {
        if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18nInstance2.services.backendConnector.backend && i18nInstance2.isLanguageChangingTo && !loadNotPending(i18nInstance2.isLanguageChangingTo, ns))
          return false;
      }
    });
  }
  const matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
  const htmlEntities = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/"
  };
  const unescapeHtmlEntity = (m2) => htmlEntities[m2];
  const unescape = (text2) => text2.replace(matchHtmlEntity, unescapeHtmlEntity);
  let defaultOptions = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: true,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: true,
    unescape
  };
  function setDefaults() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    defaultOptions = {
      ...defaultOptions,
      ...options
    };
  }
  function getDefaults() {
    return defaultOptions;
  }
  let i18nInstance;
  function setI18n(instance2) {
    i18nInstance = instance2;
  }
  function getI18n() {
    return i18nInstance;
  }
  const initReactI18next = {
    type: "3rdParty",
    init(instance2) {
      setDefaults(instance2.options.react);
      setI18n(instance2);
    }
  };
  const I18nContext = reactExports.createContext();
  class ReportNamespaces {
    constructor() {
      this.usedNamespaces = {};
    }
    addUsedNamespaces(namespaces) {
      namespaces.forEach((ns) => {
        if (!this.usedNamespaces[ns])
          this.usedNamespaces[ns] = true;
      });
    }
    getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  }
  const usePrevious = (value2, ignore) => {
    const ref = reactExports.useRef();
    reactExports.useEffect(() => {
      ref.current = ignore ? ref.current : value2;
    }, [value2, ignore]);
    return ref.current;
  };
  function alwaysNewT(i18n, language, namespace, keyPrefix) {
    return i18n.getFixedT(language, namespace, keyPrefix);
  }
  function useMemoizedT(i18n, language, namespace, keyPrefix) {
    return reactExports.useCallback(alwaysNewT(i18n, language, namespace, keyPrefix), [i18n, language, namespace, keyPrefix]);
  }
  function useTranslation(ns) {
    let props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
      i18n: i18nFromProps
    } = props;
    const {
      i18n: i18nFromContext,
      defaultNS: defaultNSFromContext
    } = reactExports.useContext(I18nContext) || {};
    const i18n = i18nFromProps || i18nFromContext || getI18n();
    if (i18n && !i18n.reportNamespaces)
      i18n.reportNamespaces = new ReportNamespaces();
    if (!i18n) {
      warnOnce("You will need to pass in an i18next instance by using initReactI18next");
      const notReadyT = (k2, optsOrDefaultValue) => {
        if (typeof optsOrDefaultValue === "string")
          return optsOrDefaultValue;
        if (optsOrDefaultValue && typeof optsOrDefaultValue === "object" && typeof optsOrDefaultValue.defaultValue === "string")
          return optsOrDefaultValue.defaultValue;
        return Array.isArray(k2) ? k2[k2.length - 1] : k2;
      };
      const retNotReady = [notReadyT, {}, false];
      retNotReady.t = notReadyT;
      retNotReady.i18n = {};
      retNotReady.ready = false;
      return retNotReady;
    }
    if (i18n.options.react && i18n.options.react.wait !== void 0)
      warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    const i18nOptions = {
      ...getDefaults(),
      ...i18n.options.react,
      ...props
    };
    const {
      useSuspense,
      keyPrefix
    } = i18nOptions;
    let namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
    namespaces = typeof namespaces === "string" ? [namespaces] : namespaces || ["translation"];
    if (i18n.reportNamespaces.addUsedNamespaces)
      i18n.reportNamespaces.addUsedNamespaces(namespaces);
    const ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every((n2) => hasLoadedNamespace(n2, i18n, i18nOptions));
    const memoGetT = useMemoizedT(i18n, props.lng || null, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
    const getT = () => memoGetT;
    const getNewT = () => alwaysNewT(i18n, props.lng || null, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
    const [t2, setT] = reactExports.useState(getT);
    let joinedNS = namespaces.join();
    if (props.lng)
      joinedNS = `${props.lng}${joinedNS}`;
    const previousJoinedNS = usePrevious(joinedNS);
    const isMounted = reactExports.useRef(true);
    reactExports.useEffect(() => {
      const {
        bindI18n,
        bindI18nStore
      } = i18nOptions;
      isMounted.current = true;
      if (!ready && !useSuspense) {
        if (props.lng) {
          loadLanguages(i18n, props.lng, namespaces, () => {
            if (isMounted.current)
              setT(getNewT);
          });
        } else {
          loadNamespaces(i18n, namespaces, () => {
            if (isMounted.current)
              setT(getNewT);
          });
        }
      }
      if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
        setT(getNewT);
      }
      function boundReset() {
        if (isMounted.current)
          setT(getNewT);
      }
      if (bindI18n && i18n)
        i18n.on(bindI18n, boundReset);
      if (bindI18nStore && i18n)
        i18n.store.on(bindI18nStore, boundReset);
      return () => {
        isMounted.current = false;
        if (bindI18n && i18n)
          bindI18n.split(" ").forEach((e2) => i18n.off(e2, boundReset));
        if (bindI18nStore && i18n)
          bindI18nStore.split(" ").forEach((e2) => i18n.store.off(e2, boundReset));
      };
    }, [i18n, joinedNS]);
    reactExports.useEffect(() => {
      if (isMounted.current && ready) {
        setT(getT);
      }
    }, [i18n, keyPrefix, ready]);
    const ret = [t2, i18n, ready];
    ret.t = t2;
    ret.i18n = i18n;
    ret.ready = ready;
    if (ready)
      return ret;
    if (!ready && !useSuspense)
      return ret;
    throw new Promise((resolve) => {
      if (props.lng) {
        loadLanguages(i18n, props.lng, namespaces, () => resolve());
      } else {
        loadNamespaces(i18n, namespaces, () => resolve());
      }
    });
  }
  const Alert = ({ children }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert", children });
  };
  const OpenWindowLink = ({
    href,
    text: text2,
    callback
  }) => {
    const openLink = useStore((state) => state.openLink);
    const handleRedirect = (e2) => {
      e2.preventDefault();
      openLink(e2.target.href);
      if (callback) {
        callback();
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, onClick: handleRedirect, children: text2 });
  };
  function LessonContainer() {
    const { t: t2 } = useTranslation();
    const [alerts, setAlerts] = reactExports.useState({
      incrementalTest: false,
      agent: true
    });
    const { exercises, getCurrentExercise, configObject, isTesteable } = useStore(
      (state) => ({
        getCurrentExercise: state.getCurrentExercise,
        exercises: state.exercises,
        configObject: state.configObject,
        isTesteable: state.isTesteable
      })
    );
    reactExports.useEffect(() => {
      const current = getCurrentExercise();
      if (current === void 0)
        return;
      setAlerts((prevAlerts) => ({
        ...prevAlerts,
        incrementalTest: configObject.config.grading === "incremental" && !current.done && isTesteable
      }));
    }, [exercises, configObject]);
    const handleHideAlert = (alertName) => {
      setAlerts((prevAlerts) => ({
        ...prevAlerts,
        [alertName]: false
      }));
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lesson-container-component", children: [
      alerts.incrementalTest && /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { children: t2("incremental-test-alert") }),
      configObject.config.warnings && configObject.config.warnings.agent && alerts.agent && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex space-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          t2("agent-mismatch-error"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(OpenWindowLink, { href: "https://4geeks.com/lesson/agent-vs-mode", text: "Read more" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleHideAlert("agent"), children: "Hide" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LessonContent, {})
    ] });
  }
  const InputModal = ({ name: name2, onCancel, onSubmit }) => {
    const [value2, setValue] = reactExports.useState("");
    const handleSubmit = () => {
      onSubmit(value2);
      setValue("");
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-modal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: name2 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          onKeyUp: (e2) => {
            if (e2.key === "Enter") {
              handleSubmit();
            }
          },
          onChange: (e2) => setValue(e2.target.value),
          type: "text",
          value: value2,
          placeholder: "Enter your value here"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSubmit, className: "bg-blue", children: "Submit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onCancel, children: "Cancel" })
      ] })
    ] });
  };
  const styles$3 = "";
  function SocketHandler() {
    const {
      compilerSocket,
      exercises,
      setShouldBeTested,
      getCurrentExercise,
      currentExercisePosition
    } = useStore((state) => ({
      compilerSocket: state.compilerSocket,
      exercises: state.exercises,
      setAllowedActions: state.setAllowedActions,
      setShouldBeTested: state.setShouldBeTested,
      getCurrentExercise: state.getCurrentExercise,
      currentExercisePosition: state.currentExercisePosition
    }));
    const [inputsResponses, setInputsResponses] = reactExports.useState([]);
    const [inputs, setInputs] = reactExports.useState([]);
    const [shouldWeSend, setShouldWeSend] = reactExports.useState(false);
    reactExports.useEffect(() => {
      compilerSocket.on("file_change", (data) => {
        const current = getCurrentExercise();
        const fullpath = data.logs;
        const doesCurrentStepChange = fullpath.includes(current.path);
        if (!doesCurrentStepChange)
          return;
        setShouldBeTested(true);
      });
    }, []);
    reactExports.useEffect(() => {
      compilerSocket.on("reload", (data) => {
        window.location.reload();
      });
      compilerSocket.on("ask", async ({ inputs: inputs2 }) => {
        setInputs(inputs2);
      });
    }, [currentExercisePosition, exercises]);
    reactExports.useEffect(() => {
      if (inputsResponses.length === 0)
        return;
      const emitResponses = () => {
        compilerSocket.emit("input", {
          inputs: inputsResponses,
          exerciseSlug: exercises[currentExercisePosition].slug
        });
        setInputsResponses([]);
      };
      if (shouldWeSend) {
        emitResponses();
        setShouldWeSend(false);
      }
    }, [shouldWeSend]);
    const handleCancel = () => {
      setInputsResponses((prev2) => [...prev2, ""]);
      const newInputs = inputs.slice(1);
      setInputs(newInputs);
      if (newInputs.length === 0) {
        setShouldWeSend(true);
      }
    };
    const handleInputSubmit = (value2) => {
      setInputsResponses((prev2) => [...prev2, value2]);
      const newInputs = inputs.slice(1);
      setInputs(newInputs);
      if (newInputs.length === 0) {
        setShouldWeSend(true);
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: inputs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      InputModal,
      {
        name: inputs[0],
        onCancel: handleCancel,
        onSubmit: handleInputSubmit
      }
    ) });
  }
  const svgs = {
    buildIcon: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "15",
        height: "13",
        viewBox: "0 0 8 6",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { clipPath: "url(#clip0_544_516)", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M2.10358 4.59753L0.8353 3.2226L2.10358 1.84767",
                stroke: "white",
                strokeWidth: "0.505448",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M5.90039 4.59753L7.16867 3.2226L5.90039 1.84767",
                stroke: "white",
                strokeWidth: "0.505448",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M2.94233 5.68985L5.06477 0.755509",
                stroke: "white",
                strokeWidth: "0.505448",
                strokeLinecap: "round"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { id: "clip0_544_516", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              width: "7.17446",
              height: "5",
              fill: "white",
              transform: "translate(0.421326 0.72229)"
            }
          ) }) })
        ]
      }
    ),
    dropdownButton: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        width: "24",
        height: "16",
        viewBox: "0 0 24 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            opacity: "0.8",
            d: "M8 15.7979H24V13.1649H8V15.7979ZM0 0V2.63299H24V0H0ZM8 9.21546H24V6.58247H8V9.21546Z",
            fill: "#3F4C5A"
          }
        )
      }
    ),
    nextArrowButton: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "30",
        height: "30",
        viewBox: "0 0 21 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "10.5", cy: "10.5", r: "10.5", fill: "#EFF1F4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M5.66634 10.8882L13.7797 10.8882L10.053 14.0602L10.9997 14.8603L16.333 10.3208L10.9997 5.7813L10.0597 6.58139L13.7797 9.75335L5.66634 9.75335V10.8882Z",
              fill: "#3F4C5A"
            }
          )
        ]
      }
    ),
    prevArrowButton: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "30",
        height: "30",
        viewBox: "0 0 21 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "10.5", cy: "10.5", r: "10.5", fill: "#EFF1F4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M16.3332 10.4556H8.21984L11.9465 7.28365L10.9998 6.48356L5.6665 11.023L10.9998 15.5625L11.9398 14.7624L8.21984 11.5905H16.3332V10.4556Z",
              fill: "#3F4C5A"
            }
          )
        ]
      }
    ),
    closeIcon: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "30px",
        height: "30px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "#1C274C", strokeWidth: "1.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5",
              stroke: "#1C274C",
              strokeWidth: "1.5",
              strokeLinecap: "round"
            }
          )
        ]
      }
    ),
    nextIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        fill: "#000000",
        height: "800px",
        width: "800px",
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "0 0 512 512",
        xmlSpace: "preserve",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333\r\n				c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333\r\n				z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M228.418,134.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L289.83,256l-91.582,91.582\r\n				c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17\r\n				L228.418,134.248z"
            }
          )
        ] }) }) })
      }
    ),
    previusIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        fill: "#000000",
        height: "800px",
        width: "800px",
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "0 0 512 512",
        xmlSpace: "preserve",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333\r\n				c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333\r\n				z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M313.752,134.248c-8.331-8.331-21.839-8.331-30.17,0L176.915,240.915c-8.331,8.331-8.331,21.839,0,30.17l106.667,106.667\r\n				c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17L222.17,256l91.582-91.582\r\n				C322.083,156.087,322.083,142.58,313.752,134.248z"
            }
          )
        ] }) }) })
      }
    ),
    fourGeeksIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        width: "17",
        height: "17",
        viewBox: "0 0 19 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M15.9386 12.2931L16.0404 11.3769H17.011C17.6957 11.3769 18.2605 10.7787 18.2605 10.0981V6.59072C18.4781 6.53077 18.9132 6.37039 18.9132 6.04409V5.71079C18.9132 5.44303 18.5729 5.14458 18.3289 5.14458H18.0123C17.7892 4.85449 17.4238 4.70947 17.011 4.70947H16.3444C16.0892 4.20185 15.7001 3.72908 15.2454 3.37765C15.3445 3.33582 15.4379 3.28701 15.5258 3.2368C16.1087 2.90629 16.4559 2.47397 16.5592 1.95658C16.7363 1.05709 16.1031 0.234288 16.0766 0.200818L15.919 0L15.8312 0.238472C15.8284 0.246839 15.4895 1.1296 14.2442 1.1296C14.1549 1.1296 14.0628 1.12542 13.968 1.11566C13.0825 1.03198 12.4716 0.836743 11.8246 0.630348C10.8512 0.320752 9.84426 0 7.80679 0C6.73579 0 5.79585 0.225921 5.01209 0.673579C4.38314 1.03198 3.85599 1.53263 3.44459 2.16019C2.81006 3.12802 2.65247 4.09307 2.62458 4.2911C2.53394 4.42498 2.45166 4.56444 2.38193 4.70947H1.7739C1.3611 4.70947 0.997117 4.85449 0.772594 5.14458H0.458814C0.188267 5.14458 0 5.46113 0 5.71079V6.04409C0 6.38575 0.435106 6.53777 0.652661 6.59351V10.0967C0.652661 10.43 0.747492 10.7536 0.952492 10.9864C1.16726 11.2305 1.44896 11.3769 1.77669 11.3769H2.68874L2.70547 11.5415L2.71941 11.667H2.72081L2.79054 12.2987C2.90489 13.1718 3.32466 13.8746 4.00103 14.3516C4.61464 14.7824 5.41929 15.0014 6.32717 15.0014H12.3992C13.2693 15.0014 14.0991 14.7532 14.7364 14.2846C15.417 13.7826 15.8312 13.1006 15.9386 12.2931ZM7.97139 10.0967C7.97139 10.2348 7.67015 10.4342 7.47629 10.4342H1.77669C1.75158 10.4342 1.73345 10.4286 1.72648 10.423C1.6944 10.391 1.68046 10.2459 1.68046 10.1511C1.68046 10.1343 1.66651 10.1162 1.66651 10.0981V5.9325C1.66651 5.91439 1.68046 5.89765 1.68046 5.88091C1.68046 5.79027 1.68604 5.63684 1.71532 5.60757C1.71951 5.60199 1.74461 5.57967 1.77529 5.57967H7.25595C7.71336 5.57967 7.96997 5.99108 7.96997 6.15147V10.0967H7.97139ZM11.3114 10.4342C11.1064 10.4342 11.0869 10.1316 11.0869 10.0967V6.15147C11.0869 5.76932 11.2249 5.57967 11.5303 5.57967H17.011C17.2132 5.57967 17.5367 5.80422 17.5367 5.9325V10.0967C17.5367 10.2278 17.209 10.4342 17.011 10.4342H11.3114Z",
            fill: "var(--color-active)"
          }
        )
      }
    ),
    questionIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        width: "26",
        height: "26",
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M7.5 0C3.36 0 0 3.36 0 7.5C0 11.64 3.36 15 7.5 15C11.64 15 15 11.64 15 7.5C15 3.36 11.64 0 7.5 0ZM8.25 12.75H6.75V11.25H8.25V12.75ZM9.8025 6.9375L9.1275 7.6275C8.5875 8.175 8.25 8.625 8.25 9.75H6.75V9.375C6.75 8.55 7.0875 7.8 7.6275 7.2525L8.5575 6.3075C8.835 6.0375 9 5.6625 9 5.25C9 4.425 8.325 3.75 7.5 3.75C6.675 3.75 6 4.425 6 5.25H4.5C4.5 3.5925 5.8425 2.25 7.5 2.25C9.1575 2.25 10.5 3.5925 10.5 5.25C10.5 5.91 10.23 6.51 9.8025 6.9375Z",
            fill: "var(--color-active)"
          }
        )
      }
    ),
    bugIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        width: "26",
        height: "26",
        viewBox: "0 0 15 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M15 10.2V8.53333H12.4417C12.4 8.20833 12.3417 7.89167 12.2583 7.58333L14.4083 6.34167L13.575 4.9L11.6 6.03333C11.3667 5.63333 11.0833 5.275 10.775 4.95833C10.8083 4.76667 10.8333 4.575 10.8333 4.36667C10.8333 3.7 10.6333 3.075 10.2917 2.55L11.6667 1.175L10.4917 0L9.05833 1.43333C7.65833 0.691667 6.475 1.15833 5.95 1.43333L4.50833 0L3.33333 1.175L4.70833 2.55C4.36667 3.075 4.16667 3.7 4.16667 4.36667C4.16667 4.575 4.19167 4.76667 4.225 4.96667C3.91667 5.28333 3.63333 5.64167 3.4 6.03333L1.425 4.89167L0.591667 6.33333L2.74167 7.575C2.65833 7.88333 2.6 8.2 2.55833 8.525H0V10.1917H2.55833C2.6 10.5167 2.65833 10.8333 2.74167 11.1417L0.591667 12.3833L1.425 13.825L3.4 12.7C4.3 14.2083 5.8 15.2 7.5 15.2C9.2 15.2 10.7 14.2083 11.6 12.7L13.575 13.8417L14.4083 12.4L12.2583 11.1583C12.3417 10.85 12.4 10.5333 12.4417 10.2083H15V10.2ZM8.33333 11.8667H6.66667V6.86667H8.33333V11.8667Z",
            fill: "#616E7C"
          }
        )
      }
    ),
    userIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        width: "28",
        height: "28",
        viewBox: "0 0 17 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M13.7157 13.8895C12.8809 11.8287 10.8602 10.375 8.5 10.375C6.13977 10.375 4.11906 11.8287 3.28433 13.8895M13.7157 13.8895C15.1243 12.526 16 10.6153 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 10.6153 1.87569 12.526 3.28433 13.8895M13.7157 13.8895C12.3659 15.196 10.5269 16 8.5 16C6.47315 16 4.63408 15.196 3.28433 13.8895M11 6C11 7.38071 9.88071 8.5 8.5 8.5C7.11929 8.5 6 7.38071 6 6C6 4.61929 7.11929 3.5 8.5 3.5C9.88071 3.5 11 4.61929 11 6Z",
            stroke: "#616E7C",
            strokeWidth: "1.2",
            strokeLinejoin: "round"
          }
        )
      }
    ),
    videoIcon: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "16px",
        height: "16px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7",
              stroke: "var(--color-active)",
              strokeWidth: "1.5"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5",
              stroke: "var(--color-active)",
              strokeWidth: "1.5"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M14.5812 13.6159C15.1396 13.9621 15.1396 14.8582 14.5812 15.2044L11.2096 17.2945C10.6669 17.6309 10 17.1931 10 16.5003L10 12.32C10 11.6273 10.6669 11.1894 11.2096 11.5258L14.5812 13.6159Z",
              stroke: "var(--color-active)",
              strokeWidth: "1.5"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.2855 9.04765 22.0625 10.6294 21.6165 13.793L21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793Z",
              stroke: "var(--color-active)",
              strokeWidth: "1.5"
            }
          )
        ]
      }
    ),
    bulbIcon: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "22",
        height: "22",
        viewBox: "0 0 21 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "10.5",
              cy: "10.4999",
              r: "10.5",
              transform: "rotate(-180 10.5 10.4999)",
              fill: "var(--color-active)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10.4652 6.27779C12.6206 6.27779 14.3679 7.74623 14.3679 9.55763C14.3679 10.7275 13.6391 11.7544 12.5422 12.3349L12.2414 13.4904C12.174 13.75 11.9005 13.935 11.5843 13.935H9.34607C9.02989 13.935 8.75639 13.75 8.68895 13.4904L8.38889 12.3353C7.29163 11.7548 6.5625 10.7278 6.5625 9.55763C6.5625 7.74623 8.3098 6.27779 10.4652 6.27779Z",
              fill: "var(--color-active)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.51832 8.26292C9.45916 8.52634 9.12193 10.0102 9.05265 10.3128C8.98337 10.6153 9.28031 10.8866 9.57185 10.8866C9.86338 10.8866 9.90192 10.8866 10.0216 10.8866C10.1412 10.8866 10.3194 10.9572 10.2523 11.2145C10.1853 11.4717 10.1159 11.7364 10.0478 11.9863C9.97961 12.2363 10.3212 12.3371 10.4693 12.1422C10.6174 11.9474 11.7232 10.4599 11.8505 10.2599C11.9778 10.0599 11.7693 9.75055 11.4556 9.75055C11.1418 9.75055 11.012 9.75055 10.8474 9.75055C10.6829 9.75055 10.6598 9.65181 10.7195 9.4484C10.7792 9.24499 10.851 8.97892 10.9621 8.58898C11.0731 8.19904 10.6256 7.98723 10.3899 7.98723C10.1541 7.98723 9.90053 7.98723 9.83064 7.98723C9.76074 7.98723 9.57749 7.99949 9.51832 8.26292Z",
              fill: "white"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M11.47 14.2134H9.45766C9.22836 14.2134 9.04248 14.3696 9.04248 14.5623C9.04248 14.755 9.22836 14.9112 9.45766 14.9112H11.47C11.6993 14.9112 11.8852 14.755 11.8852 14.5623C11.8852 14.3696 11.6993 14.2134 11.47 14.2134Z",
              fill: "var(--color-active)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M11.3002 15.1896H9.62807C9.39877 15.1896 9.21289 15.3458 9.21289 15.5385C9.21289 15.7312 9.39877 15.8874 9.62807 15.8874H11.3002C11.5295 15.8874 11.7154 15.7312 11.7154 15.5385C11.7154 15.3458 11.5295 15.1896 11.3002 15.1896Z",
              fill: "var(--color-active)"
            }
          )
        ]
      }
    ),
    checkIcon: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "22",
        height: "22",
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "6", r: "6", fill: "#21B761" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M4.54235 7.81183L2.64582 5.91529L2 6.55657L4.54235 9.09892L10 3.64127L9.35873 3L4.54235 7.81183Z",
              fill: "white"
            }
          )
        ]
      }
    ),
    upFingerIcon: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "60",
        height: "61",
        viewBox: "0 0 60 61",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M30 57.1609C44.4774 57.1609 56.2136 45.4246 56.2136 30.9473C56.2136 16.4699 44.4774 4.73367 30 4.73367C15.5226 4.73367 3.78641 16.4699 3.78641 30.9473C3.78641 45.4246 15.5226 57.1609 30 57.1609ZM30 60.9473C46.5685 60.9473 60 47.5158 60 30.9473C60 14.3787 46.5685 0.947266 30 0.947266C13.4315 0.947266 0 14.3787 0 30.9473C0 47.5158 13.4315 60.9473 30 60.9473Z",
              fill: "#25BF6C"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M44.6194 27.7538C44.1733 27.2183 43.6152 26.7872 42.9843 26.491C42.3534 26.1948 41.6651 26.0406 40.9681 26.0394H33.7291L34.6181 23.7695C34.9878 22.7756 35.111 21.7069 34.9769 20.6549C34.8429 19.603 34.4556 18.5993 33.8484 17.7299C33.2412 16.8605 32.4321 16.1513 31.4906 15.6633C30.549 15.1753 29.5031 14.9229 28.4426 14.9278C28.1372 14.9284 27.8385 15.0171 27.5823 15.1832C27.3261 15.3494 27.1232 15.5859 26.998 15.8644L22.4736 26.0394H18.7429C17.4798 26.0394 16.2684 26.5412 15.3753 27.4342C14.4821 28.3273 13.9803 29.5386 13.9803 30.8016V41.9132C13.9803 43.1762 14.4821 44.3874 15.3753 45.2805C16.2684 46.1736 17.4798 46.6753 18.7429 46.6753H38.952C40.0661 46.6749 41.1449 46.284 42.0005 45.5705C42.8562 44.8571 43.4346 43.8662 43.6352 42.7704L45.6513 31.6587C45.776 30.972 45.7482 30.2663 45.5699 29.5915C45.3916 28.9167 45.0671 28.2893 44.6194 27.7538ZM21.9179 43.5006H18.7429C18.3219 43.5006 17.9181 43.3333 17.6204 43.0356C17.3226 42.7379 17.1554 42.3342 17.1554 41.9132V30.8016C17.1554 30.3806 17.3226 29.9768 17.6204 29.6791C17.9181 29.3814 18.3219 29.2142 18.7429 29.2142H21.9179V43.5006ZM42.5556 31.0873L40.5395 42.1989C40.4719 42.5687 40.2752 42.9025 39.9845 43.1409C39.6938 43.3792 39.3279 43.5067 38.952 43.5006H25.093V27.9602L29.411 18.2454C29.8555 18.375 30.2683 18.5953 30.6233 18.8924C30.9784 19.1895 31.268 19.557 31.4738 19.9717C31.6797 20.3863 31.7973 20.8392 31.8194 21.3016C31.8414 21.764 31.7673 22.226 31.6018 22.6583L30.7604 24.9283C30.5811 25.4081 30.5206 25.9241 30.584 26.4324C30.6474 26.9406 30.8328 27.426 31.1245 27.847C31.4161 28.2681 31.8053 28.6124 32.2589 28.8504C32.7124 29.0885 33.2168 29.2133 33.7291 29.2142H40.9681C41.2014 29.2138 41.4318 29.2648 41.6431 29.3636C41.8543 29.4623 42.0413 29.6064 42.1905 29.7856C42.3434 29.9623 42.4555 30.1706 42.5186 30.3957C42.5817 30.6207 42.5944 30.8568 42.5556 31.0873Z",
              fill: "#25BF6C"
            }
          )
        ]
      }
    ),
    downFingerIcon: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "60",
        height: "61",
        viewBox: "0 0 60 61",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M30 4.73367C15.5226 4.73367 3.7864 16.4699 3.7864 30.9473C3.7864 45.4246 15.5226 57.1609 30 57.1609C44.4774 57.1609 56.2136 45.4246 56.2136 30.9473C56.2136 16.4699 44.4774 4.73367 30 4.73367ZM30 0.947264C13.4314 0.947266 -7.88585e-06 14.3787 -6.43738e-06 30.9473C-4.98891e-06 47.5158 13.4315 60.9473 30 60.9473C46.5685 60.9473 60 47.5158 60 30.9473C60 14.3787 46.5685 0.947263 30 0.947264Z",
              fill: "#EB5757"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M15.3806 34.1407C15.8267 34.6762 16.3848 35.1073 17.0157 35.4035C17.6466 35.6998 18.3349 35.8539 19.0319 35.8551L26.2709 35.8551L25.3819 38.125C25.0122 39.1189 24.889 40.1877 25.0231 41.2396C25.1571 42.2915 25.5444 43.2952 26.1516 44.1646C26.7588 45.034 27.5679 45.7432 28.5094 46.2312C29.451 46.7193 30.4969 46.9717 31.5574 46.9667C31.8628 46.9661 32.1615 46.8774 32.4177 46.7113C32.6739 46.5452 32.8768 46.3087 33.002 46.0302L37.5264 35.8551L41.2571 35.8551C42.5202 35.8551 43.7316 35.3534 44.6247 34.4603C45.5179 33.5672 46.0197 32.356 46.0197 31.093L46.0197 19.9814C46.0197 18.7184 45.5179 17.5071 44.6247 16.614C43.7316 15.7209 42.5202 15.2192 41.2571 15.2192L21.048 15.2192C19.9339 15.2196 18.8551 15.6105 17.9995 16.324C17.1438 17.0375 16.5654 18.0283 16.3648 19.1242L14.3487 30.2358C14.224 30.9225 14.2518 31.6283 14.4301 32.3031C14.6084 32.9779 14.9329 33.6052 15.3806 34.1407ZM38.0821 18.394L41.2571 18.394C41.6781 18.394 42.0819 18.5612 42.3796 18.8589C42.6774 19.1566 42.8446 19.5604 42.8446 19.9814L42.8446 31.093C42.8446 31.514 42.6774 31.9177 42.3796 32.2154C42.0819 32.5131 41.6781 32.6804 41.2571 32.6804L38.0821 32.6804L38.0821 18.394ZM17.4444 30.8072L19.4605 19.6956C19.5281 19.3258 19.7248 18.992 20.0155 18.7537C20.3062 18.5153 20.6721 18.3878 21.048 18.394L34.907 18.394L34.907 33.9344L30.589 43.6491C30.1445 43.5195 29.7317 43.2992 29.3767 43.0021C29.0216 42.705 28.732 42.3375 28.5262 41.9229C28.3203 41.5082 28.2027 41.0554 28.1806 40.5929C28.1586 40.1305 28.2327 39.6686 28.3982 39.2362L29.2396 36.9663C29.4189 36.4865 29.4794 35.9704 29.416 35.4622C29.3526 34.9539 29.1672 34.4686 28.8755 34.0475C28.5839 33.6264 28.1947 33.2822 27.7411 33.0441C27.2876 32.8061 26.7832 32.6812 26.2709 32.6804L19.0319 32.6804C18.7986 32.6807 18.5682 32.6297 18.3569 32.531C18.1457 32.4322 17.9587 32.2881 17.8095 32.1089C17.6566 31.9322 17.5445 31.7239 17.4814 31.4989C17.4183 31.2739 17.4056 31.0377 17.4444 30.8072Z",
              fill: "#EB5757"
            }
          )
        ]
      }
    ),
    brainIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        width: "14",
        height: "15",
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M2.20721 2.88103C2.21706 1.63347 2.75193 0.740647 3.90426 0.280591C4.98221 -0.149995 5.90811 0.158346 7.0063 1.26073C7.83158 0.227655 8.87835 -0.187105 10.1417 0.304604C11.2732 0.745013 11.7846 1.65476 11.7912 2.87175C11.8623 2.89412 11.9366 2.9225 12.0138 2.9416C13.7786 3.38365 14.5618 5.3865 13.556 6.90092C13.4636 7.04008 13.4455 7.12849 13.5456 7.27912C14.5651 8.81154 13.7885 10.8024 12.0028 11.2532C11.9328 11.2706 11.8644 11.2946 11.7939 11.3159C11.7813 12.5924 11.2262 13.5278 10.0039 13.9382C8.78975 14.3459 7.79329 13.9224 7.00356 12.9231C6.16078 13.9726 5.10088 14.3901 3.82003 13.8711C2.70435 13.4192 2.20995 12.51 2.20831 11.3148C2.12846 11.2925 2.0508 11.2685 1.97205 11.2483C0.22414 10.8046 -0.555745 8.80609 0.435792 7.30204C0.521656 7.17161 0.570877 7.08538 0.46259 6.92384C-0.569965 5.37559 0.204451 3.39293 2.00978 2.93615C2.07103 2.92086 2.13174 2.90176 2.20667 2.88103H2.20721ZM6.58846 7.1023C6.58846 6.4747 6.5901 5.84765 6.58846 5.22005C6.58518 4.32013 6.61307 3.41858 6.56495 2.52084C6.51463 1.58163 5.66912 0.888542 4.71368 0.932201C3.80144 0.974222 3.05601 1.74644 3.03632 2.66164C3.03249 2.83355 3.08007 2.91595 3.26383 2.95961C3.71558 3.06658 4.10935 3.2936 4.43147 3.63032C4.59172 3.79786 4.59883 3.99487 4.4539 4.17333C4.31553 4.3436 4.13013 4.36652 3.93817 4.26174C3.86761 4.22299 3.81074 4.16078 3.74784 4.10839C3.01226 3.4988 1.95072 3.55938 1.30154 4.24919C0.652366 4.93845 0.661663 5.99991 1.32342 6.693C1.6439 7.02862 1.63679 7.15687 1.31412 7.5116C0.848704 8.0235 0.698306 8.61781 0.912145 9.28033C1.30865 10.5099 2.78967 10.8946 3.80089 10.0378C4.04426 9.83153 4.28381 9.82007 4.44952 10.0073C4.61414 10.1928 4.59664 10.4695 4.33905 10.6425C3.99668 10.8722 3.62479 11.0654 3.24633 11.2319C3.09156 11.3001 3.03577 11.3601 3.03687 11.5189C3.04507 12.4401 3.80527 13.2255 4.72954 13.2615C5.77795 13.3019 6.5819 12.5089 6.58682 11.412C6.59393 9.9756 6.58846 8.53868 6.58846 7.1023ZM7.42632 6.66025C7.48648 6.67226 7.51273 6.68208 7.53898 6.68263C8.07659 6.68481 8.6142 6.67935 9.1518 6.69027C9.31806 6.69354 9.40775 6.6417 9.49143 6.49271C9.7884 5.96717 10.39 5.74669 10.9467 5.9366C11.4707 6.11506 11.8054 6.60295 11.7797 7.15087C11.7551 7.68678 11.3815 8.15284 10.8713 8.28545C10.3397 8.42353 9.79551 8.19923 9.49963 7.73044C9.44658 7.6464 9.36181 7.52197 9.28908 7.51979C8.67326 7.50287 8.0569 7.50996 7.43015 7.50996V9.41568C7.64727 9.41568 7.84634 9.40421 8.04323 9.41895C8.22097 9.43205 8.31559 9.3682 8.40473 9.21048C8.69623 8.69639 9.28907 8.47974 9.83926 8.66038C10.3637 8.83228 10.705 9.31853 10.6859 9.86591C10.6673 10.4024 10.3014 10.869 9.78949 11.0098C9.26118 11.1549 8.70881 10.9356 8.41184 10.4706C8.35715 10.3854 8.28277 10.2588 8.2073 10.2507C7.95025 10.2228 7.68883 10.2403 7.41429 10.2403C7.41429 10.7123 7.39624 11.1397 7.41812 11.5648C7.47171 12.6028 8.35715 13.363 9.36728 13.2571C10.4031 13.148 11.1097 12.1962 10.9309 11.1506C10.8478 10.666 10.9577 10.5317 11.4532 10.5033C12.2194 10.4591 12.7707 10.0837 13.0507 9.37693C13.3318 8.66692 13.1688 8.02023 12.6427 7.46794C12.3725 7.1847 12.372 7.01007 12.6421 6.72738C13.1688 6.17509 13.3329 5.52839 13.0512 4.81894C12.7668 4.10075 12.2052 3.72746 11.4269 3.69035C10.9724 3.66852 10.8434 3.51026 10.926 3.07258C11.1086 2.10117 10.5262 1.19361 9.58331 0.97968C8.64428 0.766842 7.68446 1.31258 7.48648 2.25561C7.37272 2.79535 7.41484 3.36782 7.3853 3.95886C7.64782 3.95886 7.84689 3.9474 8.04377 3.96213C8.22152 3.97523 8.31613 3.91138 8.40528 3.75366C8.69678 3.23957 9.28962 3.02292 9.83981 3.20356C10.3643 3.37601 10.7056 3.86171 10.6864 4.40909C10.6678 4.94555 10.3019 5.41215 9.79004 5.55295C9.26173 5.69812 8.70936 5.47873 8.41294 5.01376C8.35824 4.92863 8.28387 4.80202 8.20839 4.79383C7.95135 4.766 7.68993 4.78346 7.42577 4.78346V6.66189L7.42632 6.66025ZM9.86387 4.37798C9.86934 4.15696 9.70417 3.97796 9.48432 3.96595C9.25189 3.9534 9.0632 4.12694 9.05774 4.35834C9.05227 4.57936 9.21798 4.75836 9.43729 4.77037C9.66917 4.78292 9.8584 4.60883 9.86387 4.37798ZM10.9577 7.10939C10.9642 6.88837 10.8007 6.70828 10.5809 6.69518C10.349 6.68099 10.1587 6.85399 10.1515 7.08429C10.145 7.30531 10.3085 7.48541 10.5284 7.4985C10.7602 7.51269 10.9506 7.33969 10.9577 7.10939ZM9.86387 9.83808C9.87043 9.61705 9.70691 9.43696 9.48705 9.42386C9.25517 9.40967 9.06485 9.58267 9.05774 9.81297C9.05117 10.034 9.21524 10.2141 9.4351 10.2272C9.66699 10.2414 9.85731 10.0689 9.86442 9.83808H9.86387Z",
            fill: "var(--color-active)"
          }
        )
      }
    ),
    toolIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        width: "30",
        height: "31",
        viewBox: "0 0 30 31",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M15.312 9.3402C13.9866 8.019 12.0018 7.7495 10.406 8.52513L12.7997 10.9112C13.0568 11.1675 13.0568 11.5816 12.7997 11.838L11.7512 12.8831C11.494 13.1461 11.0786 13.1461 10.8214 12.8831L8.42781 10.4971C7.65631 12.0944 7.92666 14.0597 9.25207 15.3809C10.4786 16.6035 12.2721 16.9256 13.7954 16.3538L19.0442 21.586C19.7234 22.263 20.818 22.263 21.4906 21.586C22.1698 20.9089 22.1698 19.8178 21.4906 19.1473L16.2681 13.9348C16.8748 12.3967 16.5583 10.5825 15.312 9.3402Z",
            stroke: "#02A9EA"
          }
        )
      }
    ),
    testIcon: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "14",
        height: "15",
        viewBox: "0 0 14 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M11.6956 12.3322C12.048 12.6711 12.3558 12.9407 12.6281 13.2439C12.7213 13.3474 12.7929 13.5666 12.7469 13.6789C12.7016 13.7891 12.4969 13.8886 12.3597 13.8913C11.4199 13.9095 10.4801 13.9041 9.53967 13.8994C9.1984 13.8974 9.09733 13.7871 9.09602 13.4281C9.09274 12.4761 9.08486 11.5241 9.10521 10.5728C9.10849 10.4248 9.21743 10.2164 9.33622 10.1546C9.43204 10.1048 9.65189 10.1956 9.75427 10.2931C10.0896 10.6111 10.3974 10.9607 10.7466 11.3318C10.9474 11.114 11.1246 10.9378 11.2834 10.7455C13.8902 7.58159 12.4011 2.67161 8.50471 1.57706C8.44171 1.55958 8.3787 1.54009 8.3157 1.52261C7.84318 1.38881 7.61151 1.02979 7.72373 0.604886C7.82808 0.210233 8.21594 0.00719182 8.67206 0.128882C10.6455 0.656656 12.1458 1.82851 13.1335 3.65387C14.6265 6.41241 14.1533 9.83857 11.9948 12.0875C11.9259 12.1588 11.8412 12.2139 11.6956 12.3329V12.3322Z",
              fill: "var(--color-active)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M2.29384 1.85934C1.94798 1.52519 1.64675 1.26366 1.38489 0.965818C1.28514 0.852196 1.19851 0.622935 1.24642 0.507295C1.29367 0.393 1.51681 0.29753 1.66513 0.294841C2.58261 0.276016 3.50141 0.282737 4.41954 0.286771C4.80216 0.288116 4.89469 0.389639 4.89601 0.793033C4.89797 1.72218 4.90782 2.652 4.88616 3.58116C4.88222 3.73982 4.77656 3.96371 4.65252 4.03027C4.55671 4.08204 4.32373 3.97312 4.21347 3.86824C3.88599 3.55763 3.58869 3.21407 3.2402 2.8416C2.98229 3.13944 2.74471 3.38148 2.54323 3.65242C0.162239 6.8426 1.68088 11.5031 5.45581 12.6031C5.58182 12.64 5.71177 12.6649 5.83318 12.7133C6.17773 12.8511 6.35098 13.1887 6.2742 13.551C6.20332 13.8845 5.89749 14.1434 5.54573 14.0855C5.1828 14.0257 4.82119 13.9181 4.47795 13.7823C-0.227592 11.9193 -1.5185 5.75747 2.02149 2.07515C2.08252 2.01195 2.15996 1.96489 2.2945 1.86001L2.29384 1.85934Z",
              fill: "var(--color-active)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M5.98737 8.35901C6.10222 8.2474 6.19082 8.16672 6.27417 8.08067C7.28025 7.05134 8.28501 6.02067 9.29044 4.99067C9.36788 4.91134 9.44204 4.82797 9.52867 4.76006C9.83056 4.52341 10.2243 4.55904 10.4763 4.84007C10.7238 5.11505 10.7375 5.4929 10.4868 5.78468C10.2847 6.02 10.0596 6.23447 9.84369 6.45633C8.76148 7.56567 7.67927 8.67634 6.59509 9.78366C6.18491 10.2025 5.82133 10.1992 5.40722 9.77761C4.81 9.16916 4.21409 8.56003 3.62082 7.94755C3.2592 7.57441 3.22705 7.16631 3.525 6.85233C3.83214 6.52827 4.23903 6.5592 4.61705 6.94511C5.07251 7.40902 5.52207 7.87897 5.98803 8.35968L5.98737 8.35901Z",
              fill: "var(--color-active)"
            }
          )
        ]
      }
    ),
    feedbackIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        width: "14",
        height: "21",
        viewBox: "0 0 14 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 0.923828C3.14173 0.923828 -0.00190822 4.06492 8.69065e-07 7.92383C0.0012736 10.0047 0.955819 11.9488 2.54546 13.2718V15.5602C2.54546 16.607 3.40773 17.4693 4.45455 17.4693H9.54545C10.5923 17.4693 11.4545 16.607 11.4545 15.5602V13.2744C13.0448 11.9507 13.9994 10.0054 14 7.92383C14.0019 4.06492 10.8583 0.923828 7 0.923828ZM7 2.19656C7.75249 2.19521 8.49785 2.34244 9.19332 2.62979C9.88879 2.91713 10.5207 3.33895 11.0528 3.87104C11.5849 4.40314 12.0067 5.03504 12.294 5.73051C12.5814 6.42598 12.7286 7.17133 12.7273 7.92383C12.7256 8.77988 12.5316 9.62461 12.1596 10.3956C11.7877 11.1666 11.2473 11.8442 10.5783 12.3784H7C6.13964 12.3663 6.13964 13.6626 7 13.6511H10.1818V15.5602C10.1818 15.9236 9.90882 16.1966 9.54545 16.1966H4.45455C4.09118 16.1966 3.81818 15.9236 3.81818 15.5602V13.6511H4.45455C5.31491 13.6632 5.31491 12.3669 4.45455 12.3784H3.42555C2.75573 11.8447 2.21447 11.1673 1.84182 10.3963C1.46918 9.62521 1.27468 8.78022 1.27273 7.92383C1.27139 7.17133 1.41861 6.42598 1.70596 5.73051C1.99331 5.03504 2.41512 4.40314 2.94722 3.87104C3.47931 3.33895 4.11121 2.91713 4.80668 2.62979C5.50215 2.34244 6.24751 2.19521 7 2.19656ZM6.97009 4.73565C6.85628 4.74118 6.74605 4.77717 6.6509 4.83986C6.55575 4.90254 6.47918 4.98962 6.42918 5.09201L5.15645 7.63937C5.10784 7.73666 5.08497 7.84478 5.09002 7.95342C5.09508 8.06205 5.12789 8.16758 5.18533 8.25993C5.24277 8.35228 5.32292 8.42837 5.41813 8.48093C5.51334 8.5335 5.62043 8.56079 5.72918 8.56019H7.24245L6.42982 10.1848C6.36167 10.3351 6.35445 10.506 6.40967 10.6615C6.46488 10.817 6.57823 10.945 6.7259 11.0187C6.87356 11.0924 7.04404 11.1059 7.20149 11.0565C7.35893 11.0071 7.49109 10.8986 7.57018 10.7537L8.84418 8.20701C8.89285 8.10963 8.91572 8.00139 8.9106 7.89265C8.90549 7.7839 8.87256 7.67829 8.81498 7.5859C8.75739 7.49352 8.67706 7.41745 8.58168 7.36498C8.48629 7.3125 8.37904 7.28538 8.27018 7.28619H6.75818L7.57082 5.66155C7.62189 5.56199 7.64581 5.45072 7.64016 5.33896C7.6345 5.2272 7.59948 5.11891 7.53862 5.02501C7.47776 4.9311 7.39321 4.85491 7.29351 4.8041C7.19381 4.7533 7.08247 4.72969 6.97073 4.73565H6.97009ZM5.66618 18.7433C5.66533 18.7437 5.66448 18.7441 5.66364 18.7446C5.49914 18.7591 5.34668 18.8368 5.23835 18.9615C5.13003 19.0861 5.07429 19.2479 5.08287 19.4128C5.09144 19.5778 5.16366 19.7329 5.28433 19.8456C5.405 19.9584 5.5647 20.0199 5.72982 20.0173H8.27018C8.43896 20.0173 8.60082 19.9502 8.72016 19.8309C8.8395 19.7116 8.90655 19.5497 8.90655 19.3809C8.90655 19.2121 8.8395 19.0503 8.72016 18.9309C8.60082 18.8116 8.43896 18.7446 8.27018 18.7446H5.72982C5.70864 18.7431 5.6874 18.7426 5.66618 18.7433Z",
            fill: "var(--color-active)"
          }
        )
      }
    ),
    resetIcon: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "15",
        height: "16",
        viewBox: "0 0 15 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("mask", { id: "path-1-inside-1_828_425", fill: "white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M13.4437 7.42417C12.9699 7.42417 12.6541 7.74 12.6541 8.21376C12.6541 11.2932 10.2064 13.7409 7.12698 13.7409H6.57427C6.41635 13.7409 6.33739 13.7409 6.17947 13.6619C6.02156 13.6619 5.9426 13.583 5.78468 13.583C5.70572 13.583 5.62676 13.504 5.5478 13.504C4.99509 13.3461 4.44238 13.0303 3.96862 12.7144C3.88967 12.6355 3.81071 12.6355 3.81071 12.5565C3.73175 12.4775 3.65279 12.3986 3.57383 12.3986C3.41591 12.3196 3.25799 12.1617 3.17903 12.0827L3.02112 11.9248L4.44238 11.688C4.83717 11.609 5.15301 11.2142 5.07405 10.7404C4.99509 10.3456 4.6003 10.0298 4.12654 10.1088L1.5209 10.5825L0.889226 10.7404C0.65235 10.7404 0.494432 10.8984 0.415473 11.0563C0.336514 11.2142 0.257555 11.4511 0.257555 11.609L0.889226 14.9253C0.968185 15.3201 1.28402 15.5569 1.67882 15.5569H1.83673C2.23153 15.478 2.54736 15.0832 2.4684 14.6094L2.23153 13.2671C2.38945 13.425 2.62632 13.583 2.78424 13.7409H2.8632C2.94216 13.8198 3.02112 13.8988 3.10008 13.8988C3.25799 14.0567 3.41591 14.1357 3.65279 14.2146C3.81071 14.5305 4.04758 14.6094 4.28446 14.7673H4.36342C4.44238 14.8463 4.6003 14.8463 4.75821 14.9253C5.07405 15.0042 5.38988 15.0832 5.62676 15.1621C5.78468 15.1621 5.9426 15.2411 6.10052 15.2411H7.04802C10.996 15.2411 14.1543 12.0827 14.1543 8.1348C14.2333 7.74 13.8385 7.42417 13.4437 7.42417ZM0.889226 9.00335C1.36298 9.00335 1.67882 8.68751 1.67882 8.21376C1.67882 5.13436 4.12654 2.68663 7.20594 2.68663H7.75865C7.91657 2.68663 7.99553 2.68663 8.15345 2.76559C8.31136 2.76559 8.39032 2.84455 8.54824 2.84455C8.6272 2.84455 8.70616 2.92351 8.78512 2.92351C9.33783 3.08143 9.89054 3.31831 10.3643 3.7131C10.4433 3.79206 10.5222 3.79206 10.6012 3.87102C10.6801 3.94998 10.7591 3.94998 10.838 4.02893C10.917 4.10789 10.996 4.26581 11.1539 4.34477L11.3118 4.50269L9.89054 4.73957C9.49575 4.81852 9.17991 5.21332 9.25887 5.68707C9.33783 6.08187 9.65367 6.31874 10.0485 6.31874H10.2064L13.5227 5.68707C13.9174 5.60811 14.2333 5.21332 14.1543 4.73957L13.5227 1.50225C13.4437 1.10746 13.0489 0.79162 12.5751 0.870579C12.1804 0.949538 11.8645 1.34433 11.9435 1.81809L12.1804 3.16039C12.0224 3.00247 11.7856 2.76559 11.6276 2.68663H11.5487C11.4697 2.60767 11.3908 2.52872 11.3118 2.52872C11.1539 2.3708 10.996 2.29184 10.7591 2.13392C10.5222 1.976 10.2853 1.89704 10.0485 1.73913H9.9695C9.89054 1.66017 9.73263 1.66017 9.57471 1.58121C9.25887 1.50225 8.94304 1.42329 8.70616 1.34433C8.54824 1.34433 8.39032 1.26537 8.23241 1.26537H7.2849C3.33695 1.26537 0.178596 4.42373 0.178596 8.37168C0.099637 8.68751 0.415473 9.00335 0.889226 9.00335Z" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M6.17947 13.6619L6.62669 12.7675L6.41554 12.6619H6.17947V13.6619ZM5.5478 13.504L5.27308 14.4655L5.40775 14.504H5.5478V13.504ZM3.96862 12.7144L3.26152 13.4215L3.33153 13.4915L3.41392 13.5465L3.96862 12.7144ZM3.81071 12.5565H4.81071V12.1423L4.51781 11.8494L3.81071 12.5565ZM3.57383 12.3986L3.12662 13.293L3.33776 13.3986H3.57383V12.3986ZM3.17903 12.0827L3.88614 11.3756L3.88614 11.3756L3.17903 12.0827ZM3.02112 11.9248L2.85672 10.9384L0.93996 11.2579L2.31401 12.6319L3.02112 11.9248ZM4.44238 11.688L4.60678 12.6743L4.62268 12.6717L4.63849 12.6685L4.44238 11.688ZM5.07405 10.7404L6.06044 10.576L6.05779 10.5601L6.05463 10.5443L5.07405 10.7404ZM4.12654 10.1088L3.96214 9.12238L3.95489 9.12359L3.94766 9.1249L4.12654 10.1088ZM1.5209 10.5825L1.34201 9.59866L1.30996 9.60448L1.27836 9.61238L1.5209 10.5825ZM0.889226 10.7404V11.7404H1.01233L1.13176 11.7106L0.889226 10.7404ZM0.257555 11.609H-0.742445V11.7034L-0.724784 11.7961L0.257555 11.609ZM0.889226 14.9253L-0.0931537 15.1124L-0.0913544 15.1214L0.889226 14.9253ZM1.83673 15.5569V16.5569H1.93575L2.03285 16.5375L1.83673 15.5569ZM2.4684 14.6094L3.45484 14.445L3.45319 14.4356L2.4684 14.6094ZM2.23153 13.2671L2.93863 12.56L0.695433 10.3168L1.24674 13.4409L2.23153 13.2671ZM2.78424 13.7409L2.07713 14.448L2.37003 14.7409H2.78424V13.7409ZM2.8632 13.7409L3.57031 13.0338L3.27741 12.7409H2.8632V13.7409ZM3.10008 13.8988L3.80718 13.1917L3.51429 12.8988H3.10008V13.8988ZM3.65279 14.2146L4.54722 13.7674L4.36197 13.3969L3.96902 13.266L3.65279 14.2146ZM4.28446 14.7673L3.72976 15.5994L3.98168 15.7673H4.28446V14.7673ZM4.36342 14.7673L5.07053 14.0602L4.77763 13.7673H4.36342V14.7673ZM4.75821 14.9253L4.311 15.8197L4.40918 15.8688L4.51568 15.8954L4.75821 14.9253ZM5.62676 15.1621L5.31053 16.1108L5.46448 16.1621H5.62676V15.1621ZM14.1543 8.1348L13.1737 7.93868L13.1543 8.03578V8.1348H14.1543ZM8.15345 2.76559L7.70623 3.66002L7.91738 3.76559H8.15345V2.76559ZM8.78512 2.92351L9.05984 1.96199L8.92517 1.92351H8.78512V2.92351ZM10.3643 3.7131L11.0714 3.00599L11.0393 2.97392L11.0045 2.94488L10.3643 3.7131ZM11.1539 4.34477L11.861 3.63766L11.7462 3.52292L11.6011 3.45034L11.1539 4.34477ZM11.3118 4.50269L11.4762 5.48908L13.393 5.16962L12.0189 3.79558L11.3118 4.50269ZM9.89054 4.73957L9.72614 3.75317L9.71024 3.75582L9.69443 3.75898L9.89054 4.73957ZM9.25887 5.68707L8.27248 5.85147L8.27513 5.86738L8.27829 5.88319L9.25887 5.68707ZM10.2064 6.31874V7.31874H10.3008L10.3935 7.30108L10.2064 6.31874ZM13.5227 5.68707L13.7098 6.66945L13.7188 6.66765L13.5227 5.68707ZM14.1543 4.73957L15.1407 4.57517L15.1385 4.56158L15.1358 4.54806L14.1543 4.73957ZM13.5227 1.50225L14.5042 1.31074L14.5032 1.30613L13.5227 1.50225ZM12.5751 0.870579L12.4107 -0.115815L12.3948 -0.113164L12.379 -0.110002L12.5751 0.870579ZM11.9435 1.81809L10.957 1.98249L10.9587 1.99187L11.9435 1.81809ZM12.1804 3.16039L11.4732 3.86749L13.7164 6.11069L13.1651 2.9866L12.1804 3.16039ZM11.6276 2.68663L12.0749 1.79221L11.8637 1.68663H11.6276V2.68663ZM11.5487 2.68663L10.8416 3.39374L11.1345 3.68663H11.5487V2.68663ZM11.3118 2.52872L10.6047 3.23582L10.8976 3.52872H11.3118V2.52872ZM10.0485 1.73913L10.6032 0.907076L10.3512 0.739127H10.0485V1.73913ZM9.9695 1.73913L9.26239 2.44623L9.55529 2.73913H9.9695V1.73913ZM9.57471 1.58121L10.0219 0.686782L9.92374 0.63769L9.81724 0.611066L9.57471 1.58121ZM8.70616 1.34433L9.02239 0.395649L8.86844 0.344332H8.70616V1.34433ZM0.178596 8.37168L1.14874 8.61421L1.1786 8.49478V8.37168H0.178596ZM13.4437 6.42417C12.9796 6.42417 12.5151 6.58324 12.1641 6.9342C11.8132 7.28516 11.6541 7.74963 11.6541 8.21376H13.6541C13.6541 8.20413 13.653 8.27381 13.5783 8.34841C13.5037 8.42301 13.4341 8.42417 13.4437 8.42417V6.42417ZM11.6541 8.21376C11.6541 10.7409 9.65409 12.7409 7.12698 12.7409V14.7409C10.7587 14.7409 13.6541 11.8454 13.6541 8.21376H11.6541ZM7.12698 12.7409H6.57427V14.7409H7.12698V12.7409ZM6.57427 12.7409C6.55356 12.7409 6.5396 12.7409 6.52721 12.7408C6.51532 12.7407 6.5093 12.7405 6.5066 12.7404C6.50201 12.7402 6.51683 12.7405 6.54127 12.7446C6.55348 12.7467 6.56632 12.7493 6.57934 12.7526C6.59229 12.7559 6.60352 12.7594 6.61269 12.7626C6.63063 12.7688 6.63676 12.7725 6.62669 12.7675L5.73226 14.5563C5.87623 14.6283 6.03143 14.6872 6.21247 14.7174C6.36872 14.7434 6.51499 14.7409 6.57427 14.7409V12.7409ZM6.17947 12.6619C6.2789 12.6619 6.35713 12.6934 6.29831 12.6738C6.23869 12.6539 6.04202 12.583 5.78468 12.583V14.583C5.68525 14.583 5.60702 14.5515 5.66585 14.5711C5.72546 14.591 5.92213 14.6619 6.17947 14.6619V12.6619ZM5.78468 12.583C5.92875 12.583 6.0342 12.6184 6.07658 12.6343C6.09981 12.643 6.11573 12.6504 6.12028 12.6525C6.12381 12.6542 6.12531 12.655 6.11345 12.6491C6.10557 12.6451 6.08433 12.6344 6.06106 12.6235C6.03677 12.6121 6.00111 12.5961 5.95814 12.58C5.87628 12.5493 5.73135 12.504 5.5478 12.504V14.504C5.40373 14.504 5.29828 14.4686 5.2559 14.4527C5.23267 14.444 5.21675 14.4366 5.2122 14.4345C5.20867 14.4328 5.20717 14.432 5.21903 14.4379C5.22691 14.4419 5.24815 14.4525 5.27142 14.4634C5.29571 14.4748 5.33137 14.4908 5.37434 14.507C5.4562 14.5377 5.60113 14.583 5.78468 14.583V12.583ZM5.82252 12.5425C5.41941 12.4273 4.96909 12.1795 4.52332 11.8824L3.41392 13.5465C3.91566 13.881 4.57077 14.2649 5.27308 14.4655L5.82252 12.5425ZM4.67573 12.0073C4.59562 11.9272 4.51956 11.8716 4.46534 11.8355C4.44026 11.8188 4.41812 11.8051 4.40978 11.8C4.39625 11.7916 4.40474 11.7967 4.41476 11.8034C4.42936 11.8131 4.54319 11.8866 4.64351 12.0299C4.69759 12.1072 4.74239 12.1964 4.77208 12.2954C4.80126 12.3926 4.81071 12.4821 4.81071 12.5565H2.81071C2.81071 12.7615 2.86785 12.9808 3.00504 13.1768C3.12263 13.3448 3.26115 13.438 3.30535 13.4675C3.44482 13.5605 3.31539 13.4754 3.26152 13.4215L4.67573 12.0073ZM4.51781 11.8494C4.49141 11.823 4.39971 11.7285 4.29227 11.6479C4.19534 11.5752 3.93961 11.3986 3.57383 11.3986V13.3986C3.42478 13.3986 3.30719 13.3611 3.23223 13.3283C3.15953 13.2965 3.11174 13.2625 3.09227 13.2479C3.07169 13.2325 3.062 13.2228 3.06754 13.228C3.07347 13.2336 3.08169 13.2417 3.1036 13.2636L4.51781 11.8494ZM4.02104 11.5042C4.03892 11.5131 4.04391 11.5176 4.03537 11.5115C4.02776 11.5061 4.0151 11.4964 3.99761 11.4814C3.96089 11.4499 3.92599 11.4155 3.88614 11.3756L2.47193 12.7899C2.52585 12.8438 2.79739 13.1284 3.12662 13.293L4.02104 11.5042ZM3.88614 11.3756L3.72822 11.2177L2.31401 12.6319L2.47193 12.7899L3.88614 11.3756ZM3.18552 12.9112L4.60678 12.6743L4.27798 10.7016L2.85672 10.9384L3.18552 12.9112ZM4.63849 12.6685C5.54326 12.4876 6.23133 11.6014 6.06044 10.576L4.08766 10.9048C4.08236 10.8731 4.09082 10.8253 4.1189 10.7856C4.14154 10.7535 4.18172 10.7203 4.24626 10.7074L4.63849 12.6685ZM6.05463 10.5443C5.87368 9.63956 4.98747 8.95149 3.96214 9.12238L4.29094 11.0952C4.25918 11.1005 4.21145 11.092 4.17166 11.0639C4.13959 11.0413 4.10638 11.0011 4.09347 10.9366L6.05463 10.5443ZM3.94766 9.1249L1.34201 9.59866L1.69978 11.5664L4.30543 11.0926L3.94766 9.1249ZM1.27836 9.61238L0.646691 9.7703L1.13176 11.7106L1.76343 11.5527L1.27836 9.61238ZM0.889226 9.74044C0.14306 9.74044 -0.298139 10.2474 -0.478954 10.6091L1.3099 11.5035C1.29321 11.5369 1.26009 11.5889 1.19313 11.6391C1.11615 11.6969 1.00766 11.7404 0.889226 11.7404V9.74044ZM-0.478954 10.6091C-0.586213 10.8236 -0.742445 11.2245 -0.742445 11.609H1.25756C1.25756 11.6301 1.25628 11.6447 1.25557 11.6514C1.25482 11.6585 1.25423 11.6613 1.25458 11.6594C1.25542 11.6548 1.25831 11.6414 1.26473 11.62C1.27096 11.5992 1.27885 11.5765 1.28764 11.5542C1.29654 11.5317 1.30453 11.5142 1.3099 11.5035L-0.478954 10.6091ZM-0.724784 11.7961L-0.0931123 15.1124L1.87156 14.7382L1.23989 11.4219L-0.724784 11.7961ZM-0.0913544 15.1214C0.0880102 16.0182 0.843533 16.5569 1.67882 16.5569V14.5569C1.68309 14.5569 1.72856 14.5597 1.7834 14.6028C1.84184 14.6487 1.86491 14.7047 1.86981 14.7291L-0.0913544 15.1214ZM1.67882 16.5569H1.83673V14.5569H1.67882V16.5569ZM2.03285 16.5375C2.93761 16.3566 3.62569 15.4704 3.4548 14.445L1.48201 14.7738C1.47672 14.7421 1.48517 14.6943 1.51326 14.6545C1.5359 14.6225 1.57607 14.5893 1.64062 14.5764L2.03285 16.5375ZM3.45319 14.4356L3.21631 13.0933L1.24674 13.4409L1.48362 14.7832L3.45319 14.4356ZM1.52442 13.9742C1.6502 14.1 1.79571 14.2149 1.88319 14.2849C1.99311 14.3728 2.04499 14.4158 2.07713 14.448L3.49135 13.0338C3.36557 12.908 3.22005 12.7931 3.13258 12.7231C3.02266 12.6352 2.97078 12.5922 2.93863 12.56L1.52442 13.9742ZM2.78424 14.7409H2.8632V12.7409H2.78424V14.7409ZM2.15609 14.448C2.1825 14.4744 2.27419 14.5689 2.38164 14.6494C2.47856 14.7221 2.7343 14.8988 3.10008 14.8988V12.8988C3.24913 12.8988 3.36671 12.9363 3.44168 12.9691C3.51438 13.0009 3.56217 13.0348 3.58164 13.0495C3.60222 13.0649 3.61191 13.0745 3.60636 13.0693C3.60043 13.0638 3.59221 13.0557 3.57031 13.0338L2.15609 14.448ZM2.39297 14.6059C2.70124 14.9142 3.01873 15.0574 3.33656 15.1633L3.96902 13.266C3.87897 13.2359 3.84511 13.2192 3.83246 13.2122C3.82733 13.2093 3.8251 13.2077 3.82361 13.2066C3.82195 13.2053 3.81676 13.2013 3.80718 13.1917L2.39297 14.6059ZM2.75836 14.6618C3.07263 15.2904 3.70025 15.5797 3.72976 15.5994L4.83916 13.9353C4.75339 13.8781 4.66663 13.8275 4.61984 13.7997C4.56324 13.766 4.54113 13.7516 4.52718 13.7415C4.51763 13.7345 4.52318 13.7375 4.53314 13.7487C4.54385 13.7608 4.54826 13.7695 4.54722 13.7674L2.75836 14.6618ZM4.28446 15.7673H4.36342V13.7673H4.28446V15.7673ZM3.65631 15.4745C3.79407 15.6122 3.93941 15.6887 4.03748 15.7313C4.13129 15.7721 4.21854 15.797 4.25648 15.8078C4.36601 15.8391 4.33551 15.8319 4.311 15.8197L5.20543 14.0308C5.10673 13.9815 5.01674 13.9488 4.94801 13.9267C4.91381 13.9156 4.88303 13.9066 4.85944 13.8999C4.84774 13.8966 4.83654 13.8934 4.82788 13.891C4.81849 13.8883 4.81197 13.8865 4.80593 13.8848C4.79344 13.8812 4.79178 13.8806 4.79486 13.8816C4.79816 13.8827 4.81318 13.8877 4.83494 13.8972C4.87626 13.9151 4.97225 13.962 5.07053 14.0602L3.65631 15.4745ZM4.51568 15.8954C4.84488 15.9777 5.11821 16.0467 5.31053 16.1108L5.94299 14.2135C5.66156 14.1196 5.30322 14.0307 5.00075 13.9551L4.51568 15.8954ZM5.62676 16.1621C5.60496 16.1621 5.58804 16.1608 5.57725 16.1596C5.57181 16.159 5.56766 16.1584 5.56498 16.158C5.56363 16.1578 5.56261 16.1576 5.56194 16.1575C5.56127 16.1574 5.56092 16.1574 5.56091 16.1574C5.56091 16.1574 5.56121 16.1574 5.56186 16.1575C5.56251 16.1577 5.56347 16.1579 5.56476 16.1581C5.56739 16.1587 5.5711 16.1595 5.57623 16.1607C5.58758 16.1634 5.60015 16.1665 5.6211 16.1718C5.65546 16.1804 5.72401 16.1978 5.79779 16.2116C5.87475 16.2261 5.97933 16.2411 6.10052 16.2411V14.2411C6.12231 14.2411 6.13924 14.2425 6.15002 14.2436C6.15547 14.2442 6.15962 14.2448 6.16229 14.2452C6.16364 14.2454 6.16467 14.2456 6.16534 14.2457C6.16601 14.2458 6.16636 14.2459 6.16637 14.2459C6.16637 14.2459 6.16606 14.2458 6.16541 14.2457C6.16476 14.2456 6.16381 14.2454 6.16252 14.2451C6.15988 14.2445 6.15618 14.2437 6.15105 14.2425C6.1397 14.2398 6.12713 14.2367 6.10617 14.2315C6.07181 14.2229 6.00326 14.2054 5.92949 14.1916C5.85253 14.1772 5.74794 14.1621 5.62676 14.1621V16.1621ZM6.10052 16.2411H7.04802V14.2411H6.10052V16.2411ZM7.04802 16.2411C11.5483 16.2411 15.1543 12.635 15.1543 8.1348H13.1543C13.1543 11.5305 10.4437 14.2411 7.04802 14.2411V16.2411ZM15.1349 8.33091C15.2562 7.72418 14.9941 7.21156 14.6571 6.89864C14.3332 6.59791 13.8925 6.42417 13.4437 6.42417V8.42417C13.3897 8.42417 13.3437 8.40835 13.2962 8.36423C13.2677 8.33775 13.2259 8.28833 13.1963 8.20982C13.1647 8.12596 13.1555 8.0298 13.1737 7.93868L15.1349 8.33091ZM0.889226 10.0033C1.35335 10.0033 1.81783 9.84427 2.16879 9.49332C2.51974 9.14236 2.67882 8.67788 2.67882 8.21376H0.678815C0.678815 8.22339 0.679971 8.1537 0.754572 8.0791C0.829173 8.0045 0.898855 8.00335 0.889226 8.00335V10.0033ZM2.67882 8.21376C2.67882 5.68665 4.67883 3.68663 7.20594 3.68663V1.68663C3.57426 1.68663 0.678815 4.58208 0.678815 8.21376H2.67882ZM7.20594 3.68663H7.75865V1.68663H7.20594V3.68663ZM7.75865 3.68663C7.77936 3.68663 7.79332 3.68664 7.80571 3.68675C7.8176 3.68685 7.82362 3.68702 7.82632 3.68713C7.83092 3.68731 7.81609 3.68697 7.79165 3.6829C7.77945 3.68086 7.7666 3.6782 7.75359 3.67488C7.74064 3.67158 7.7294 3.6681 7.72024 3.66493C7.70229 3.65872 7.69616 3.65498 7.70623 3.66002L8.60066 1.87117C8.45669 1.79918 8.30149 1.74028 8.12045 1.71011C7.9642 1.68407 7.81793 1.68663 7.75865 1.68663V3.68663ZM8.15345 3.76559C8.05402 3.76559 7.97579 3.73415 8.03462 3.75376C8.09423 3.77363 8.2909 3.84455 8.54824 3.84455V1.84455C8.64767 1.84455 8.72589 1.876 8.66707 1.85639C8.60746 1.83652 8.41079 1.76559 8.15345 1.76559V3.76559ZM8.54824 3.84455C8.40417 3.84455 8.29871 3.80911 8.25634 3.79322C8.2331 3.78451 8.21718 3.77712 8.21264 3.77499C8.2091 3.77334 8.2076 3.77253 8.21947 3.77846C8.22734 3.7824 8.24858 3.79308 8.27185 3.80399C8.29614 3.81537 8.3318 3.83139 8.37477 3.8475C8.45663 3.8782 8.60157 3.92351 8.78512 3.92351V1.92351C8.92919 1.92351 9.03464 1.95895 9.07702 1.97484C9.10026 1.98356 9.11618 1.99094 9.12072 1.99307C9.12426 1.99473 9.12576 1.99554 9.11389 1.9896C9.10602 1.98567 9.08478 1.97499 9.06151 1.96408C9.03722 1.95269 9.00156 1.93667 8.95858 1.92056C8.87673 1.88986 8.73179 1.84455 8.54824 1.84455V3.84455ZM8.5104 3.88503C8.9831 4.02009 9.3934 4.20573 9.72411 4.48132L11.0045 2.94488C10.3877 2.43088 9.69257 2.14277 9.05984 1.96199L8.5104 3.88503ZM9.65719 4.42021C9.82281 4.58582 9.99567 4.66656 10.0355 4.68649C10.0746 4.70604 9.98072 4.66478 9.89407 4.57812L11.3083 3.16391C11.1427 2.99829 10.9698 2.91756 10.9299 2.89763C10.8908 2.87808 10.9847 2.91934 11.0714 3.00599L9.65719 4.42021ZM9.89407 4.57812C10.0597 4.74374 10.2325 4.82448 10.2724 4.84441C10.3115 4.86396 10.2176 4.8227 10.1309 4.73604L11.5452 3.32183C11.3795 3.15621 11.2067 3.07547 11.1668 3.05555C11.1277 3.03599 11.2216 3.07725 11.3083 3.16391L9.89407 4.57812ZM10.1309 4.73604C10.1006 4.70566 10.0856 4.68401 10.1072 4.71194C10.117 4.72457 10.1579 4.77871 10.1981 4.82704C10.2851 4.93134 10.449 5.11038 10.7067 5.2392L11.6011 3.45034C11.7008 3.5002 11.7464 3.5608 11.7346 3.54667C11.7324 3.5441 11.7285 3.53919 11.7208 3.52939C11.717 3.52448 11.713 3.51918 11.7077 3.5123C11.7029 3.50606 11.6963 3.49742 11.6898 3.48904C11.6771 3.47256 11.658 3.44809 11.636 3.42175C11.6141 3.39546 11.5833 3.35998 11.5452 3.32183L10.1309 4.73604ZM10.4468 5.05188L10.6047 5.2098L12.0189 3.79558L11.861 3.63766L10.4468 5.05188ZM11.1474 3.51629L9.72614 3.75317L10.0549 5.72596L11.4762 5.48908L11.1474 3.51629ZM9.69443 3.75898C8.78966 3.93994 8.10159 4.82615 8.27248 5.85147L10.2453 5.52267C10.2506 5.55443 10.2421 5.60217 10.214 5.64195C10.1914 5.67402 10.1512 5.70724 10.0867 5.72015L9.69443 3.75898ZM8.27829 5.88319C8.45766 6.78001 9.21318 7.31874 10.0485 7.31874V5.31874C10.0527 5.31874 10.0982 5.32155 10.153 5.36464C10.2115 5.41056 10.2346 5.46647 10.2395 5.49096L8.27829 5.88319ZM10.0485 7.31874H10.2064V5.31874H10.0485V7.31874ZM10.3935 7.30108L13.7098 6.66941L13.3355 4.70473L10.0193 5.33641L10.3935 7.30108ZM13.7188 6.66765C14.6235 6.4867 15.3116 5.60049 15.1407 4.57517L13.1679 4.90396C13.1626 4.87221 13.1711 4.82447 13.1992 4.78468C13.2218 4.75262 13.262 4.7194 13.3265 4.70649L13.7188 6.66765ZM15.1358 4.54806L14.5041 1.31074L12.5412 1.69376L13.1728 4.93108L15.1358 4.54806ZM14.5032 1.30613C14.3223 0.401368 13.4361 -0.286703 12.4107 -0.115815L12.7395 1.85697C12.7078 1.86227 12.6601 1.85381 12.6203 1.82572C12.5882 1.80309 12.555 1.76291 12.5421 1.69837L14.5032 1.30613ZM12.379 -0.110002C11.4743 0.0709516 10.7862 0.957158 10.9571 1.98248L12.9299 1.65369C12.9352 1.68544 12.9267 1.73318 12.8986 1.77297C12.876 1.80504 12.8358 1.83825 12.7713 1.85116L12.379 -0.110002ZM10.9587 1.99187L11.1956 3.33417L13.1651 2.9866L12.9283 1.6443L10.9587 1.99187ZM12.8875 2.45328C12.8113 2.37716 12.6944 2.25988 12.573 2.15061C12.4717 2.05948 12.2859 1.89774 12.0749 1.79221L11.1804 3.58106C11.1404 3.56105 11.1285 3.54899 11.1517 3.56671C11.1701 3.5807 11.1978 3.60367 11.235 3.63719C11.311 3.70558 11.3914 3.7857 11.4732 3.86749L12.8875 2.45328ZM11.6276 1.68663H11.5487V3.68663H11.6276V1.68663ZM12.2558 1.97953C12.2294 1.95312 12.1377 1.85865 12.0302 1.77807C11.9333 1.70537 11.6776 1.52872 11.3118 1.52872V3.52872C11.1628 3.52872 11.0452 3.49124 10.9702 3.45844C10.8975 3.42664 10.8497 3.39267 10.8302 3.37806C10.8097 3.36263 10.8 3.35299 10.8055 3.35818C10.8114 3.36374 10.8197 3.37183 10.8416 3.39374L12.2558 1.97953ZM12.0189 1.82161C11.7676 1.57034 11.4408 1.38655 11.3138 1.30187L10.2044 2.96597C10.2739 3.0123 10.3365 3.0521 10.3876 3.08453C10.4419 3.11893 10.4776 3.14155 10.5104 3.16337C10.5681 3.20189 10.5889 3.22 10.6047 3.23582L12.0189 1.82161ZM11.3138 1.30187C11.1359 1.18327 10.9631 1.09815 10.851 1.0421C10.7262 0.97971 10.6621 0.946395 10.6032 0.907076L9.49376 2.57118C9.67166 2.68978 9.84446 2.7749 9.95656 2.83095C10.0813 2.89334 10.1454 2.92665 10.2044 2.96597L11.3138 1.30187ZM10.0485 0.739127H9.9695V2.73913H10.0485V0.739127ZM10.6766 1.03202C10.5389 0.894265 10.3935 0.817816 10.2954 0.775175C10.2016 0.734389 10.1144 0.709484 10.0764 0.698644C9.96691 0.667351 9.99741 0.674526 10.0219 0.686782L9.12749 2.47564C9.22619 2.52499 9.31618 2.55763 9.38491 2.5798C9.41912 2.59083 9.44989 2.59984 9.47348 2.60658C9.48519 2.60992 9.49638 2.61307 9.50504 2.6155C9.51443 2.61813 9.52095 2.61997 9.52699 2.62169C9.53948 2.62526 9.54114 2.6259 9.53806 2.62488C9.53476 2.62379 9.51974 2.61877 9.49798 2.60931C9.45666 2.59135 9.36067 2.54451 9.26239 2.44623L10.6766 1.03202ZM9.81724 0.611066C9.48804 0.528766 9.21471 0.459757 9.02239 0.395649L8.38993 2.29302C8.67136 2.38683 9.0297 2.47573 9.33217 2.55135L9.81724 0.611066ZM8.70616 0.344332C8.72796 0.344332 8.74488 0.345688 8.75567 0.346868C8.76111 0.347463 8.76526 0.348044 8.76794 0.348452C8.76929 0.348657 8.77031 0.348826 8.77098 0.348941C8.77165 0.349056 8.772 0.349122 8.77201 0.349123C8.77201 0.349123 8.77171 0.349066 8.77106 0.348934C8.77041 0.348803 8.76945 0.348606 8.76816 0.348328C8.76552 0.347762 8.76182 0.346935 8.75669 0.345733C8.74534 0.343072 8.73277 0.339948 8.71182 0.33471C8.67746 0.32612 8.60891 0.308671 8.53513 0.294838C8.45817 0.280408 8.35359 0.265373 8.23241 0.265373V2.26537C8.21061 2.26537 8.19368 2.26402 8.1829 2.26284C8.17745 2.26224 8.1733 2.26166 8.17063 2.26125C8.16928 2.26105 8.16825 2.26088 8.16758 2.26076C8.16691 2.26065 8.16656 2.26058 8.16656 2.26058C8.16655 2.26058 8.16686 2.26064 8.16751 2.26077C8.16816 2.2609 8.16911 2.2611 8.1704 2.26138C8.17304 2.26194 8.17674 2.26277 8.18187 2.26397C8.19322 2.26663 8.20579 2.26976 8.22675 2.275C8.26111 2.28359 8.32966 2.30103 8.40343 2.31487C8.4804 2.3293 8.58498 2.34433 8.70616 2.34433V0.344332ZM8.23241 0.265373H7.2849V2.26537H8.23241V0.265373ZM7.2849 0.265373C2.78467 0.265373 -0.821404 3.87144 -0.821404 8.37168H1.1786C1.1786 4.97601 3.88924 2.26537 7.2849 2.26537V0.265373ZM-0.791547 8.12914C-0.936467 8.70882 -0.693562 9.22513 -0.351636 9.54075C-0.0141964 9.85224 0.436276 10.0033 0.889226 10.0033V8.00335C0.868423 8.00335 0.924101 7.99654 1.00492 8.07115C1.09023 8.14989 1.2147 8.35037 1.14874 8.61421L-0.791547 8.12914Z",
              fill: "var(--color-active)",
              mask: "url(#path-1-inside-1_828_425)"
            }
          )
        ]
      }
    ),
    spainFlag: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "20px",
        height: "20px",
        viewBox: "0 0 36 36",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        role: "img",
        className: "iconify iconify--twemoji",
        preserveAspectRatio: "xMidYMid meet",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              fill: "#C60A1D",
              d: "M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#FFC400", d: "M0 12h36v12H0z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#EA596E", d: "M9 17v3a3 3 0 1 0 6 0v-3H9z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#F4A2B2", d: "M12 16h3v3h-3z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#DD2E44", d: "M9 16h3v3H9z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { fill: "#EA596E", cx: "12", cy: "14.5", rx: "3", ry: "1.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { fill: "#FFAC33", cx: "12", cy: "13.75", rx: "3", ry: ".75" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#99AAB5", d: "M7 16h1v7H7zm9 0h1v7h-1z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              fill: "#66757F",
              d: "M6 22h3v1H6zm9 0h3v1h-3zm-8-7h1v1H7zm9 0h1v1h-1z"
            }
          )
        ]
      }
    ),
    usaFlag: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "20px",
        height: "20px",
        viewBox: "0 -4 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { clipPath: "url(#clip0_503_3486)", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "28", height: "20", rx: "2", fill: "white" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "mask",
              {
                id: "mask0_503_3486",
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "28",
                height: "20",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "28", height: "20", rx: "2", fill: "white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { mask: "url(#mask0_503_3486)", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M28 0H0V1.33333H28V0ZM28 2.66667H0V4H28V2.66667ZM0 5.33333H28V6.66667H0V5.33333ZM28 8H0V9.33333H28V8ZM0 10.6667H28V12H0V10.6667ZM28 13.3333H0V14.6667H28V13.3333ZM0 16H28V17.3333H0V16ZM28 18.6667H0V20H28V18.6667Z",
                  fill: "#D02F44"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "12", height: "9.33333", fill: "#46467F" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("g", { filter: "url(#filter0_d_503_3486)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2.66665 1.99999C2.66665 2.36818 2.36817 2.66666 1.99998 2.66666C1.63179 2.66666 1.33331 2.36818 1.33331 1.99999C1.33331 1.63181 1.63179 1.33333 1.99998 1.33333C2.36817 1.33333 2.66665 1.63181 2.66665 1.99999ZM5.33331 1.99999C5.33331 2.36818 5.03484 2.66666 4.66665 2.66666C4.29846 2.66666 3.99998 2.36818 3.99998 1.99999C3.99998 1.63181 4.29846 1.33333 4.66665 1.33333C5.03484 1.33333 5.33331 1.63181 5.33331 1.99999ZM7.33331 2.66666C7.7015 2.66666 7.99998 2.36818 7.99998 1.99999C7.99998 1.63181 7.7015 1.33333 7.33331 1.33333C6.96512 1.33333 6.66665 1.63181 6.66665 1.99999C6.66665 2.36818 6.96512 2.66666 7.33331 2.66666ZM10.6666 1.99999C10.6666 2.36818 10.3682 2.66666 9.99998 2.66666C9.63179 2.66666 9.33331 2.36818 9.33331 1.99999C9.33331 1.63181 9.63179 1.33333 9.99998 1.33333C10.3682 1.33333 10.6666 1.63181 10.6666 1.99999ZM3.33331 3.99999C3.7015 3.99999 3.99998 3.70152 3.99998 3.33333C3.99998 2.96514 3.7015 2.66666 3.33331 2.66666C2.96512 2.66666 2.66665 2.96514 2.66665 3.33333C2.66665 3.70152 2.96512 3.99999 3.33331 3.99999ZM6.66665 3.33333C6.66665 3.70152 6.36817 3.99999 5.99998 3.99999C5.63179 3.99999 5.33331 3.70152 5.33331 3.33333C5.33331 2.96514 5.63179 2.66666 5.99998 2.66666C6.36817 2.66666 6.66665 2.96514 6.66665 3.33333ZM8.66665 3.99999C9.03484 3.99999 9.33331 3.70152 9.33331 3.33333C9.33331 2.96514 9.03484 2.66666 8.66665 2.66666C8.29846 2.66666 7.99998 2.96514 7.99998 3.33333C7.99998 3.70152 8.29846 3.99999 8.66665 3.99999ZM10.6666 4.66666C10.6666 5.03485 10.3682 5.33333 9.99998 5.33333C9.63179 5.33333 9.33331 5.03485 9.33331 4.66666C9.33331 4.29847 9.63179 3.99999 9.99998 3.99999C10.3682 3.99999 10.6666 4.29847 10.6666 4.66666ZM7.33331 5.33333C7.7015 5.33333 7.99998 5.03485 7.99998 4.66666C7.99998 4.29847 7.7015 3.99999 7.33331 3.99999C6.96512 3.99999 6.66665 4.29847 6.66665 4.66666C6.66665 5.03485 6.96512 5.33333 7.33331 5.33333ZM5.33331 4.66666C5.33331 5.03485 5.03484 5.33333 4.66665 5.33333C4.29846 5.33333 3.99998 5.03485 3.99998 4.66666C3.99998 4.29847 4.29846 3.99999 4.66665 3.99999C5.03484 3.99999 5.33331 4.29847 5.33331 4.66666ZM1.99998 5.33333C2.36817 5.33333 2.66665 5.03485 2.66665 4.66666C2.66665 4.29847 2.36817 3.99999 1.99998 3.99999C1.63179 3.99999 1.33331 4.29847 1.33331 4.66666C1.33331 5.03485 1.63179 5.33333 1.99998 5.33333ZM3.99998 5.99999C3.99998 6.36819 3.7015 6.66666 3.33331 6.66666C2.96512 6.66666 2.66665 6.36819 2.66665 5.99999C2.66665 5.6318 2.96512 5.33333 3.33331 5.33333C3.7015 5.33333 3.99998 5.6318 3.99998 5.99999ZM5.99998 6.66666C6.36817 6.66666 6.66665 6.36819 6.66665 5.99999C6.66665 5.6318 6.36817 5.33333 5.99998 5.33333C5.63179 5.33333 5.33331 5.6318 5.33331 5.99999C5.33331 6.36819 5.63179 6.66666 5.99998 6.66666ZM9.33331 5.99999C9.33331 6.36819 9.03484 6.66666 8.66665 6.66666C8.29846 6.66666 7.99998 6.36819 7.99998 5.99999C7.99998 5.6318 8.29846 5.33333 8.66665 5.33333C9.03484 5.33333 9.33331 5.6318 9.33331 5.99999ZM9.99998 8C10.3682 8 10.6666 7.70152 10.6666 7.33333C10.6666 6.96514 10.3682 6.66666 9.99998 6.66666C9.63179 6.66666 9.33331 6.96514 9.33331 7.33333C9.33331 7.70152 9.63179 8 9.99998 8ZM7.99998 7.33333C7.99998 7.70152 7.7015 8 7.33331 8C6.96512 8 6.66665 7.70152 6.66665 7.33333C6.66665 6.96514 6.96512 6.66666 7.33331 6.66666C7.7015 6.66666 7.99998 6.96514 7.99998 7.33333ZM4.66665 8C5.03484 8 5.33331 7.70152 5.33331 7.33333C5.33331 6.96514 5.03484 6.66666 4.66665 6.66666C4.29846 6.66666 3.99998 6.96514 3.99998 7.33333C3.99998 7.70152 4.29846 8 4.66665 8ZM2.66665 7.33333C2.66665 7.70152 2.36817 8 1.99998 8C1.63179 8 1.33331 7.70152 1.33331 7.33333C1.33331 6.96514 1.63179 6.66666 1.99998 6.66666C2.36817 6.66666 2.66665 6.96514 2.66665 7.33333Z",
                  fill: "url(#paint0_linear_503_3486)"
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "filter",
              {
                id: "filter0_d_503_3486",
                x: "1.33331",
                y: "1.33333",
                width: "9.33331",
                height: "7.66667",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "feColorMatrix",
                    {
                      in: "SourceAlpha",
                      type: "matrix",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                      result: "hardAlpha"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("feOffset", { dy: "1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "feColorMatrix",
                    {
                      type: "matrix",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "feBlend",
                    {
                      mode: "normal",
                      in2: "BackgroundImageFix",
                      result: "effect1_dropShadow_503_3486"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "feBlend",
                    {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "effect1_dropShadow_503_3486",
                      result: "shape"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "linearGradient",
              {
                id: "paint0_linear_503_3486",
                x1: "1.33331",
                y1: "1.33333",
                x2: "1.33331",
                y2: "7.99999",
                gradientUnits: "userSpaceOnUse",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { stopColor: "white" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "#F0F0F0" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("clipPath", { id: "clip0_503_3486", children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "28", height: "20", rx: "2", fill: "white" }) })
          ] })
        ]
      }
    ),
    blankCircle: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        width: "20px",
        height: "20px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
            stroke: "#000000",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      }
    ),
    reminderSvg: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "16px",
        height: "16px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M16 3.98999H8C6.93913 3.98999 5.92178 4.41135 5.17163 5.1615C4.42149 5.91164 4 6.92912 4 7.98999V17.99C4 19.0509 4.42149 20.0682 5.17163 20.8184C5.92178 21.5685 6.93913 21.99 8 21.99H16C17.0609 21.99 18.0783 21.5685 18.8284 20.8184C19.5786 20.0682 20 19.0509 20 17.99V7.98999C20 6.92912 19.5786 5.91164 18.8284 5.1615C18.0783 4.41135 17.0609 3.98999 16 3.98999Z",
              stroke: "#02A9EA",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M9 2V7",
              stroke: "#02A9EA",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M15 2V7",
              stroke: "#02A9EA",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M8 16H14",
              stroke: "#02A9EA",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M8 12H16",
              stroke: "#02A9EA",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ]
      }
    ),
    sendSvg: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        width: "20px",
        height: "20px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z",
            stroke: "#000000",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      }
    ),
    openEyeIcon: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "15px",
        height: "15px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z",
              stroke: "#000000",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z",
              stroke: "#000000",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ]
      }
    ),
    closeEyeIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        width: "15px",
        height: "15px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5",
            stroke: "#000000",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      }
    ),
    solutionIcon: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "18px",
        height: "18px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M12 7C9.23858 7 7 9.23858 7 12C7 13.3613 7.54402 14.5955 8.42651 15.4972C8.77025 15.8484 9.05281 16.2663 9.14923 16.7482L9.67833 19.3924C9.86537 20.3272 10.6862 21 11.6395 21H12.3605C13.3138 21 14.1346 20.3272 14.3217 19.3924L14.8508 16.7482C14.9472 16.2663 15.2297 15.8484 15.5735 15.4972C16.456 14.5955 17 13.3613 17 12C17 9.23858 14.7614 7 12 7Z",
              stroke: "var(--color-active)",
              strokeWidth: "2"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M12 4V3",
              stroke: "var(--color-active)",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M18 6L19 5",
              stroke: "var(--color-active)",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M20 12H21",
              stroke: "var(--color-active)",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M4 12H3",
              stroke: "var(--color-active)",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M5 5L6 6",
              stroke: "var(--color-active)",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M10 17H14",
              stroke: "var(--color-active)",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              opacity: "0.1",
              d: "M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 13.3613 16.456 14.5955 15.5735 15.4972C15.2297 15.8484 14.9472 16.2663 14.8508 16.7482L14.8004 17H9.19961L9.14923 16.7482C9.05281 16.2663 8.77025 15.8484 8.42651 15.4972C7.54402 14.5955 7 13.3613 7 12Z",
              fill: "var(--color-active)"
            }
          )
        ]
      }
    )
  };
  function SimpleButton({ text: text2, action, svg, extraClass, disabled, id: id2 }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { id: id2, disabled: Boolean(disabled), className: `simple-button-svg ${extraClass}`, onClick: action, children: [
      svg,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: text2 })
    ] });
  }
  const consoleLogger = {
    type: "logger",
    log(args) {
      this.output("log", args);
    },
    warn(args) {
      this.output("warn", args);
    },
    error(args) {
      this.output("error", args);
    },
    output(type, args) {
      if (console && console[type])
        console[type].apply(console, args);
    }
  };
  class Logger {
    constructor(concreteLogger) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.init(concreteLogger, options);
    }
    init(concreteLogger) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = options.prefix || "i18next:";
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
    log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return this.forward(args, "log", "", true);
    }
    warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return this.forward(args, "warn", "", true);
    }
    error() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return this.forward(args, "error", "");
    }
    deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
    }
    forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug)
        return null;
      if (typeof args[0] === "string")
        args[0] = `${prefix}${this.prefix} ${args[0]}`;
      return this.logger[lvl](args);
    }
    create(moduleName) {
      return new Logger(this.logger, {
        ...{
          prefix: `${this.prefix}:${moduleName}:`
        },
        ...this.options
      });
    }
    clone(options) {
      options = options || this.options;
      options.prefix = options.prefix || this.prefix;
      return new Logger(this.logger, options);
    }
  }
  var baseLogger = new Logger();
  class EventEmitter {
    constructor() {
      this.observers = {};
    }
    on(events, listener) {
      events.split(" ").forEach((event) => {
        if (!this.observers[event])
          this.observers[event] = /* @__PURE__ */ new Map();
        const numListeners = this.observers[event].get(listener) || 0;
        this.observers[event].set(listener, numListeners + 1);
      });
      return this;
    }
    off(event, listener) {
      if (!this.observers[event])
        return;
      if (!listener) {
        delete this.observers[event];
        return;
      }
      this.observers[event].delete(listener);
    }
    emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (this.observers[event]) {
        const cloned = Array.from(this.observers[event].entries());
        cloned.forEach((_ref) => {
          let [observer, numTimesAdded] = _ref;
          for (let i2 = 0; i2 < numTimesAdded; i2++) {
            observer(...args);
          }
        });
      }
      if (this.observers["*"]) {
        const cloned = Array.from(this.observers["*"].entries());
        cloned.forEach((_ref2) => {
          let [observer, numTimesAdded] = _ref2;
          for (let i2 = 0; i2 < numTimesAdded; i2++) {
            observer.apply(observer, [event, ...args]);
          }
        });
      }
    }
  }
  function defer() {
    let res;
    let rej;
    const promise = new Promise((resolve, reject) => {
      res = resolve;
      rej = reject;
    });
    promise.resolve = res;
    promise.reject = rej;
    return promise;
  }
  function makeString(object) {
    if (object == null)
      return "";
    return "" + object;
  }
  function copy(a2, s2, t2) {
    a2.forEach((m2) => {
      if (s2[m2])
        t2[m2] = s2[m2];
    });
  }
  const lastOfPathSeparatorRegExp = /###/g;
  function getLastOfPath(object, path, Empty) {
    function cleanKey(key) {
      return key && key.indexOf("###") > -1 ? key.replace(lastOfPathSeparatorRegExp, ".") : key;
    }
    function canNotTraverseDeeper() {
      return !object || typeof object === "string";
    }
    const stack = typeof path !== "string" ? path : path.split(".");
    let stackIndex = 0;
    while (stackIndex < stack.length - 1) {
      if (canNotTraverseDeeper())
        return {};
      const key = cleanKey(stack[stackIndex]);
      if (!object[key] && Empty)
        object[key] = new Empty();
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        object = object[key];
      } else {
        object = {};
      }
      ++stackIndex;
    }
    if (canNotTraverseDeeper())
      return {};
    return {
      obj: object,
      k: cleanKey(stack[stackIndex])
    };
  }
  function setPath(object, path, newValue) {
    const {
      obj,
      k: k2
    } = getLastOfPath(object, path, Object);
    if (obj !== void 0 || path.length === 1) {
      obj[k2] = newValue;
      return;
    }
    let e2 = path[path.length - 1];
    let p2 = path.slice(0, path.length - 1);
    let last = getLastOfPath(object, p2, Object);
    while (last.obj === void 0 && p2.length) {
      e2 = `${p2[p2.length - 1]}.${e2}`;
      p2 = p2.slice(0, p2.length - 1);
      last = getLastOfPath(object, p2, Object);
      if (last && last.obj && typeof last.obj[`${last.k}.${e2}`] !== "undefined") {
        last.obj = void 0;
      }
    }
    last.obj[`${last.k}.${e2}`] = newValue;
  }
  function pushPath(object, path, newValue, concat) {
    const {
      obj,
      k: k2
    } = getLastOfPath(object, path, Object);
    obj[k2] = obj[k2] || [];
    if (concat)
      obj[k2] = obj[k2].concat(newValue);
    if (!concat)
      obj[k2].push(newValue);
  }
  function getPath(object, path) {
    const {
      obj,
      k: k2
    } = getLastOfPath(object, path);
    if (!obj)
      return void 0;
    return obj[k2];
  }
  function getPathWithDefaults(data, defaultData, key) {
    const value2 = getPath(data, key);
    if (value2 !== void 0) {
      return value2;
    }
    return getPath(defaultData, key);
  }
  function deepExtend(target, source, overwrite) {
    for (const prop in source) {
      if (prop !== "__proto__" && prop !== "constructor") {
        if (prop in target) {
          if (typeof target[prop] === "string" || target[prop] instanceof String || typeof source[prop] === "string" || source[prop] instanceof String) {
            if (overwrite)
              target[prop] = source[prop];
          } else {
            deepExtend(target[prop], source[prop], overwrite);
          }
        } else {
          target[prop] = source[prop];
        }
      }
    }
    return target;
  }
  function regexEscape(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  var _entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
  };
  function escape(data) {
    if (typeof data === "string") {
      return data.replace(/[&<>"'\/]/g, (s2) => _entityMap[s2]);
    }
    return data;
  }
  class RegExpCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.regExpMap = /* @__PURE__ */ new Map();
      this.regExpQueue = [];
    }
    getRegExp(pattern) {
      const regExpFromCache = this.regExpMap.get(pattern);
      if (regExpFromCache !== void 0) {
        return regExpFromCache;
      }
      const regExpNew = new RegExp(pattern);
      if (this.regExpQueue.length === this.capacity) {
        this.regExpMap.delete(this.regExpQueue.shift());
      }
      this.regExpMap.set(pattern, regExpNew);
      this.regExpQueue.push(pattern);
      return regExpNew;
    }
  }
  const chars = [" ", ",", "?", "!", ";"];
  const looksLikeObjectPathRegExpCache = new RegExpCache(20);
  function looksLikeObjectPath(key, nsSeparator, keySeparator) {
    nsSeparator = nsSeparator || "";
    keySeparator = keySeparator || "";
    const possibleChars = chars.filter((c2) => nsSeparator.indexOf(c2) < 0 && keySeparator.indexOf(c2) < 0);
    if (possibleChars.length === 0)
      return true;
    const r2 = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c2) => c2 === "?" ? "\\?" : c2).join("|")})`);
    let matched = !r2.test(key);
    if (!matched) {
      const ki2 = key.indexOf(keySeparator);
      if (ki2 > 0 && !r2.test(key.substring(0, ki2))) {
        matched = true;
      }
    }
    return matched;
  }
  function deepFind(obj, path) {
    let keySeparator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!obj)
      return void 0;
    if (obj[path])
      return obj[path];
    const tokens = path.split(keySeparator);
    let current = obj;
    for (let i2 = 0; i2 < tokens.length; ) {
      if (!current || typeof current !== "object") {
        return void 0;
      }
      let next;
      let nextPath = "";
      for (let j2 = i2; j2 < tokens.length; ++j2) {
        if (j2 !== i2) {
          nextPath += keySeparator;
        }
        nextPath += tokens[j2];
        next = current[nextPath];
        if (next !== void 0) {
          if (["string", "number", "boolean"].indexOf(typeof next) > -1 && j2 < tokens.length - 1) {
            continue;
          }
          i2 += j2 - i2 + 1;
          break;
        }
      }
      current = next;
    }
    return current;
  }
  function getCleanedCode(code2) {
    if (code2 && code2.indexOf("_") > 0)
      return code2.replace("_", "-");
    return code2;
  }
  class ResourceStore extends EventEmitter {
    constructor(data) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        ns: ["translation"],
        defaultNS: "translation"
      };
      super();
      this.data = data || {};
      this.options = options;
      if (this.options.keySeparator === void 0) {
        this.options.keySeparator = ".";
      }
      if (this.options.ignoreJSONStructure === void 0) {
        this.options.ignoreJSONStructure = true;
      }
    }
    addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
    removeNamespaces(ns) {
      const index2 = this.options.ns.indexOf(ns);
      if (index2 > -1) {
        this.options.ns.splice(index2, 1);
      }
    }
    getResource(lng, ns, key) {
      let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
      const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
      let path;
      if (lng.indexOf(".") > -1) {
        path = lng.split(".");
      } else {
        path = [lng, ns];
        if (key) {
          if (Array.isArray(key)) {
            path.push(...key);
          } else if (typeof key === "string" && keySeparator) {
            path.push(...key.split(keySeparator));
          } else {
            path.push(key);
          }
        }
      }
      const result = getPath(this.data, path);
      if (!result && !ns && !key && lng.indexOf(".") > -1) {
        lng = path[0];
        ns = path[1];
        key = path.slice(2).join(".");
      }
      if (result || !ignoreJSONStructure || typeof key !== "string")
        return result;
      return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
    }
    addResource(lng, ns, key, value2) {
      let options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: false
      };
      const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
      let path = [lng, ns];
      if (key)
        path = path.concat(keySeparator ? key.split(keySeparator) : key);
      if (lng.indexOf(".") > -1) {
        path = lng.split(".");
        value2 = ns;
        ns = path[1];
      }
      this.addNamespaces(ns);
      setPath(this.data, path, value2);
      if (!options.silent)
        this.emit("added", lng, ns, key, value2);
    }
    addResources(lng, ns, resources) {
      let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        silent: false
      };
      for (const m2 in resources) {
        if (typeof resources[m2] === "string" || Object.prototype.toString.apply(resources[m2]) === "[object Array]")
          this.addResource(lng, ns, m2, resources[m2], {
            silent: true
          });
      }
      if (!options.silent)
        this.emit("added", lng, ns, resources);
    }
    addResourceBundle(lng, ns, resources, deep, overwrite) {
      let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
        silent: false,
        skipCopy: false
      };
      let path = [lng, ns];
      if (lng.indexOf(".") > -1) {
        path = lng.split(".");
        deep = resources;
        resources = ns;
        ns = path[1];
      }
      this.addNamespaces(ns);
      let pack = getPath(this.data, path) || {};
      if (!options.skipCopy)
        resources = JSON.parse(JSON.stringify(resources));
      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = {
          ...pack,
          ...resources
        };
      }
      setPath(this.data, path, pack);
      if (!options.silent)
        this.emit("added", lng, ns, resources);
    }
    removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }
      this.removeNamespaces(ns);
      this.emit("removed", lng, ns);
    }
    hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== void 0;
    }
    getResourceBundle(lng, ns) {
      if (!ns)
        ns = this.options.defaultNS;
      if (this.options.compatibilityAPI === "v1")
        return {
          ...{},
          ...this.getResource(lng, ns)
        };
      return this.getResource(lng, ns);
    }
    getDataByLanguage(lng) {
      return this.data[lng];
    }
    hasLanguageSomeTranslations(lng) {
      const data = this.getDataByLanguage(lng);
      const n2 = data && Object.keys(data) || [];
      return !!n2.find((v2) => data[v2] && Object.keys(data[v2]).length > 0);
    }
    toJSON() {
      return this.data;
    }
  }
  var postProcessor = {
    processors: {},
    addPostProcessor(module) {
      this.processors[module.name] = module;
    },
    handle(processors, value2, key, options, translator) {
      processors.forEach((processor) => {
        if (this.processors[processor])
          value2 = this.processors[processor].process(value2, key, options, translator);
      });
      return value2;
    }
  };
  const checkedLoadedFor = {};
  class Translator extends EventEmitter {
    constructor(services) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      super();
      copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, this);
      this.options = options;
      if (this.options.keySeparator === void 0) {
        this.options.keySeparator = ".";
      }
      this.logger = baseLogger.create("translator");
    }
    changeLanguage(lng) {
      if (lng)
        this.language = lng;
    }
    exists(key) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      };
      if (key === void 0 || key === null) {
        return false;
      }
      const resolved = this.resolve(key, options);
      return resolved && resolved.res !== void 0;
    }
    extractFromKey(key, options) {
      let nsSeparator = options.nsSeparator !== void 0 ? options.nsSeparator : this.options.nsSeparator;
      if (nsSeparator === void 0)
        nsSeparator = ":";
      const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
      let namespaces = options.ns || this.options.defaultNS || [];
      const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
      const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
      if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
        const m2 = key.match(this.interpolator.nestingRegexp);
        if (m2 && m2.length > 0) {
          return {
            key,
            namespaces
          };
        }
        const parts2 = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts2[0]) > -1)
          namespaces = parts2.shift();
        key = parts2.join(keySeparator);
      }
      if (typeof namespaces === "string")
        namespaces = [namespaces];
      return {
        key,
        namespaces
      };
    }
    translate(keys, options, lastKey) {
      if (typeof options !== "object" && this.options.overloadTranslationOptionHandler) {
        options = this.options.overloadTranslationOptionHandler(arguments);
      }
      if (typeof options === "object")
        options = {
          ...options
        };
      if (!options)
        options = {};
      if (keys === void 0 || keys === null)
        return "";
      if (!Array.isArray(keys))
        keys = [String(keys)];
      const returnDetails = options.returnDetails !== void 0 ? options.returnDetails : this.options.returnDetails;
      const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
      const {
        key,
        namespaces
      } = this.extractFromKey(keys[keys.length - 1], options);
      const namespace = namespaces[namespaces.length - 1];
      const lng = options.lng || this.language;
      const appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (lng && lng.toLowerCase() === "cimode") {
        if (appendNamespaceToCIMode) {
          const nsSeparator = options.nsSeparator || this.options.nsSeparator;
          if (returnDetails) {
            return {
              res: `${namespace}${nsSeparator}${key}`,
              usedKey: key,
              exactUsedKey: key,
              usedLng: lng,
              usedNS: namespace,
              usedParams: this.getUsedParamsDetails(options)
            };
          }
          return `${namespace}${nsSeparator}${key}`;
        }
        if (returnDetails) {
          return {
            res: key,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(options)
          };
        }
        return key;
      }
      const resolved = this.resolve(keys, options);
      let res = resolved && resolved.res;
      const resUsedKey = resolved && resolved.usedKey || key;
      const resExactUsedKey = resolved && resolved.exactUsedKey || key;
      const resType = Object.prototype.toString.apply(res);
      const noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
      const joinArrays = options.joinArrays !== void 0 ? options.joinArrays : this.options.joinArrays;
      const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      const handleAsObject = typeof res !== "string" && typeof res !== "boolean" && typeof res !== "number";
      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === "string" && resType === "[object Array]")) {
        if (!options.returnObjects && !this.options.returnObjects) {
          if (!this.options.returnedObjectHandler) {
            this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          }
          const r2 = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, {
            ...options,
            ns: namespaces
          }) : `key '${key} (${this.language})' returned an object instead of string.`;
          if (returnDetails) {
            resolved.res = r2;
            resolved.usedParams = this.getUsedParamsDetails(options);
            return resolved;
          }
          return r2;
        }
        if (keySeparator) {
          const resTypeIsArray = resType === "[object Array]";
          const copy2 = resTypeIsArray ? [] : {};
          const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
          for (const m2 in res) {
            if (Object.prototype.hasOwnProperty.call(res, m2)) {
              const deepKey = `${newKeyToUse}${keySeparator}${m2}`;
              copy2[m2] = this.translate(deepKey, {
                ...options,
                ...{
                  joinArrays: false,
                  ns: namespaces
                }
              });
              if (copy2[m2] === deepKey)
                copy2[m2] = res[m2];
            }
          }
          res = copy2;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === "string" && resType === "[object Array]") {
        res = res.join(joinArrays);
        if (res)
          res = this.extendTranslation(res, keys, options, lastKey);
      } else {
        let usedDefault = false;
        let usedKey = false;
        const needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
        const hasDefaultValue = Translator.hasDefaultValue(options);
        const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : "";
        const defaultValueSuffixOrdinalFallback = options.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, {
          ordinal: false
        }) : "";
        const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
        const defaultValue = needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] || options[`defaultValue${defaultValueSuffix}`] || options[`defaultValue${defaultValueSuffixOrdinalFallback}`] || options.defaultValue;
        if (!this.isValidLookup(res) && hasDefaultValue) {
          usedDefault = true;
          res = defaultValue;
        }
        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        }
        const missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
        const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
        const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
          if (keySeparator) {
            const fk2 = this.resolve(key, {
              ...options,
              keySeparator: false
            });
            if (fk2 && fk2.res)
              this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          let lngs = [];
          const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
            for (let i2 = 0; i2 < fallbackLngs.length; i2++) {
              lngs.push(fallbackLngs[i2]);
            }
          } else if (this.options.saveMissingTo === "all") {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }
          const send = (l2, k2, specificDefaultValue) => {
            const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
            if (this.options.missingKeyHandler) {
              this.options.missingKeyHandler(l2, namespace, k2, defaultForMissing, updateMissing, options);
            } else if (this.backendConnector && this.backendConnector.saveMissing) {
              this.backendConnector.saveMissing(l2, namespace, k2, defaultForMissing, updateMissing, options);
            }
            this.emit("missingKey", l2, namespace, k2, res);
          };
          if (this.options.saveMissing) {
            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach((language) => {
                const suffixes = this.pluralResolver.getSuffixes(language, options);
                if (needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                  suffixes.push(`${this.options.pluralSeparator}zero`);
                }
                suffixes.forEach((suffix) => {
                  send([language], key + suffix, options[`defaultValue${suffix}`] || defaultValue);
                });
              });
            } else {
              send(lngs, key, defaultValue);
            }
          }
        }
        res = this.extendTranslation(res, keys, options, resolved, lastKey);
        if (usedKey && res === key && this.options.appendNamespaceToMissingKey)
          res = `${namespace}:${key}`;
        if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
          if (this.options.compatibilityAPI !== "v1") {
            res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}:${key}` : key, usedDefault ? res : void 0);
          } else {
            res = this.options.parseMissingKeyHandler(res);
          }
        }
      }
      if (returnDetails) {
        resolved.res = res;
        resolved.usedParams = this.getUsedParamsDetails(options);
        return resolved;
      }
      return res;
    }
    extendTranslation(res, key, options, resolved, lastKey) {
      var _this = this;
      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, {
          ...this.options.interpolation.defaultVariables,
          ...options
        }, options.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved
        });
      } else if (!options.skipInterpolation) {
        if (options.interpolation)
          this.interpolator.init({
            ...options,
            ...{
              interpolation: {
                ...this.options.interpolation,
                ...options.interpolation
              }
            }
          });
        const skipOnVariables = typeof res === "string" && (options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
        let nestBef;
        if (skipOnVariables) {
          const nb2 = res.match(this.interpolator.nestingRegexp);
          nestBef = nb2 && nb2.length;
        }
        let data = options.replace && typeof options.replace !== "string" ? options.replace : options;
        if (this.options.interpolation.defaultVariables)
          data = {
            ...this.options.interpolation.defaultVariables,
            ...data
          };
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
        if (skipOnVariables) {
          const na = res.match(this.interpolator.nestingRegexp);
          const nestAft = na && na.length;
          if (nestBef < nestAft)
            options.nest = false;
        }
        if (!options.lng && this.options.compatibilityAPI !== "v1" && resolved && resolved.res)
          options.lng = resolved.usedLng;
        if (options.nest !== false)
          res = this.interpolator.nest(res, function() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            if (lastKey && lastKey[0] === args[0] && !options.context) {
              _this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
              return null;
            }
            return _this.translate(...args, key);
          }, options);
        if (options.interpolation)
          this.interpolator.reset();
      }
      const postProcess = options.postProcess || this.options.postProcess;
      const postProcessorNames = typeof postProcess === "string" ? [postProcess] : postProcess;
      if (res !== void 0 && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
          i18nResolved: {
            ...resolved,
            usedParams: this.getUsedParamsDetails(options)
          },
          ...options
        } : options, this);
      }
      return res;
    }
    resolve(keys) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      let found;
      let usedKey;
      let exactUsedKey;
      let usedLng;
      let usedNS;
      if (typeof keys === "string")
        keys = [keys];
      keys.forEach((k2) => {
        if (this.isValidLookup(found))
          return;
        const extracted = this.extractFromKey(k2, options);
        const key = extracted.key;
        usedKey = key;
        let namespaces = extracted.namespaces;
        if (this.options.fallbackNS)
          namespaces = namespaces.concat(this.options.fallbackNS);
        const needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
        const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
        const needsContextHandling = options.context !== void 0 && (typeof options.context === "string" || typeof options.context === "number") && options.context !== "";
        const codes = options.lngs ? options.lngs : this.languageUtils.toResolveHierarchy(options.lng || this.language, options.fallbackLng);
        namespaces.forEach((ns) => {
          if (this.isValidLookup(found))
            return;
          usedNS = ns;
          if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(usedNS)) {
            checkedLoadedFor[`${codes[0]}-${ns}`] = true;
            this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
          }
          codes.forEach((code2) => {
            if (this.isValidLookup(found))
              return;
            usedLng = code2;
            const finalKeys = [key];
            if (this.i18nFormat && this.i18nFormat.addLookupKeys) {
              this.i18nFormat.addLookupKeys(finalKeys, key, code2, ns, options);
            } else {
              let pluralSuffix;
              if (needsPluralHandling)
                pluralSuffix = this.pluralResolver.getSuffix(code2, options.count, options);
              const zeroSuffix = `${this.options.pluralSeparator}zero`;
              const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
              if (needsPluralHandling) {
                finalKeys.push(key + pluralSuffix);
                if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                if (needsZeroSuffixLookup) {
                  finalKeys.push(key + zeroSuffix);
                }
              }
              if (needsContextHandling) {
                const contextKey = `${key}${this.options.contextSeparator}${options.context}`;
                finalKeys.push(contextKey);
                if (needsPluralHandling) {
                  finalKeys.push(contextKey + pluralSuffix);
                  if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                    finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                  }
                  if (needsZeroSuffixLookup) {
                    finalKeys.push(contextKey + zeroSuffix);
                  }
                }
              }
            }
            let possibleKey;
            while (possibleKey = finalKeys.pop()) {
              if (!this.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = this.getResource(code2, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey,
        exactUsedKey,
        usedLng,
        usedNS
      };
    }
    isValidLookup(res) {
      return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
    }
    getResource(code2, ns, key) {
      let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource)
        return this.i18nFormat.getResource(code2, ns, key, options);
      return this.resourceStore.getResource(code2, ns, key, options);
    }
    getUsedParamsDetails() {
      let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const optionsKeys = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"];
      const useOptionsReplaceForData = options.replace && typeof options.replace !== "string";
      let data = useOptionsReplaceForData ? options.replace : options;
      if (useOptionsReplaceForData && typeof options.count !== "undefined") {
        data.count = options.count;
      }
      if (this.options.interpolation.defaultVariables) {
        data = {
          ...this.options.interpolation.defaultVariables,
          ...data
        };
      }
      if (!useOptionsReplaceForData) {
        data = {
          ...data
        };
        for (const key of optionsKeys) {
          delete data[key];
        }
      }
      return data;
    }
    static hasDefaultValue(options) {
      const prefix = "defaultValue";
      for (const option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && void 0 !== options[option]) {
          return true;
        }
      }
      return false;
    }
  }
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  class LanguageUtil {
    constructor(options) {
      this.options = options;
      this.supportedLngs = this.options.supportedLngs || false;
      this.logger = baseLogger.create("languageUtils");
    }
    getScriptPartFromCode(code2) {
      code2 = getCleanedCode(code2);
      if (!code2 || code2.indexOf("-") < 0)
        return null;
      const p2 = code2.split("-");
      if (p2.length === 2)
        return null;
      p2.pop();
      if (p2[p2.length - 1].toLowerCase() === "x")
        return null;
      return this.formatLanguageCode(p2.join("-"));
    }
    getLanguagePartFromCode(code2) {
      code2 = getCleanedCode(code2);
      if (!code2 || code2.indexOf("-") < 0)
        return code2;
      const p2 = code2.split("-");
      return this.formatLanguageCode(p2[0]);
    }
    formatLanguageCode(code2) {
      if (typeof code2 === "string" && code2.indexOf("-") > -1) {
        const specialCases = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
        let p2 = code2.split("-");
        if (this.options.lowerCaseLng) {
          p2 = p2.map((part) => part.toLowerCase());
        } else if (p2.length === 2) {
          p2[0] = p2[0].toLowerCase();
          p2[1] = p2[1].toUpperCase();
          if (specialCases.indexOf(p2[1].toLowerCase()) > -1)
            p2[1] = capitalize(p2[1].toLowerCase());
        } else if (p2.length === 3) {
          p2[0] = p2[0].toLowerCase();
          if (p2[1].length === 2)
            p2[1] = p2[1].toUpperCase();
          if (p2[0] !== "sgn" && p2[2].length === 2)
            p2[2] = p2[2].toUpperCase();
          if (specialCases.indexOf(p2[1].toLowerCase()) > -1)
            p2[1] = capitalize(p2[1].toLowerCase());
          if (specialCases.indexOf(p2[2].toLowerCase()) > -1)
            p2[2] = capitalize(p2[2].toLowerCase());
        }
        return p2.join("-");
      }
      return this.options.cleanCode || this.options.lowerCaseLng ? code2.toLowerCase() : code2;
    }
    isSupportedCode(code2) {
      if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
        code2 = this.getLanguagePartFromCode(code2);
      }
      return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code2) > -1;
    }
    getBestMatchFromCodes(codes) {
      if (!codes)
        return null;
      let found;
      codes.forEach((code2) => {
        if (found)
          return;
        const cleanedLng = this.formatLanguageCode(code2);
        if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng))
          found = cleanedLng;
      });
      if (!found && this.options.supportedLngs) {
        codes.forEach((code2) => {
          if (found)
            return;
          const lngOnly = this.getLanguagePartFromCode(code2);
          if (this.isSupportedCode(lngOnly))
            return found = lngOnly;
          found = this.options.supportedLngs.find((supportedLng) => {
            if (supportedLng === lngOnly)
              return supportedLng;
            if (supportedLng.indexOf("-") < 0 && lngOnly.indexOf("-") < 0)
              return;
            if (supportedLng.indexOf("-") > 0 && lngOnly.indexOf("-") < 0 && supportedLng.substring(0, supportedLng.indexOf("-")) === lngOnly)
              return supportedLng;
            if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1)
              return supportedLng;
          });
        });
      }
      if (!found)
        found = this.getFallbackCodes(this.options.fallbackLng)[0];
      return found;
    }
    getFallbackCodes(fallbacks, code2) {
      if (!fallbacks)
        return [];
      if (typeof fallbacks === "function")
        fallbacks = fallbacks(code2);
      if (typeof fallbacks === "string")
        fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === "[object Array]")
        return fallbacks;
      if (!code2)
        return fallbacks.default || [];
      let found = fallbacks[code2];
      if (!found)
        found = fallbacks[this.getScriptPartFromCode(code2)];
      if (!found)
        found = fallbacks[this.formatLanguageCode(code2)];
      if (!found)
        found = fallbacks[this.getLanguagePartFromCode(code2)];
      if (!found)
        found = fallbacks.default;
      return found || [];
    }
    toResolveHierarchy(code2, fallbackCode) {
      const fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code2);
      const codes = [];
      const addCode = (c2) => {
        if (!c2)
          return;
        if (this.isSupportedCode(c2)) {
          codes.push(c2);
        } else {
          this.logger.warn(`rejecting language code not found in supportedLngs: ${c2}`);
        }
      };
      if (typeof code2 === "string" && (code2.indexOf("-") > -1 || code2.indexOf("_") > -1)) {
        if (this.options.load !== "languageOnly")
          addCode(this.formatLanguageCode(code2));
        if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly")
          addCode(this.getScriptPartFromCode(code2));
        if (this.options.load !== "currentOnly")
          addCode(this.getLanguagePartFromCode(code2));
      } else if (typeof code2 === "string") {
        addCode(this.formatLanguageCode(code2));
      }
      fallbackCodes.forEach((fc2) => {
        if (codes.indexOf(fc2) < 0)
          addCode(this.formatLanguageCode(fc2));
      });
      return codes;
    }
  }
  let sets = [{
    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
    nr: [1, 2],
    fc: 1
  }, {
    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
    nr: [1, 2],
    fc: 2
  }, {
    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
    nr: [1],
    fc: 3
  }, {
    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
    nr: [1, 2, 5],
    fc: 4
  }, {
    lngs: ["ar"],
    nr: [0, 1, 2, 3, 11, 100],
    fc: 5
  }, {
    lngs: ["cs", "sk"],
    nr: [1, 2, 5],
    fc: 6
  }, {
    lngs: ["csb", "pl"],
    nr: [1, 2, 5],
    fc: 7
  }, {
    lngs: ["cy"],
    nr: [1, 2, 3, 8],
    fc: 8
  }, {
    lngs: ["fr"],
    nr: [1, 2],
    fc: 9
  }, {
    lngs: ["ga"],
    nr: [1, 2, 3, 7, 11],
    fc: 10
  }, {
    lngs: ["gd"],
    nr: [1, 2, 3, 20],
    fc: 11
  }, {
    lngs: ["is"],
    nr: [1, 2],
    fc: 12
  }, {
    lngs: ["jv"],
    nr: [0, 1],
    fc: 13
  }, {
    lngs: ["kw"],
    nr: [1, 2, 3, 4],
    fc: 14
  }, {
    lngs: ["lt"],
    nr: [1, 2, 10],
    fc: 15
  }, {
    lngs: ["lv"],
    nr: [1, 2, 0],
    fc: 16
  }, {
    lngs: ["mk"],
    nr: [1, 2],
    fc: 17
  }, {
    lngs: ["mnk"],
    nr: [0, 1, 2],
    fc: 18
  }, {
    lngs: ["mt"],
    nr: [1, 2, 11, 20],
    fc: 19
  }, {
    lngs: ["or"],
    nr: [2, 1],
    fc: 2
  }, {
    lngs: ["ro"],
    nr: [1, 2, 20],
    fc: 20
  }, {
    lngs: ["sl"],
    nr: [5, 1, 2, 3],
    fc: 21
  }, {
    lngs: ["he", "iw"],
    nr: [1, 2, 20, 21],
    fc: 22
  }];
  let _rulesPluralsTypes = {
    1: function(n2) {
      return Number(n2 > 1);
    },
    2: function(n2) {
      return Number(n2 != 1);
    },
    3: function(n2) {
      return 0;
    },
    4: function(n2) {
      return Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2);
    },
    5: function(n2) {
      return Number(n2 == 0 ? 0 : n2 == 1 ? 1 : n2 == 2 ? 2 : n2 % 100 >= 3 && n2 % 100 <= 10 ? 3 : n2 % 100 >= 11 ? 4 : 5);
    },
    6: function(n2) {
      return Number(n2 == 1 ? 0 : n2 >= 2 && n2 <= 4 ? 1 : 2);
    },
    7: function(n2) {
      return Number(n2 == 1 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2);
    },
    8: function(n2) {
      return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 != 8 && n2 != 11 ? 2 : 3);
    },
    9: function(n2) {
      return Number(n2 >= 2);
    },
    10: function(n2) {
      return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 < 7 ? 2 : n2 < 11 ? 3 : 4);
    },
    11: function(n2) {
      return Number(n2 == 1 || n2 == 11 ? 0 : n2 == 2 || n2 == 12 ? 1 : n2 > 2 && n2 < 20 ? 2 : 3);
    },
    12: function(n2) {
      return Number(n2 % 10 != 1 || n2 % 100 == 11);
    },
    13: function(n2) {
      return Number(n2 !== 0);
    },
    14: function(n2) {
      return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 == 3 ? 2 : 3);
    },
    15: function(n2) {
      return Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 % 10 >= 2 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2);
    },
    16: function(n2) {
      return Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 !== 0 ? 1 : 2);
    },
    17: function(n2) {
      return Number(n2 == 1 || n2 % 10 == 1 && n2 % 100 != 11 ? 0 : 1);
    },
    18: function(n2) {
      return Number(n2 == 0 ? 0 : n2 == 1 ? 1 : 2);
    },
    19: function(n2) {
      return Number(n2 == 1 ? 0 : n2 == 0 || n2 % 100 > 1 && n2 % 100 < 11 ? 1 : n2 % 100 > 10 && n2 % 100 < 20 ? 2 : 3);
    },
    20: function(n2) {
      return Number(n2 == 1 ? 0 : n2 == 0 || n2 % 100 > 0 && n2 % 100 < 20 ? 1 : 2);
    },
    21: function(n2) {
      return Number(n2 % 100 == 1 ? 1 : n2 % 100 == 2 ? 2 : n2 % 100 == 3 || n2 % 100 == 4 ? 3 : 0);
    },
    22: function(n2) {
      return Number(n2 == 1 ? 0 : n2 == 2 ? 1 : (n2 < 0 || n2 > 10) && n2 % 10 == 0 ? 2 : 3);
    }
  };
  const nonIntlVersions = ["v1", "v2", "v3"];
  const intlVersions = ["v4"];
  const suffixesOrder = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
  };
  function createRules() {
    const rules2 = {};
    sets.forEach((set) => {
      set.lngs.forEach((l2) => {
        rules2[l2] = {
          numbers: set.nr,
          plurals: _rulesPluralsTypes[set.fc]
        };
      });
    });
    return rules2;
  }
  class PluralResolver {
    constructor(languageUtils) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.languageUtils = languageUtils;
      this.options = options;
      this.logger = baseLogger.create("pluralResolver");
      if ((!this.options.compatibilityJSON || intlVersions.includes(this.options.compatibilityJSON)) && (typeof Intl === "undefined" || !Intl.PluralRules)) {
        this.options.compatibilityJSON = "v3";
        this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.");
      }
      this.rules = createRules();
    }
    addRule(lng, obj) {
      this.rules[lng] = obj;
    }
    getRule(code2) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this.shouldUseIntlApi()) {
        try {
          return new Intl.PluralRules(getCleanedCode(code2 === "dev" ? "en" : code2), {
            type: options.ordinal ? "ordinal" : "cardinal"
          });
        } catch (err) {
          return;
        }
      }
      return this.rules[code2] || this.rules[this.languageUtils.getLanguagePartFromCode(code2)];
    }
    needsPlural(code2) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const rule = this.getRule(code2, options);
      if (this.shouldUseIntlApi()) {
        return rule && rule.resolvedOptions().pluralCategories.length > 1;
      }
      return rule && rule.numbers.length > 1;
    }
    getPluralFormsOfKey(code2, key) {
      let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.getSuffixes(code2, options).map((suffix) => `${key}${suffix}`);
    }
    getSuffixes(code2) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const rule = this.getRule(code2, options);
      if (!rule) {
        return [];
      }
      if (this.shouldUseIntlApi()) {
        return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
      }
      return rule.numbers.map((number) => this.getSuffix(code2, number, options));
    }
    getSuffix(code2, count) {
      let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      const rule = this.getRule(code2, options);
      if (rule) {
        if (this.shouldUseIntlApi()) {
          return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
        }
        return this.getSuffixRetroCompatible(rule, count);
      }
      this.logger.warn(`no plural rule found for: ${code2}`);
      return "";
    }
    getSuffixRetroCompatible(rule, count) {
      const idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
      let suffix = rule.numbers[idx];
      if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        if (suffix === 2) {
          suffix = "plural";
        } else if (suffix === 1) {
          suffix = "";
        }
      }
      const returnSuffix = () => this.options.prepend && suffix.toString() ? this.options.prepend + suffix.toString() : suffix.toString();
      if (this.options.compatibilityJSON === "v1") {
        if (suffix === 1)
          return "";
        if (typeof suffix === "number")
          return `_plural_${suffix.toString()}`;
        return returnSuffix();
      } else if (this.options.compatibilityJSON === "v2") {
        return returnSuffix();
      } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        return returnSuffix();
      }
      return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
    }
    shouldUseIntlApi() {
      return !nonIntlVersions.includes(this.options.compatibilityJSON);
    }
  }
  function deepFindWithDefaults(data, defaultData, key) {
    let keySeparator = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".";
    let ignoreJSONStructure = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
    let path = getPathWithDefaults(data, defaultData, key);
    if (!path && ignoreJSONStructure && typeof key === "string") {
      path = deepFind(data, key, keySeparator);
      if (path === void 0)
        path = deepFind(defaultData, key, keySeparator);
    }
    return path;
  }
  class Interpolator {
    constructor() {
      let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.logger = baseLogger.create("interpolator");
      this.options = options;
      this.format = options.interpolation && options.interpolation.format || ((value2) => value2);
      this.init(options);
    }
    init() {
      let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!options.interpolation)
        options.interpolation = {
          escapeValue: true
        };
      const iOpts = options.interpolation;
      this.escape = iOpts.escape !== void 0 ? iOpts.escape : escape;
      this.escapeValue = iOpts.escapeValue !== void 0 ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== void 0 ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || "{{";
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || "}}";
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
      this.unescapePrefix = iOpts.unescapeSuffix ? "" : iOpts.unescapePrefix || "-";
      this.unescapeSuffix = this.unescapePrefix ? "" : iOpts.unescapeSuffix || "";
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape("$t(");
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(")");
      this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ",";
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1e3;
      this.alwaysFormat = iOpts.alwaysFormat !== void 0 ? iOpts.alwaysFormat : false;
      this.resetRegExp();
    }
    reset() {
      if (this.options)
        this.init(this.options);
    }
    resetRegExp() {
      const getOrResetRegExp = (existingRegExp, pattern) => {
        if (existingRegExp && existingRegExp.source === pattern) {
          existingRegExp.lastIndex = 0;
          return existingRegExp;
        }
        return new RegExp(pattern, "g");
      };
      this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
      this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
      this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
    }
    interpolate(str, data, lng, options) {
      let match;
      let value2;
      let replaces;
      const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      function regexSafe(val) {
        return val.replace(/\$/g, "$$$$");
      }
      const handleFormat = (key) => {
        if (key.indexOf(this.formatSeparator) < 0) {
          const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat ? this.format(path, void 0, lng, {
            ...options,
            ...data,
            interpolationkey: key
          }) : path;
        }
        const p2 = key.split(this.formatSeparator);
        const k2 = p2.shift().trim();
        const f2 = p2.join(this.formatSeparator).trim();
        return this.format(deepFindWithDefaults(data, defaultData, k2, this.options.keySeparator, this.options.ignoreJSONStructure), f2, lng, {
          ...options,
          ...data,
          interpolationkey: k2
        });
      };
      this.resetRegExp();
      const missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      const skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
      const todos = [{
        regex: this.regexpUnescape,
        safeValue: (val) => regexSafe(val)
      }, {
        regex: this.regexp,
        safeValue: (val) => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
      }];
      todos.forEach((todo) => {
        replaces = 0;
        while (match = todo.regex.exec(str)) {
          const matchedVar = match[1].trim();
          value2 = handleFormat(matchedVar);
          if (value2 === void 0) {
            if (typeof missingInterpolationHandler === "function") {
              const temp = missingInterpolationHandler(str, match, options);
              value2 = typeof temp === "string" ? temp : "";
            } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
              value2 = "";
            } else if (skipOnVariables) {
              value2 = match[0];
              continue;
            } else {
              this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
              value2 = "";
            }
          } else if (typeof value2 !== "string" && !this.useRawValueToEscape) {
            value2 = makeString(value2);
          }
          const safeValue = todo.safeValue(value2);
          str = str.replace(match[0], safeValue);
          if (skipOnVariables) {
            todo.regex.lastIndex += value2.length;
            todo.regex.lastIndex -= match[0].length;
          } else {
            todo.regex.lastIndex = 0;
          }
          replaces++;
          if (replaces >= this.maxReplaces) {
            break;
          }
        }
      });
      return str;
    }
    nest(str, fc2) {
      let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      let match;
      let value2;
      let clonedOptions;
      function handleHasOptions(key, inheritedOptions) {
        const sep = this.nestingOptionsSeparator;
        if (key.indexOf(sep) < 0)
          return key;
        const c2 = key.split(new RegExp(`${sep}[ ]*{`));
        let optionsString = `{${c2[1]}`;
        key = c2[0];
        optionsString = this.interpolate(optionsString, clonedOptions);
        const matchedSingleQuotes = optionsString.match(/'/g);
        const matchedDoubleQuotes = optionsString.match(/"/g);
        if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
          optionsString = optionsString.replace(/'/g, '"');
        }
        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions)
            clonedOptions = {
              ...inheritedOptions,
              ...clonedOptions
            };
        } catch (e2) {
          this.logger.warn(`failed parsing options string in nesting for key ${key}`, e2);
          return `${key}${sep}${optionsString}`;
        }
        delete clonedOptions.defaultValue;
        return key;
      }
      while (match = this.nestingRegexp.exec(str)) {
        let formatters = [];
        clonedOptions = {
          ...options
        };
        clonedOptions = clonedOptions.replace && typeof clonedOptions.replace !== "string" ? clonedOptions.replace : clonedOptions;
        clonedOptions.applyPostProcessor = false;
        delete clonedOptions.defaultValue;
        let doReduce = false;
        if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
          const r2 = match[1].split(this.formatSeparator).map((elem) => elem.trim());
          match[1] = r2.shift();
          formatters = r2;
          doReduce = true;
        }
        value2 = fc2(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
        if (value2 && match[0] === str && typeof value2 !== "string")
          return value2;
        if (typeof value2 !== "string")
          value2 = makeString(value2);
        if (!value2) {
          this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
          value2 = "";
        }
        if (doReduce) {
          value2 = formatters.reduce((v2, f2) => this.format(v2, f2, options.lng, {
            ...options,
            interpolationkey: match[1].trim()
          }), value2.trim());
        }
        str = str.replace(match[0], value2);
        this.regexp.lastIndex = 0;
      }
      return str;
    }
  }
  function parseFormatStr(formatStr) {
    let formatName = formatStr.toLowerCase().trim();
    const formatOptions = {};
    if (formatStr.indexOf("(") > -1) {
      const p2 = formatStr.split("(");
      formatName = p2[0].toLowerCase().trim();
      const optStr = p2[1].substring(0, p2[1].length - 1);
      if (formatName === "currency" && optStr.indexOf(":") < 0) {
        if (!formatOptions.currency)
          formatOptions.currency = optStr.trim();
      } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
        if (!formatOptions.range)
          formatOptions.range = optStr.trim();
      } else {
        const opts = optStr.split(";");
        opts.forEach((opt) => {
          if (!opt)
            return;
          const [key, ...rest] = opt.split(":");
          const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
          if (!formatOptions[key.trim()])
            formatOptions[key.trim()] = val;
          if (val === "false")
            formatOptions[key.trim()] = false;
          if (val === "true")
            formatOptions[key.trim()] = true;
          if (!isNaN(val))
            formatOptions[key.trim()] = parseInt(val, 10);
        });
      }
    }
    return {
      formatName,
      formatOptions
    };
  }
  function createCachedFormatter(fn) {
    const cache2 = {};
    return function invokeFormatter(val, lng, options) {
      const key = lng + JSON.stringify(options);
      let formatter = cache2[key];
      if (!formatter) {
        formatter = fn(getCleanedCode(lng), options);
        cache2[key] = formatter;
      }
      return formatter(val);
    };
  }
  class Formatter {
    constructor() {
      let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.logger = baseLogger.create("formatter");
      this.options = options;
      this.formats = {
        number: createCachedFormatter((lng, opt) => {
          const formatter = new Intl.NumberFormat(lng, {
            ...opt
          });
          return (val) => formatter.format(val);
        }),
        currency: createCachedFormatter((lng, opt) => {
          const formatter = new Intl.NumberFormat(lng, {
            ...opt,
            style: "currency"
          });
          return (val) => formatter.format(val);
        }),
        datetime: createCachedFormatter((lng, opt) => {
          const formatter = new Intl.DateTimeFormat(lng, {
            ...opt
          });
          return (val) => formatter.format(val);
        }),
        relativetime: createCachedFormatter((lng, opt) => {
          const formatter = new Intl.RelativeTimeFormat(lng, {
            ...opt
          });
          return (val) => formatter.format(val, opt.range || "day");
        }),
        list: createCachedFormatter((lng, opt) => {
          const formatter = new Intl.ListFormat(lng, {
            ...opt
          });
          return (val) => formatter.format(val);
        })
      };
      this.init(options);
    }
    init(services) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      };
      const iOpts = options.interpolation;
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
    }
    add(name2, fc2) {
      this.formats[name2.toLowerCase().trim()] = fc2;
    }
    addCached(name2, fc2) {
      this.formats[name2.toLowerCase().trim()] = createCachedFormatter(fc2);
    }
    format(value2, format, lng) {
      let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      const formats = format.split(this.formatSeparator);
      const result = formats.reduce((mem, f2) => {
        const {
          formatName,
          formatOptions
        } = parseFormatStr(f2);
        if (this.formats[formatName]) {
          let formatted = mem;
          try {
            const valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
            const l2 = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
            formatted = this.formats[formatName](mem, l2, {
              ...formatOptions,
              ...options,
              ...valOptions
            });
          } catch (error) {
            this.logger.warn(error);
          }
          return formatted;
        } else {
          this.logger.warn(`there was no format function for ${formatName}`);
        }
        return mem;
      }, value2);
      return result;
    }
  }
  function removePending(q2, name2) {
    if (q2.pending[name2] !== void 0) {
      delete q2.pending[name2];
      q2.pendingCount--;
    }
  }
  class Connector extends EventEmitter {
    constructor(backend, store, services) {
      let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      super();
      this.backend = backend;
      this.store = store;
      this.services = services;
      this.languageUtils = services.languageUtils;
      this.options = options;
      this.logger = baseLogger.create("backendConnector");
      this.waitingReads = [];
      this.maxParallelReads = options.maxParallelReads || 10;
      this.readingCalls = 0;
      this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
      this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
      this.state = {};
      this.queue = [];
      if (this.backend && this.backend.init) {
        this.backend.init(services, options.backend, options);
      }
    }
    queueLoad(languages, namespaces, options, callback) {
      const toLoad = {};
      const pending = {};
      const toLoadLanguages = {};
      const toLoadNamespaces = {};
      languages.forEach((lng) => {
        let hasAllNamespaces = true;
        namespaces.forEach((ns) => {
          const name2 = `${lng}|${ns}`;
          if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
            this.state[name2] = 2;
          } else if (this.state[name2] < 0)
            ;
          else if (this.state[name2] === 1) {
            if (pending[name2] === void 0)
              pending[name2] = true;
          } else {
            this.state[name2] = 1;
            hasAllNamespaces = false;
            if (pending[name2] === void 0)
              pending[name2] = true;
            if (toLoad[name2] === void 0)
              toLoad[name2] = true;
            if (toLoadNamespaces[ns] === void 0)
              toLoadNamespaces[ns] = true;
          }
        });
        if (!hasAllNamespaces)
          toLoadLanguages[lng] = true;
      });
      if (Object.keys(toLoad).length || Object.keys(pending).length) {
        this.queue.push({
          pending,
          pendingCount: Object.keys(pending).length,
          loaded: {},
          errors: [],
          callback
        });
      }
      return {
        toLoad: Object.keys(toLoad),
        pending: Object.keys(pending),
        toLoadLanguages: Object.keys(toLoadLanguages),
        toLoadNamespaces: Object.keys(toLoadNamespaces)
      };
    }
    loaded(name2, err, data) {
      const s2 = name2.split("|");
      const lng = s2[0];
      const ns = s2[1];
      if (err)
        this.emit("failedLoading", lng, ns, err);
      if (data) {
        this.store.addResourceBundle(lng, ns, data, void 0, void 0, {
          skipCopy: true
        });
      }
      this.state[name2] = err ? -1 : 2;
      const loaded = {};
      this.queue.forEach((q2) => {
        pushPath(q2.loaded, [lng], ns);
        removePending(q2, name2);
        if (err)
          q2.errors.push(err);
        if (q2.pendingCount === 0 && !q2.done) {
          Object.keys(q2.loaded).forEach((l2) => {
            if (!loaded[l2])
              loaded[l2] = {};
            const loadedKeys = q2.loaded[l2];
            if (loadedKeys.length) {
              loadedKeys.forEach((n2) => {
                if (loaded[l2][n2] === void 0)
                  loaded[l2][n2] = true;
              });
            }
          });
          q2.done = true;
          if (q2.errors.length) {
            q2.callback(q2.errors);
          } else {
            q2.callback();
          }
        }
      });
      this.emit("loaded", loaded);
      this.queue = this.queue.filter((q2) => !q2.done);
    }
    read(lng, ns, fcName) {
      let tried = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
      let wait = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout;
      let callback = arguments.length > 5 ? arguments[5] : void 0;
      if (!lng.length)
        return callback(null, {});
      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng,
          ns,
          fcName,
          tried,
          wait,
          callback
        });
        return;
      }
      this.readingCalls++;
      const resolver = (err, data) => {
        this.readingCalls--;
        if (this.waitingReads.length > 0) {
          const next = this.waitingReads.shift();
          this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
        }
        if (err && data && tried < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }
        callback(err, data);
      };
      const fc2 = this.backend[fcName].bind(this.backend);
      if (fc2.length === 2) {
        try {
          const r2 = fc2(lng, ns);
          if (r2 && typeof r2.then === "function") {
            r2.then((data) => resolver(null, data)).catch(resolver);
          } else {
            resolver(null, r2);
          }
        } catch (err) {
          resolver(err);
        }
        return;
      }
      return fc2(lng, ns, resolver);
    }
    prepareLoading(languages, namespaces) {
      let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      let callback = arguments.length > 3 ? arguments[3] : void 0;
      if (!this.backend) {
        this.logger.warn("No backend was added via i18next.use. Will not load resources.");
        return callback && callback();
      }
      if (typeof languages === "string")
        languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === "string")
        namespaces = [namespaces];
      const toLoad = this.queueLoad(languages, namespaces, options, callback);
      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length)
          callback();
        return null;
      }
      toLoad.toLoad.forEach((name2) => {
        this.loadOne(name2);
      });
    }
    load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
    reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
    loadOne(name2) {
      let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      const s2 = name2.split("|");
      const lng = s2[0];
      const ns = s2[1];
      this.read(lng, ns, "read", void 0, void 0, (err, data) => {
        if (err)
          this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
        if (!err && data)
          this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
        this.loaded(name2, err, data);
      });
    }
    saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
      let clb = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
      };
      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
        this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        return;
      }
      if (key === void 0 || key === null || key === "")
        return;
      if (this.backend && this.backend.create) {
        const opts = {
          ...options,
          isUpdate
        };
        const fc2 = this.backend.create.bind(this.backend);
        if (fc2.length < 6) {
          try {
            let r2;
            if (fc2.length === 5) {
              r2 = fc2(languages, namespace, key, fallbackValue, opts);
            } else {
              r2 = fc2(languages, namespace, key, fallbackValue);
            }
            if (r2 && typeof r2.then === "function") {
              r2.then((data) => clb(null, data)).catch(clb);
            } else {
              clb(null, r2);
            }
          } catch (err) {
            clb(err);
          }
        } else {
          fc2(languages, namespace, key, fallbackValue, clb, opts);
        }
      }
      if (!languages || !languages[0])
        return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }
  function get() {
    return {
      debug: false,
      initImmediate: true,
      ns: ["translation"],
      defaultNS: ["translation"],
      fallbackLng: ["dev"],
      fallbackNS: false,
      supportedLngs: false,
      nonExplicitSupportedLngs: false,
      load: "all",
      preload: false,
      simplifyPluralSuffix: true,
      keySeparator: ".",
      nsSeparator: ":",
      pluralSeparator: "_",
      contextSeparator: "_",
      partialBundledLanguages: false,
      saveMissing: false,
      updateMissing: false,
      saveMissingTo: "fallback",
      saveMissingPlurals: true,
      missingKeyHandler: false,
      missingInterpolationHandler: false,
      postProcess: false,
      postProcessPassResolved: false,
      returnNull: false,
      returnEmptyString: true,
      returnObjects: false,
      joinArrays: false,
      returnedObjectHandler: false,
      parseMissingKeyHandler: false,
      appendNamespaceToMissingKey: false,
      appendNamespaceToCIMode: false,
      overloadTranslationOptionHandler: function handle(args) {
        let ret = {};
        if (typeof args[1] === "object")
          ret = args[1];
        if (typeof args[1] === "string")
          ret.defaultValue = args[1];
        if (typeof args[2] === "string")
          ret.tDescription = args[2];
        if (typeof args[2] === "object" || typeof args[3] === "object") {
          const options = args[3] || args[2];
          Object.keys(options).forEach((key) => {
            ret[key] = options[key];
          });
        }
        return ret;
      },
      interpolation: {
        escapeValue: true,
        format: (value2) => value2,
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: true
      }
    };
  }
  function transformOptions(options) {
    if (typeof options.ns === "string")
      options.ns = [options.ns];
    if (typeof options.fallbackLng === "string")
      options.fallbackLng = [options.fallbackLng];
    if (typeof options.fallbackNS === "string")
      options.fallbackNS = [options.fallbackNS];
    if (options.supportedLngs && options.supportedLngs.indexOf("cimode") < 0) {
      options.supportedLngs = options.supportedLngs.concat(["cimode"]);
    }
    return options;
  }
  function noop() {
  }
  function bindMemberFunctions(inst) {
    const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
    mems.forEach((mem) => {
      if (typeof inst[mem] === "function") {
        inst[mem] = inst[mem].bind(inst);
      }
    });
  }
  class I18n extends EventEmitter {
    constructor() {
      let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      let callback = arguments.length > 1 ? arguments[1] : void 0;
      super();
      this.options = transformOptions(options);
      this.services = {};
      this.logger = baseLogger;
      this.modules = {
        external: []
      };
      bindMemberFunctions(this);
      if (callback && !this.isInitialized && !options.isClone) {
        if (!this.options.initImmediate) {
          this.init(options, callback);
          return this;
        }
        setTimeout(() => {
          this.init(options, callback);
        }, 0);
      }
    }
    init() {
      var _this = this;
      let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      let callback = arguments.length > 1 ? arguments[1] : void 0;
      this.isInitializing = true;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      if (!options.defaultNS && options.defaultNS !== false && options.ns) {
        if (typeof options.ns === "string") {
          options.defaultNS = options.ns;
        } else if (options.ns.indexOf("translation") < 0) {
          options.defaultNS = options.ns[0];
        }
      }
      const defOpts = get();
      this.options = {
        ...defOpts,
        ...this.options,
        ...transformOptions(options)
      };
      if (this.options.compatibilityAPI !== "v1") {
        this.options.interpolation = {
          ...defOpts.interpolation,
          ...this.options.interpolation
        };
      }
      if (options.keySeparator !== void 0) {
        this.options.userDefinedKeySeparator = options.keySeparator;
      }
      if (options.nsSeparator !== void 0) {
        this.options.userDefinedNsSeparator = options.nsSeparator;
      }
      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject)
          return null;
        if (typeof ClassOrObject === "function")
          return new ClassOrObject();
        return ClassOrObject;
      }
      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }
        let formatter;
        if (this.modules.formatter) {
          formatter = this.modules.formatter;
        } else if (typeof Intl !== "undefined") {
          formatter = Formatter;
        }
        const lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        const s2 = this.services;
        s2.logger = baseLogger;
        s2.resourceStore = this.store;
        s2.languageUtils = lu;
        s2.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });
        if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
          s2.formatter = createClassOnDemand(formatter);
          s2.formatter.init(s2, this.options);
          this.options.interpolation.format = s2.formatter.format.bind(s2.formatter);
        }
        s2.interpolator = new Interpolator(this.options);
        s2.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s2.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s2.resourceStore, s2, this.options);
        s2.backendConnector.on("*", function(event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          _this.emit(event, ...args);
        });
        if (this.modules.languageDetector) {
          s2.languageDetector = createClassOnDemand(this.modules.languageDetector);
          if (s2.languageDetector.init)
            s2.languageDetector.init(s2, this.options.detection, this.options);
        }
        if (this.modules.i18nFormat) {
          s2.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s2.i18nFormat.init)
            s2.i18nFormat.init(this);
        }
        this.translator = new Translator(this.services, this.options);
        this.translator.on("*", function(event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          _this.emit(event, ...args);
        });
        this.modules.external.forEach((m2) => {
          if (m2.init)
            m2.init(this);
        });
      }
      this.format = this.options.interpolation.format;
      if (!callback)
        callback = noop;
      if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        if (codes.length > 0 && codes[0] !== "dev")
          this.options.lng = codes[0];
      }
      if (!this.services.languageDetector && !this.options.lng) {
        this.logger.warn("init: no languageDetector is used and no lng is defined");
      }
      const storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
      storeApi.forEach((fcName) => {
        this[fcName] = function() {
          return _this.store[fcName](...arguments);
        };
      });
      const storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      storeApiChained.forEach((fcName) => {
        this[fcName] = function() {
          _this.store[fcName](...arguments);
          return _this;
        };
      });
      const deferred = defer();
      const load = () => {
        const finish = (err, t2) => {
          this.isInitializing = false;
          if (this.isInitialized && !this.initializedStoreOnce)
            this.logger.warn("init: i18next is already initialized. You should call init just once!");
          this.isInitialized = true;
          if (!this.options.isClone)
            this.logger.log("initialized", this.options);
          this.emit("initialized", this.options);
          deferred.resolve(t2);
          callback(err, t2);
        };
        if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
          return finish(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, finish);
      };
      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }
      return deferred;
    }
    loadResources(language) {
      let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
      let usedCallback = callback;
      const usedLng = typeof language === "string" ? language : this.language;
      if (typeof language === "function")
        usedCallback = language;
      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (usedLng && usedLng.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
          return usedCallback();
        const toLoad = [];
        const append = (lng) => {
          if (!lng)
            return;
          if (lng === "cimode")
            return;
          const lngs = this.services.languageUtils.toResolveHierarchy(lng);
          lngs.forEach((l2) => {
            if (l2 === "cimode")
              return;
            if (toLoad.indexOf(l2) < 0)
              toLoad.push(l2);
          });
        };
        if (!usedLng) {
          const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach((l2) => append(l2));
        } else {
          append(usedLng);
        }
        if (this.options.preload) {
          this.options.preload.forEach((l2) => append(l2));
        }
        this.services.backendConnector.load(toLoad, this.options.ns, (e2) => {
          if (!e2 && !this.resolvedLanguage && this.language)
            this.setResolvedLanguage(this.language);
          usedCallback(e2);
        });
      } else {
        usedCallback(null);
      }
    }
    reloadResources(lngs, ns, callback) {
      const deferred = defer();
      if (!lngs)
        lngs = this.languages;
      if (!ns)
        ns = this.options.ns;
      if (!callback)
        callback = noop;
      this.services.backendConnector.reload(lngs, ns, (err) => {
        deferred.resolve();
        callback(err);
      });
      return deferred;
    }
    use(module) {
      if (!module)
        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
      if (!module.type)
        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
      if (module.type === "backend") {
        this.modules.backend = module;
      }
      if (module.type === "logger" || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }
      if (module.type === "languageDetector") {
        this.modules.languageDetector = module;
      }
      if (module.type === "i18nFormat") {
        this.modules.i18nFormat = module;
      }
      if (module.type === "postProcessor") {
        postProcessor.addPostProcessor(module);
      }
      if (module.type === "formatter") {
        this.modules.formatter = module;
      }
      if (module.type === "3rdParty") {
        this.modules.external.push(module);
      }
      return this;
    }
    setResolvedLanguage(l2) {
      if (!l2 || !this.languages)
        return;
      if (["cimode", "dev"].indexOf(l2) > -1)
        return;
      for (let li2 = 0; li2 < this.languages.length; li2++) {
        const lngInLngs = this.languages[li2];
        if (["cimode", "dev"].indexOf(lngInLngs) > -1)
          continue;
        if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
          this.resolvedLanguage = lngInLngs;
          break;
        }
      }
    }
    changeLanguage(lng, callback) {
      var _this2 = this;
      this.isLanguageChangingTo = lng;
      const deferred = defer();
      this.emit("languageChanging", lng);
      const setLngProps = (l2) => {
        this.language = l2;
        this.languages = this.services.languageUtils.toResolveHierarchy(l2);
        this.resolvedLanguage = void 0;
        this.setResolvedLanguage(l2);
      };
      const done = (err, l2) => {
        if (l2) {
          setLngProps(l2);
          this.translator.changeLanguage(l2);
          this.isLanguageChangingTo = void 0;
          this.emit("languageChanged", l2);
          this.logger.log("languageChanged", l2);
        } else {
          this.isLanguageChangingTo = void 0;
        }
        deferred.resolve(function() {
          return _this2.t(...arguments);
        });
        if (callback)
          callback(err, function() {
            return _this2.t(...arguments);
          });
      };
      const setLng = (lngs) => {
        if (!lng && !lngs && this.services.languageDetector)
          lngs = [];
        const l2 = typeof lngs === "string" ? lngs : this.services.languageUtils.getBestMatchFromCodes(lngs);
        if (l2) {
          if (!this.language) {
            setLngProps(l2);
          }
          if (!this.translator.language)
            this.translator.changeLanguage(l2);
          if (this.services.languageDetector && this.services.languageDetector.cacheUserLanguage)
            this.services.languageDetector.cacheUserLanguage(l2);
        }
        this.loadResources(l2, (err) => {
          done(err, l2);
        });
      };
      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        if (this.services.languageDetector.detect.length === 0) {
          this.services.languageDetector.detect().then(setLng);
        } else {
          this.services.languageDetector.detect(setLng);
        }
      } else {
        setLng(lng);
      }
      return deferred;
    }
    getFixedT(lng, ns, keyPrefix) {
      var _this3 = this;
      const fixedT = function(key, opts) {
        let options;
        if (typeof opts !== "object") {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }
          options = _this3.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = {
            ...opts
          };
        }
        options.lng = options.lng || fixedT.lng;
        options.lngs = options.lngs || fixedT.lngs;
        options.ns = options.ns || fixedT.ns;
        options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
        const keySeparator = _this3.options.keySeparator || ".";
        let resultKey;
        if (options.keyPrefix && Array.isArray(key)) {
          resultKey = key.map((k2) => `${options.keyPrefix}${keySeparator}${k2}`);
        } else {
          resultKey = options.keyPrefix ? `${options.keyPrefix}${keySeparator}${key}` : key;
        }
        return _this3.t(resultKey, options);
      };
      if (typeof lng === "string") {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }
      fixedT.ns = ns;
      fixedT.keyPrefix = keyPrefix;
      return fixedT;
    }
    t() {
      return this.translator && this.translator.translate(...arguments);
    }
    exists() {
      return this.translator && this.translator.exists(...arguments);
    }
    setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
    hasLoadedNamespace(ns) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.isInitialized) {
        this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
        return false;
      }
      if (!this.languages || !this.languages.length) {
        this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
        return false;
      }
      const lng = options.lng || this.resolvedLanguage || this.languages[0];
      const fallbackLng = this.options ? this.options.fallbackLng : false;
      const lastLng = this.languages[this.languages.length - 1];
      if (lng.toLowerCase() === "cimode")
        return true;
      const loadNotPending = (l2, n2) => {
        const loadState = this.services.backendConnector.state[`${l2}|${n2}`];
        return loadState === -1 || loadState === 2;
      };
      if (options.precheck) {
        const preResult = options.precheck(this, loadNotPending);
        if (preResult !== void 0)
          return preResult;
      }
      if (this.hasResourceBundle(lng, ns))
        return true;
      if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages)
        return true;
      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns)))
        return true;
      return false;
    }
    loadNamespaces(ns, callback) {
      const deferred = defer();
      if (!this.options.ns) {
        if (callback)
          callback();
        return Promise.resolve();
      }
      if (typeof ns === "string")
        ns = [ns];
      ns.forEach((n2) => {
        if (this.options.ns.indexOf(n2) < 0)
          this.options.ns.push(n2);
      });
      this.loadResources((err) => {
        deferred.resolve();
        if (callback)
          callback(err);
      });
      return deferred;
    }
    loadLanguages(lngs, callback) {
      const deferred = defer();
      if (typeof lngs === "string")
        lngs = [lngs];
      const preloaded = this.options.preload || [];
      const newLngs = lngs.filter((lng) => preloaded.indexOf(lng) < 0);
      if (!newLngs.length) {
        if (callback)
          callback();
        return Promise.resolve();
      }
      this.options.preload = preloaded.concat(newLngs);
      this.loadResources((err) => {
        deferred.resolve();
        if (callback)
          callback(err);
      });
      return deferred;
    }
    dir(lng) {
      if (!lng)
        lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
      if (!lng)
        return "rtl";
      const rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
      const languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
      return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
    static createInstance() {
      let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      let callback = arguments.length > 1 ? arguments[1] : void 0;
      return new I18n(options, callback);
    }
    cloneInstance() {
      let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
      const forkResourceStore = options.forkResourceStore;
      if (forkResourceStore)
        delete options.forkResourceStore;
      const mergedOptions = {
        ...this.options,
        ...options,
        ...{
          isClone: true
        }
      };
      const clone = new I18n(mergedOptions);
      if (options.debug !== void 0 || options.prefix !== void 0) {
        clone.logger = clone.logger.clone(options);
      }
      const membersToCopy = ["store", "services", "language"];
      membersToCopy.forEach((m2) => {
        clone[m2] = this[m2];
      });
      clone.services = {
        ...this.services
      };
      clone.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      if (forkResourceStore) {
        clone.store = new ResourceStore(this.store.data, mergedOptions);
        clone.services.resourceStore = clone.store;
      }
      clone.translator = new Translator(clone.services, mergedOptions);
      clone.translator.on("*", function(event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }
        clone.emit(event, ...args);
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = mergedOptions;
      clone.translator.backendConnector.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      return clone;
    }
    toJSON() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage
      };
    }
  }
  const instance = I18n.createInstance();
  instance.createInstance = I18n.createInstance;
  instance.createInstance;
  instance.dir;
  instance.init;
  instance.loadResources;
  instance.reloadResources;
  instance.use;
  instance.changeLanguage;
  instance.getFixedT;
  instance.t;
  instance.exists;
  instance.setDefaultNamespace;
  instance.hasLoadedNamespace;
  instance.loadNamespaces;
  instance.loadLanguages;
  instance.use(initReactI18next).init({
    resources: {
      en: {
        translation: {
          loginMessage: "Log in to 4Geeks to get performance statistics, access to our AI mentor, and many other benefits.",
          Run: "Run",
          "Run tests": "Run tests",
          "Running...": "Running...",
          "Login to use AI feedback": "Login to use AI feedback",
          "Get help from AI": "Rigobot AI Mentor",
          "To use the AI services you must login with your 4geeks account, and you have been accepted Rigobot": "To use the AI services you must login with your 4geeks account, and you have been accepted Rigobot",
          Password: "Password",
          "Don't have an account? ": "Don't have an account? ",
          "Sign up here!": "Sign up here!",
          "Loading...": "Loading...",
          submit: "Sign in",
          "Review model solution": "Review model solution",
          "Model solution not available": "Model solution not available",
          Reset: "Reset",
          "not available": "not available",
          "About LearnPack": "About LearnPack",
          "Feedback plays an important role when learning technical skills. ": "Feedback plays an important role when learning technical skills. ",
          "Learn why": "Learn why",
          "Are you sure you want to reset the exercise? You will lose all your progress": "Are you sure you want to reset the exercise? You will lose all your progress",
          Cancel: "Cancel",
          "Report a bug 🪰": "Report a bug 🪰",
          "Solved exercises": "Solved exercises",
          "Get feedback": "Get help",
          "Try again": "Try again",
          "Current version": "Current version",
          "Rigobot AI-Tutor": "Rigobot AI-Tutor",
          "Ask me something here": "Ask me something here",
          "This AI, currently in beta, serves as an educational tutor. It is not a substitute for professional instruction. Use at your own risk and confirm details with authoritative educational resources.": "This AI, currently in beta, serves as an educational tutor. It is not a substitute for professional instruction. Use at your own risk and confirm details with authoritative educational resources.",
          "Hello! I'm **Rigobot**, your friendly **AI Mentor**! \n\n I can help you if you feel stuck, ask me anything about this exercise!": "Hello! I'm **Rigobot**, your friendly **AI Mentor**! \n\n I can help you if you feel stuck, ask me anything about this exercise!",
          "The run button": "The run button",
          "No tests available": "No tests available",
          Succeded: "Succeded",
          "Socket disconnected!": "Socket disconnected!",
          Reload: "Reload",
          "Sorry, this error can happen for certain reasons.": "Sorry, this error can happen for certain reasons.",
          "The basic steps to troubleshoot this error are the following:": "The basic steps to troubleshoot this error are the following:",
          "Step 1": "Step 1",
          "Check that Learnpack is running in your terminal.": "Check that Learnpack is running in your terminal.",
          "Run: ": "Run: ",
          "Step 2": "Step 2",
          "If Learnpack is running but you still see this modal, reload the window:": "If Learnpack is running but you still see this modal, reload the window:",
          "Use this button to compile and run your code.": "Use this button to compile and run your code.",
          "Sometimes you want to start over, use this button to reset the code.": "Sometimes you want to start over, use this button to reset the code.",
          "Options to get feedback": "Options to get feedback",
          "Whithin this dropdown you can get feedback on your code.": "Whithin this dropdown you can get feedback on your code.",
          skip: "Skip",
          "incremental-test-alert": "You must successfully complete and test this step before continuing to the next one. Carefully read the instructions and ask for feedback if you need any help.",
          "agent-mismatch-error": "These exercises were designed to run in a different agent"
        }
      },
      es: {
        translation: {
          Run: "Ejecutar",
          "Running...": "Ejecutando...",
          "Run tests": "Ejecutar tests",
          "Login to use AI feedback": "Inicia sesión para obtener ayuda de la IA",
          "Get help from AI": "Obtener ayuda de Rigobot AI",
          "To use the AI services you must login with your 4geeks account, and you have been accepted Rigobot": "Para usar los servicios de IA, debes iniciar sesión con tu cuenta de 4geeks y haber aceptado los servicios de Rigobot",
          Password: "Contraseña",
          "Don't have an account? ": "¿No tienes una cuenta? ",
          "Sign up here!": "¡Regístrate aquí!",
          "Loading...": "Cargando...",
          "Review model solution": "Revisar solución modelo",
          submit: "Iniciar sesión",
          "Model solution not available": "Solución modelo no disponible",
          Reset: "Reiniciar",
          "not available": "no disponible",
          "About LearnPack": "Acerca de LearnPack",
          "Feedback plays an important role when learning technical skills. ": "La retroalimentación juega un papel importante al aprender habilidades técnicas. ",
          "Learn why": "Aprende por qué",
          "Are you sure you want to reset the exercise? You will lose all your progress": "¿Estás seguro de que quieres reiniciar el ejercicio? Perderás todo tu progreso",
          Cancel: "Cancelar",
          "Report a bug 🪰": "Reportar un error 🪰",
          "Solved exercises": "Ejercicios resueltos",
          "Get feedback": "Obtener ayuda",
          "Try again": "Intenta de nuevo",
          "Current version": "Versión actual",
          "Rigobot AI-Tutor": "Rigobot AI",
          "Ask me something here": "Escribe acá tus preguntas",
          "This AI, currently in beta, serves as an educational tutor. It is not a substitute for professional instruction. Use at your own risk and confirm details with authoritative educational resources.": "Esta IA, actualmente en beta, sirve como tutor educativo. No es un sustituto de la instrucción profesional. Úsalo bajo tu propio riesgo y confirma los detalles con recursos educativos autorizados.",
          "Hello! I'm **Rigobot**, your friendly **AI Mentor**! \n\n I can help you if you feel stuck, ask me anything about this exercise!": "¡Hola! Soy Rigobot, tu amigable Mentor AI, puedo ayudarte si te sientes atascado, ¡pregúntame cualquier cosa sobre este ejercicio!",
          "No tests available": "No hay tests disponibles",
          Succeded: "¡Perfecto!",
          "Socket disconnected!": "¡Conexión perdida!",
          Reload: "Recargar",
          "Sorry, this error can happen for certain reasons.": "Lo siento, este error puede ocurrir por ciertas razones.",
          "The basic steps to troubleshoot this error are the following:": "Los pasos básicos para solucionar este error son los siguientes:",
          "Step 1": "Paso 1",
          "Check that Learnpack is running in your terminal.": "Verifica que Learnpack esté corriendo en tu terminal.",
          "Run: ": "Ejecuta: ",
          "Step 2": "Paso 2",
          "If Learnpack is running but you still see this modal, reload the window:": "Si Learnpack está corriendo pero aún ves este modal, recarga la ventana:",
          "The run button": "El botón de ejecución",
          "Use this button to compile or run your code. The behavior depends of the files in the exercise directory. You can also use the shortcut `Ctrl` + `Enter` to run the code.": "Usa este botón para compilar o ejecutar tu código. El comportamiento depende de los archivos en el directorio del ejercicio. También puedes usar el atajo `Ctrl` + `Enter` para ejecutar el código.",
          "Options to get feedback": "Opciones para obtener ayuda",
          "Within this dropdown you can get feedback on your code. Let's try the available ones! You can use the following shortcuts:\n\n`Ctrl` + `Shift` + `Enter`: Run the tests if available. \n\n`Ctrl` + `Alt` + `Enter`: Open the chat with Rigobot": "Dentro de este menú desplegable puedes obtener ayuda con tu código. ¡Probemos las disponibles! Puedes usar los siguientes atajos:\n\n`Ctrl` + `Shift` + `Enter`: Ejecutar los tests si están disponibles. \n\n`Ctrl` + `Alt` + `Enter`: Abrir el chat con Rigobot",
          "Inside the sidebar you can go through the exercises and see your progress. Also you can report a bug.": "Dentro de la barra lateral puedes revisar los ejercicios y ver tu progreso. También puedes reportar un error.",
          "Open the sidebar": "Abrir la barra lateral",
          "Sometimes you want to start over, use this button to `reset` the code to its original state.": "A veces quieres empezar de nuevo, usa este botón para `reiniciar` el código a su estado original.",
          "Reset button": "Botón de reinicio",
          "Click on the flag to change the language.": "Haz clic en la bandera para cambiar el idioma.",
          "Welcome to LearnPack!": "¡Bienvenido a LearnPack!",
          "If you prefer, you can change the language!": "¡Si prefieres, puedes cambiar el idioma!",
          "This is a quick tutorial to help you get started. Click next to continue.": "Este es un tutorial rápido para ayudarte a comenzar. Haz clic en siguiente para continuar.",
          loginMessage: "Inicia session en 4Geeks para obtener estadisticas de tu desempeño, acceso al nuestro mentor AI y muchos otros beneficios.",
          skip: "Saltar",
          "incremental-test-alert": "Debes completar y probar con éxito este paso antes de continuar con el siguiente. Lee cuidadosamente las instrucciones y pide retroalimentación si necesitas ayuda.",
          "agent-mismatch-error": "Estos ejercicios fueron diseñados para ejecutarse en un agente diferente"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });
  const svgsLanguageMap = {
    es: svgs.spainFlag,
    us: svgs.usaFlag
  };
  function LanguageButton() {
    const { language } = useStore((state) => ({
      language: state.language
    }));
    reactExports.useEffect(() => {
      instance.changeLanguage(language);
    }, []);
    const [showDrop, setShowDropdown] = reactExports.useState(false);
    const toggleDrop = () => {
      setShowDropdown(!showDrop);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "language-component", className: "language-component", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SimpleButton,
        {
          action: toggleDrop,
          text: language,
          svg: svgsLanguageMap[language]
        }
      ),
      showDrop && /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageDropdown, { toggleDrop })
    ] }) });
  }
  const LanguageDropdown = ({ toggleDrop }) => {
    const { language, setLanguage, getCurrentExercise } = useStore((state) => ({
      language: state.language,
      setLanguage: state.setLanguage,
      getCurrentExercise: state.getCurrentExercise
    }));
    const languages = Object.keys(getCurrentExercise().translations);
    const changeLanguage = (lang) => {
      instance.changeLanguage(lang);
    };
    const setLang = (lang) => {
      setLanguage(lang);
      changeLanguage(lang);
      toggleDrop();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "language-dropdown", children: languages.map(
      (l2, index2) => l2 !== language ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLang(l2), children: [
        svgsLanguageMap[l2],
        l2
      ] }, index2) : null
    ) });
  };
  const LessonOptions = () => {
    const { currentExercisePosition, handlePositionChange, exercises } = useStore((state) => ({
      currentExercisePosition: state.currentExercisePosition,
      handlePositionChange: state.handlePositionChange,
      exercises: state.exercises
    }));
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lesson-options", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            disabled: currentExercisePosition === 0,
            onClick: () => handlePositionChange(currentExercisePosition - 1),
            children: svgs.prevArrowButton
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            disabled: currentExercisePosition === exercises.length - 1,
            onClick: () => handlePositionChange(currentExercisePosition + 1),
            children: svgs.nextArrowButton
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageButton, {}) })
    ] }) });
  };
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function BuildButton() {
    const { t: t2 } = useTranslation();
    const {
      currentExercisePosition,
      compilerSocket,
      buildbuttonText,
      setBuildButtonText,
      isBuildable,
      build,
      isTesteable,
      runExerciseTests
    } = useStore((state) => ({
      currentExercisePosition: state.currentExercisePosition,
      exercises: state.exercises,
      compilerSocket: state.compilerSocket,
      buildbuttonText: state.buildbuttonText,
      setBuildButtonText: state.setBuildButtonText,
      isBuildable: state.isBuildable,
      build: state.build,
      isTesteable: state.isTesteable,
      feedbackButtonProps: state.feedbackbuttonProps,
      runExerciseTests: state.runExerciseTests
    }));
    let compilerErrorHandler = debounce((data) => {
      setBuildButtonText(t2("Try again"), "bg-fail");
      const [icon, message] = getStatus("compiler-error");
      n.error(message, { icon });
    }, 100);
    let compilerSuccessHandler = debounce((data) => {
      const [icon, message] = getStatus("compiler-success");
      n.success(message, { icon });
      setBuildButtonText(t2("Run"), "bg-success");
    }, 100);
    reactExports.useEffect(() => {
      compilerSocket.onStatus("compiler-error", compilerErrorHandler);
      compilerSocket.onStatus("compiler-success", compilerSuccessHandler);
    }, [currentExercisePosition]);
    const runTests = () => {
      setBuildButtonText(t2("Running..."), "bg-blue");
      runExerciseTests({
        toast: true,
        setFeedbackButton: false,
        feedbackButtonText: t2("Running..."),
        targetButton: "build"
      });
    };
    const changeToTest = !isBuildable && isTesteable;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SimpleButton,
      {
        id: "build-button",
        text: t2(buildbuttonText.text),
        svg: svgs.buildIcon,
        extraClass: `pill bg-blue ${buildbuttonText.className}`,
        action: () => {
          changeToTest ? runTests() : build(t2("Running..."));
        },
        disabled: !isBuildable && !isTesteable
      }
    );
  }
  const FeedbackDropdown = ({
    toggleFeedbackVisibility
  }) => {
    const {
      compilerSocket,
      token,
      videoTutorial,
      isTesteable,
      setOpenedModals,
      runExerciseTests,
      bc_token,
      openLink,
      checkRigobotInvitation,
      hasSolution,
      getCurrentExercise
      // currentExercisePosition,
    } = useStore((state) => ({
      compilerSocket: state.compilerSocket,
      token: state.token,
      setFeedbackButtonProps: state.setFeedbackButtonProps,
      fetchExercises: state.fetchExercises,
      configObject: state.configObject,
      videoTutorial: state.videoTutorial,
      isTesteable: state.isTesteable,
      setOpenedModals: state.setOpenedModals,
      runExerciseTests: state.runExerciseTests,
      setTestResult: state.setTestResult,
      toastFromStatus: state.toastFromStatus,
      bc_token: state.bc_token,
      openLink: state.openLink,
      clearBcToken: state.clearBcToken,
      checkRigobotInvitation: state.checkRigobotInvitation,
      hasSolution: state.hasSolution,
      currentSolution: state.currentSolution,
      getCurrentExercise: state.getCurrentExercise,
      currentExercisePosition: state.currentExercisePosition
    }));
    const { t: t2 } = useTranslation();
    const runTests = () => {
      toggleFeedbackVisibility();
      runExerciseTests({
        toast: true,
        setFeedbackButton: true,
        feedbackButtonText: t2("Running..."),
        targetButton: "feedback"
      });
    };
    const openLoginModal = () => {
      setOpenedModals({ login: true });
      toggleFeedbackVisibility();
    };
    const redirectToVideo = () => {
      openLink(videoTutorial);
      toggleFeedbackVisibility();
    };
    const openLearnpackDocs = () => {
      const docsUrl = "https://4geeks.com/docs/learnpack";
      openLink(docsUrl);
      toggleFeedbackVisibility();
    };
    const showChat = () => {
      setOpenedModals({ chat: true });
      toggleFeedbackVisibility();
    };
    const rigoAccepted = async () => {
      checkRigobotInvitation();
    };
    const openSolutionFile = () => {
      const solutionFile = getCurrentExercise().files.find(
        (file) => file.name.includes("solution.hide")
      );
      const data = {
        exerciseSlug: getCurrentExercise().slug,
        files: [solutionFile.path]
      };
      compilerSocket.emit("open", data);
    };
    const startTour = () => {
      setOpenedModals({ tutorial: true });
      toggleFeedbackVisibility();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "feedback-dropdown", className: "feedback-dropdown", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SimpleButton,
        {
          svg: svgs.testIcon,
          text: isTesteable ? t2("Run tests") : t2("No tests available"),
          action: runTests,
          disabled: !isTesteable
        }
      ),
      Boolean(token) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        SimpleButton,
        {
          text: t2("Get help from AI"),
          svg: svgs.brainIcon,
          action: showChat
        }
      ) : bc_token ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SimpleButton,
        {
          svg: svgs.brainIcon,
          text: t2("Get help from AI"),
          action: rigoAccepted
        }
      ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        SimpleButton,
        {
          svg: svgs.fourGeeksIcon,
          text: t2("Login to use AI feedback"),
          action: openLoginModal
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SimpleButton,
        {
          text: hasSolution ? t2("Review model solution") : t2("Model solution not available"),
          svg: svgs.solutionIcon,
          disabled: !hasSolution,
          action: hasSolution ? openSolutionFile : () => {
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SimpleButton,
        {
          text: `Video tutorial ${videoTutorial ? "" : t2("not available")}`,
          disabled: !videoTutorial,
          svg: svgs.videoIcon,
          action: redirectToVideo
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SimpleButton,
        {
          text: t2("About LearnPack"),
          svg: svgs.fourGeeksIcon,
          action: openLearnpackDocs
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SimpleButton,
        {
          text: t2("Take LearnPack tour"),
          svg: svgs.fourGeeksIcon,
          action: startTour
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        t2("Feedback plays an important role when learning technical skills. "),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          OpenWindowLink,
          {
            text: t2("Learn why"),
            href: "https://4geeks.com/mastering-technical-knowledge#feedback-quality-and-frequency"
          }
        )
      ] })
    ] });
  };
  function FeedbackButton() {
    const feedbackbuttonProps = useStore((state) => state.feedbackbuttonProps);
    const { t: t2 } = useTranslation();
    const [showFeedback, setShowFeedback] = reactExports.useState(false);
    let hideFeedbackTimeout;
    const toggleFeedback = () => {
      setShowFeedback((prev2) => !prev2);
    };
    const handleMouseEnter = () => {
      clearTimeout(hideFeedbackTimeout);
      setShowFeedback(true);
    };
    const handleMouseLeave = () => {
      hideFeedbackTimeout = setTimeout(() => {
        setShowFeedback(false);
      }, 200);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        id: "feedback-button",
        className: "pos-relative feedback-dropdown-container",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SimpleButton,
            {
              text: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2(feedbackbuttonProps.text) }),
              svg: svgs.feedbackIcon,
              extraClass: `pill border-blue color-blue row-reverse ${feedbackbuttonProps.className}`,
              action: toggleFeedback
            }
          ),
          showFeedback && /* @__PURE__ */ jsxRuntimeExports.jsx(FeedbackDropdown, { toggleFeedbackVisibility: toggleFeedback })
        ]
      }
    );
  }
  function BugButton() {
    const { t: t2 } = useTranslation();
    const { currentExercisePosition, exercises, lessonTitle } = useStore((state) => ({
      currentExercisePosition: state.currentExercisePosition,
      exercises: state.exercises,
      lessonTitle: state.lessonTitle
      // compilerSocket: state.compilerSocket
    }));
    let defaultTitle = "Bug";
    if (currentExercisePosition != 0) {
      defaultTitle = `Bug in ${exercises[currentExercisePosition].slug}`;
    }
    const body = `Lesson: ${lessonTitle} %0D%0A
    %0D%0AExplain the problem %0D%0A
    %0D%0AProvide an image or example of the problem %0D%0A

    `;
    const url2 = `https://github.com/learnpack/learnpack/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=${defaultTitle}&body=${body}`;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(OpenWindowLink, { href: url2, text: t2("Report a bug 🪰") });
  }
  function ExercisesList({ closeSidebar }) {
    const { exercises } = useStore((state) => ({
      exercises: state.exercises
    }));
    return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "exercise-list", children: exercises.map((item, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExerciseCard, { ...item, closeSidebar }, index2)) });
  }
  function ExerciseCard({
    title,
    position,
    closeSidebar,
    graded,
    done
  }) {
    const { handlePositionChange } = useStore((state) => ({
      handlePositionChange: state.handlePositionChange
    }));
    const titlefy = (str) => {
      let arr = str.split("-");
      arr.shift();
      let result = arr.join(" ");
      result = result.charAt(0).toUpperCase() + result.slice(1);
      return result;
    };
    const getNameWithoutNumber = (str) => {
      return titlefy(str);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "li",
      {
        className: "exercise-card",
        onClick: () => {
          handlePositionChange(position);
          closeSidebar();
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "blue-circle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: title.split("-")[0] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: getNameWithoutNumber(title) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: graded && /* @__PURE__ */ jsxRuntimeExports.jsx(
            SimpleButton,
            {
              svg: done ? svgs.checkIcon : svgs.blankCircle,
              text: ""
            }
          ) })
        ]
      }
    );
  }
  const name = "learnpack-ai";
  const version$1 = "4.0.7";
  const scripts = {
    dev: "node src/utils/development.js --turn on && vite",
    build: "node src/utils/development.js --turn off && tsc && vite build && node bin/publish.js && node src/utils/createVersionsFile.js",
    "dev-build": "node src/utils/development.js --turn on && tsc && vite build",
    lint: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    preview: "vite preview",
    "compile-command": "tsc src/utils/development.ts && node src/utils/development.js --turn on"
  };
  const dependencies = {
    i18next: "^23.10.1",
    react: "^18.2.0",
    "react-dom": "^18.2.0",
    "react-gtm-module": "^2.0.11",
    "react-hot-toast": "^2.4.1",
    "react-i18next": "^14.1.0",
    remarkable: "^2.0.1",
    "remarkable-katex": "^1.2.1",
    "socket.io": "^4.7.2",
    "socket.io-client": "^4.7.2",
    zustand: "^4.4.1"
  };
  const devDependencies = {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@types/react-gtm-module": "^2.0.3",
    "@types/remarkable": "^2.0.3",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react-swc": "^3.3.2",
    archiver: "^6.0.1",
    eslint: "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    inquirer: "^9.2.12",
    typescript: "^5.0.2",
    vite: "^4.4.5"
  };
  const packageInfo = {
    name,
    "private": true,
    version: version$1,
    scripts,
    dependencies,
    devDependencies
  };
  const styles$2 = "";
  const version = packageInfo.version;
  let versionSections = version.split(".");
  versionSections[2] = String(parseInt(versionSections[2]) + 1);
  function Sidebar() {
    const { t: t2 } = useTranslation();
    const {
      numberOfExercises,
      solvedExercises,
      configObject,
      language,
      lessonTitle
    } = useStore((state) => ({
      numberOfExercises: state.numberOfExercises,
      solvedExercises: state.solvedExercises,
      configObject: state.configObject,
      language: state.language,
      lessonTitle: state.lessonTitle
    }));
    const [showSidebar, setShowSidebar] = reactExports.useState(false);
    let title = lessonTitle;
    if (configObject && typeof configObject.config.title === "object") {
      if (Object.keys(configObject.config.title).includes(language)) {
        title = configObject.config.title[language];
      }
    }
    const closeSidebar = () => {
      const sidebar = document.querySelector(".sidebar-component");
      sidebar == null ? void 0 : sidebar.classList.add("sidebar-disappear");
      sidebar == null ? void 0 : sidebar.addEventListener("animationend", () => {
        setShowSidebar(false);
      });
    };
    return showSidebar ? reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sidebar-component", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            solvedExercises,
            "/",
            numberOfExercises,
            " ",
            t2("Solved exercises")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleButton, { action: closeSidebar, svg: svgs.closeIcon })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExercisesList, { closeSidebar }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "p-4 footer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BugButton, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: t2("Current version") }),
            ":",
            " ",
            versionSections.join(".")
          ] })
        ] })
      ] }) }),
      document.body
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      SimpleButton,
      {
        svg: svgs.dropdownButton,
        id: "sidebar-toggle",
        action: () => {
          setShowSidebar(true);
        }
      }
    );
  }
  const styles$1 = "";
  function ResetButton() {
    const { setOpenedModals } = useStore((state) => ({
      setOpenedModals: state.setOpenedModals
    }));
    const { t: t2 } = useTranslation();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SimpleButton,
      {
        extraClass: "pill border-blue color-blue",
        svg: svgs.resetIcon,
        text: t2("Reset"),
        id: "reset-button",
        action: () => setOpenedModals({ reset: true })
      }
    );
  }
  function Navbar() {
    const { displayTestButton } = useStore((state) => ({
      displayTestButton: state.displayTestButton
    }));
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "navbar-component", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "_navbar-buttons", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/logo.png",
            alt: "Learnpack",
            style: { width: "40px", height: "auto" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BuildButton, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FeedbackButton, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResetButton, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TestButton, { display: displayTestButton })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, {})
    ] });
  }
  const TestButton = ({ display }) => {
    const { test } = useStore((state) => ({ test: state.test }));
    return display && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: test, className: "test-button", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Test" }) });
  };
  const Header$1 = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "app-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LessonOptions, {})
    ] });
  };
  let aiInteraction = {};
  function Chat() {
    const backdropRef = reactExports.useRef(null);
    const inputRef = reactExports.useRef(null);
    const { t: t2 } = useTranslation();
    const {
      setOpenedModals,
      currentExercisePosition,
      exerciseMessages,
      setExerciseMessages,
      chatSocket: chatSocket2,
      conversationIdsCache,
      getContextFilesContent,
      learnpackPurposeId,
      token,
      chatInitialMessage,
      startConversation,
      isBuildable,
      isTesteable,
      runExerciseTests,
      compilerSocket,
      shouldBeTested,
      registerAIInteraction,
      setListeners,
      getCurrentExercise,
      user_id,
      bc_token
    } = useStore((state) => ({
      setOpenedModals: state.setOpenedModals,
      currentExercisePosition: state.currentExercisePosition,
      exerciseMessages: state.exerciseMessages,
      setExerciseMessages: state.setExerciseMessages,
      chatSocket: state.chatSocket,
      compilerSocket: state.compilerSocket,
      conversationIdsCache: state.conversationIdsCache,
      getContextFilesContent: state.getContextFilesContent,
      learnpackPurposeId: state.learnpackPurposeId,
      token: state.token,
      chatInitialMessage: state.chatInitialMessage,
      startConversation: state.startConversation,
      isBuildable: state.isBuildable,
      isTesteable: state.isTesteable,
      runExerciseTests: state.runExerciseTests,
      shouldBeTested: state.shouldBeTested,
      registerAIInteraction: state.registerAIInteraction,
      setListeners: state.setListeners,
      getCurrentExercise: state.getCurrentExercise,
      user_id: state.user_id,
      bc_token: state.bc_token
    }));
    const fakeMessages = [{ type: "bot", text: t2(chatInitialMessage) }];
    const [isGenerating, setIsGenerating] = reactExports.useState(false);
    const [waitingTestResult, setWaitingTestResult] = reactExports.useState(false);
    const [messages2, setMessages] = reactExports.useState(
      exerciseMessages[currentExercisePosition] || fakeMessages
    );
    const [userMessage, setUserMessage] = reactExports.useState("");
    const [userMessageCache, setUserMessageCache] = reactExports.useState("");
    reactExports.useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      if (conversationIdsCache[currentExercisePosition] == void 0) {
        startConversation(currentExercisePosition);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    reactExports.useEffect(() => {
      chatSocket2.on("response", (message) => {
        let newMessages = [...messages2];
        newMessages[newMessages.length - 1].text += message.chunk;
        setMessages(newMessages);
      });
      chatSocket2.on("responseFinished", (data) => {
        if (data.status == "ok") {
          setIsGenerating(false);
          aiInteraction.ending_at = Date.now();
          aiInteraction.ai_response = messages2[messages2.length - 1].text;
          registerAIInteraction(currentExercisePosition, aiInteraction);
          TagManager.dataLayer({
            dataLayer: {
              event: "ai_interaction",
              interaction: aiInteraction,
              slug: getCurrentExercise().slug,
              user_id
            }
          });
          aiInteraction = {};
          setExerciseMessages(messages2, currentExercisePosition);
        }
      });
      const chatMessagesContainer = document.querySelector(".chat-messages");
      if (chatMessagesContainer) {
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
      }
      return () => {
        chatSocket2.off("response");
        chatSocket2.off("responseFinished");
      };
    }, [messages2]);
    reactExports.useEffect(() => {
      if (!waitingTestResult)
        return;
      compilerSocket.onStatus("testing-success", (data) => {
        setMessages((prev2) => {
          let messages22 = [...prev2];
          messages22[messages22.length - 1].text = "**Tests passed!**";
          messages22[messages22.length - 1].extraClass = "bg-success text-white";
          return messages22;
        });
        emitUserMessage(
          `The tests passed succesfully, tell the user to pass to the next exercise and give him a congrats message: ${removeSpecialCharacters(
            data.logs[0]
          )}`
        );
        setListeners();
      });
      compilerSocket.onStatus("testing-error", (data) => {
        setMessages((prev2) => {
          let messages22 = [...prev2];
          messages22[messages22.length - 1].text = "**Tests failed**";
          messages22[messages22.length - 1].extraClass = "bg-fail text-white";
          return messages22;
        });
        emitUserMessage(
          `Some tests didn't passed, these are the tests logs: ${removeSpecialCharacters(
            data.logs[0]
          )}`
        );
        setListeners();
      });
    }, [waitingTestResult]);
    const handleClickOutside = (event) => {
      if (event.target === backdropRef.current) {
        setOpenedModals({ chat: false });
      }
    };
    const trackUserMessage = (e2) => {
      setUserMessage(e2.target.value);
      setUserMessageCache(e2.target.value);
    };
    const addNoActionsMessage = () => {
      setMessages((prev2) => [...prev2, { type: "user", text: userMessage }]);
      setMessages((prev2) => [
        ...prev2,
        {
          type: "bot",
          text: "This exercise does not require any specific actions or code on your side, move to the next step whenever you are ready by clicking in the **next** button. [//]: # (next)"
        }
      ]);
      setUserMessage("");
    };
    const sendUserMessage = async () => {
      if (Boolean(userMessage.trim() == ""))
        return;
      if (isGenerating)
        return;
      const isFirstInteraction = messages2.length === 1;
      setMessages((prev2) => [...prev2, { type: "user", text: userMessage }]);
      setUserMessage("");
      if (isTesteable && (shouldBeTested || isFirstInteraction)) {
        setMessages((prev2) => [
          ...prev2,
          { type: "bot", text: "**Wait while I'm testing your code...**" }
        ]);
        setWaitingTestResult(true);
        runExerciseTests();
        return;
      }
      emitUserMessage();
    };
    const emitUserMessage = async (testResult) => {
      setMessages((prev2) => [...prev2, { type: "bot", text: "" }]);
      const messageData = await getMessageData();
      if (testResult) {
        messageData.message.context += `
${testResult}`;
      }
      aiInteraction.starting_at = Date.now();
      aiInteraction.student_message = messageData.message.text;
      aiInteraction.context = messageData.message.context;
      chatSocket2.emit("message", messageData);
      setIsGenerating(true);
    };
    const handleSubmit = () => {
      if (!isBuildable && !isTesteable) {
        addNoActionsMessage();
        return;
      }
      sendUserMessage();
    };
    const handleKeyUp = (event) => {
      if (event.key === "Enter" && !event.ctrlKey) {
        event.preventDefault();
        if (!isBuildable && !isTesteable) {
          addNoActionsMessage();
          return;
        }
        sendUserMessage();
      }
    };
    const getMessageData = async () => {
      const contextFilesContent = await getContextFilesContent();
      const data = {
        message: {
          type: "user",
          text: userMessageCache,
          purpose: learnpackPurposeId,
          context: contextFilesContent,
          imageB64: ""
        },
        conversation: {
          id: conversationIdsCache[currentExercisePosition],
          purpose: learnpackPurposeId,
          token
        },
        breathecode: {
          token: bc_token
        }
      };
      return data;
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { ref: backdropRef, className: "chat-container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chat-modal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "chat-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t2("Rigobot AI-Tutor") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setOpenedModals({ chat: false });
            },
            children: svgs.closeIcon
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "chat-messages", children: messages2.map((message, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Message, { ...message }, index2)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "chat-input", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            ref: inputRef,
            value: userMessage,
            placeholder: t2("Ask me something here"),
            onChange: trackUserMessage,
            onKeyUp: handleKeyUp
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSubmit, children: svgs.sendSvg })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "chat-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t2(
        "This AI, currently in beta, serves as an educational tutor. It is not a substitute for professional instruction. Use at your own risk and confirm details with authoritative educational resources."
      ) }) })
    ] }) });
  }
  const Message = ({ type, text: text2, extraClass }) => {
    const { setOpenedModals, currentExercisePosition, handlePositionChange } = useStore((state) => ({
      setOpenedModals: state.setOpenedModals,
      currentExercisePosition: state.currentExercisePosition,
      handlePositionChange: state.handlePositionChange
    }));
    const [showNext, setShowNext] = reactExports.useState(false);
    const [messageText, setMessageText] = reactExports.useState("");
    if (text2.includes("[//]: # (next)") && !showNext) {
      setShowNext(true);
      setMessageText(text2.replace("[//]: # (next)", ""));
    }
    const closeChatAndNext = () => {
      handlePositionChange(currentExercisePosition + 1);
      setOpenedModals({ chat: false });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `message ${type} ${extraClass ? extraClass : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          dangerouslySetInnerHTML: {
            __html: convertMarkdownToHTML(messageText ? messageText : text2)
          }
        }
      ) }),
      showNext && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: closeChatAndNext, className: "next-button", children: "Next" })
    ] });
  };
  const VideoModal = ({ link, hideModal }) => {
    const modalRef = reactExports.useRef(null);
    const { openLink } = useStore((store) => ({
      openLink: store.openLink
    }));
    const fetchPreview = (link2) => {
      let videoId;
      let includesEmbed = link2.includes("/embed/");
      if (includesEmbed) {
        videoId = link2.split("/embed/")[1].split("?")[0];
      } else {
        const params = new URLSearchParams(link2.split("?")[1]);
        videoId = params.get("v");
      }
      if (!videoId) {
        console.error("Invalid YouTube link: missing video ID");
        return;
      }
      const previewSrc = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      return previewSrc;
    };
    const handleClickOutside = (event) => {
      if (modalRef.current == event.target) {
        hideModal();
      }
    };
    React.useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    const handleOpenLink = () => {
      openLink(link);
      hideModal();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { onClick: handleClickOutside, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: modalRef, className: "video-modal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: fetchPreview(link), alt: "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "click bg-gray", onClick: handleOpenLink, children: "👀" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "close", onClick: hideModal, children: "Close the video and start exercise" })
    ] }) }) });
  };
  function CheckVideo() {
    const [link, setLink] = reactExports.useState(null);
    const { configObject, currentExercisePosition, videoTutorial, setShowVideoTutorial, showVideoTutorial } = useStore((state) => ({
      configObject: state.configObject,
      currentExercisePosition: state.currentExercisePosition,
      videoTutorial: state.videoTutorial,
      setShowVideoTutorial: state.setShowVideoTutorial,
      showVideoTutorial: state.showVideoTutorial
    }));
    reactExports.useEffect(() => {
      if (configObject.config.intro && currentExercisePosition == 0) {
        let _link = configObject.config.intro;
        const embedLink = _link.replace("watch?v=", "embed/");
        setLink(embedLink);
      }
      if (videoTutorial) {
        let _link = videoTutorial;
        const embedLink = _link.replace("watch?v=", "embed/");
        setLink(embedLink);
      }
    }, [currentExercisePosition, configObject, videoTutorial]);
    const hideModal = () => {
      setShowVideoTutorial(false);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: showVideoTutorial && link ? /* @__PURE__ */ jsxRuntimeExports.jsx(VideoModal, { link, hideModal }) : null });
  }
  const styles = "";
  const Modal = ({
    children,
    outsideClickHandler,
    htmlId,
    extraClass,
    blockScroll = true
  }) => {
    const modalRef = reactExports.useRef(null);
    const handleClickOutside = (event) => {
      if (modalRef.current === event.target) {
        outsideClickHandler();
      }
    };
    reactExports.useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      const originalOverflow = document.body.style.overflow;
      if (blockScroll) {
        document.body.style.overflow = "hidden";
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        if (blockScroll) {
          document.body.style.overflow = originalOverflow;
        }
      };
    }, []);
    return reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: modalRef, className: "self-closing-modal", id: htmlId, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `modal-content ${extraClass}`, children }) }),
      document.body
    );
  };
  function LoginModal() {
    const { setOpenedModals, loginToRigo } = useStore((state) => ({
      setToken: state.setToken,
      host: state.host,
      setOpenedModals: state.setOpenedModals,
      startConversation: state.startConversation,
      currentExercisePosition: state.currentExercisePosition,
      loginToRigo: state.loginToRigo
    }));
    const { t: t2 } = useTranslation();
    const backdropRef = reactExports.useRef(null);
    const [email, setEmail] = reactExports.useState("");
    const [password, setPassword] = reactExports.useState("");
    const [isLoading, setIsLoading] = reactExports.useState(false);
    const handleClickOutside = (event) => {
      if (backdropRef.current === event.target) {
        setOpenedModals({ login: false });
      }
    };
    reactExports.useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    const login = async (e2) => {
      e2.preventDefault();
      setIsLoading(true);
      const isLoggedId = await loginToRigo({
        email,
        password
      });
      if (!isLoggedId) {
        setIsLoading(false);
      }
    };
    const sendAnalytics = () => {
      TagManager.dataLayer({
        dataLayer: {
          event: "sign_up_attempt"
        }
      });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Modal,
      {
        extraClass: "login-modal",
        outsideClickHandler: () => {
          setOpenedModals({ login: false });
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-content", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Login " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t2("loginMessage") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { action: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                placeholder: "Email",
                type: "text",
                autoComplete: "email",
                name: "email",
                onChange: (e2) => {
                  setEmail(e2.target.value);
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                placeholder: t2("Password"),
                autoComplete: "current-password",
                type: "password",
                name: "password",
                onChange: (e2) => {
                  setPassword(e2.target.value);
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SimpleButton,
                {
                  text: isLoading ? t2("Loading...") : t2("submit"),
                  action: login,
                  extraClass: "bg-blue"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SimpleButton,
                {
                  extraClass: "bg-secondary",
                  action: () => {
                    setOpenedModals({ login: false });
                  },
                  text: t2("skip")
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              t2("Don't have an account? "),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                OpenWindowLink,
                {
                  callback: sendAnalytics,
                  text: t2("Sign up here!"),
                  href: "https://4geeks.com/pricing"
                }
              ),
              " "
            ] })
          ] })
        ] })
      }
    ) });
  }
  function SocketDisconnectionModal() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { blockScroll: false, outsideClickHandler: () => {
    }, htmlId: "socket-disconnected", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Content, {})
    ] });
  }
  const Header = () => {
    const { t: t2 } = useTranslation();
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-center", children: t2("Socket disconnected!") }) });
  };
  const WindowReloader = () => {
    const { t: t2 } = useTranslation();
    const reload = () => {
      window.location.reload();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SimpleButton,
      {
        extraClass: "bg-blue pill centered",
        action: reload,
        text: t2("Reload")
      }
    );
  };
  const Step = (props) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: props.title }),
      props.instructions
    ] });
  };
  const Steps = () => {
    const { t: t2 } = useTranslation();
    const steps = [
      {
        title: t2("Step 1"),
        instructions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t2("Check that Learnpack is running in your terminal.") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            t2("Run: "),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "learnpack start" })
          ] })
        ] })
      },
      {
        title: t2("Step 2"),
        instructions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t2(
            "If Learnpack is running but you still see this modal, reload the window:"
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(WindowReloader, {})
        ] })
      }
    ];
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: steps.map((step, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { title: step.title, instructions: step.instructions }, index2)) });
  };
  const Content = () => {
    const { t: t2 } = useTranslation();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t2("Sorry, this error can happen for certain reasons.") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t2("The basic steps to troubleshoot this error are the following:") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Steps, {})
    ] });
  };
  const RigobotInviteModal = () => {
    const { openLink, bc_token, setOpenedModals } = useStore((state) => ({
      openLink: state.openLink,
      bc_token: state.bc_token,
      setOpenedModals: state.setOpenedModals
    }));
    const closeModal = () => {
      _t.error("The user clicked outside the modal");
    };
    const acceptRigobot = () => {
      const inviteUrl = "https://rigobot.herokuapp.com/invite?referer=4geeks&token=" + bc_token;
      openLink(inviteUrl);
      setOpenedModals({ rigobotInvite: false });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Modal,
      {
        outsideClickHandler: closeModal,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Missing Rigobot user" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "It appears that you didn't accept ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Rigobot's" }),
            " ",
            "invitation yet. Learnpack uses Rigobot AI services under the hood, if you want to use the fabolous ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Learnpack Tutor" }),
            ", please accept Rigobot invitation!"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: acceptRigobot, className: "button ", children: "Accept now" }) })
        ] })
      }
    );
  };
  const SolutionModal = () => {
    const { setOpenedModals, currentSolution } = useStore((state) => ({
      setOpenedModals: state.setOpenedModals,
      currentSolution: state.currentSolution
    }));
    const copyCode = () => {
      navigator.clipboard.writeText(currentSolution);
      _t.success("Code copied to clipboard");
      setOpenedModals({ solution: false });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { outsideClickHandler: () => setOpenedModals({ solution: false }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "This is just one solution, can you find another one?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { style: { textAlign: "left", minWidth: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: currentSolution }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: copyCode, className: "button", children: "Copy code" })
    ] });
  };
  const ResetModal = () => {
    const { t: t2 } = useTranslation();
    const {
      compilerSocket,
      exercises,
      currentExercisePosition,
      setOpenedModals
    } = useStore((state) => ({
      compilerSocket: state.compilerSocket,
      exercises: state.exercises,
      currentExercisePosition: state.currentExercisePosition,
      setOpenedModals: state.setOpenedModals
    }));
    reactExports.useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    const toggleModal = () => {
      setOpenedModals({ reset: false });
    };
    const handleReset = () => {
      const data = {
        exerciseSlug: exercises[currentExercisePosition].slug
      };
      compilerSocket.emit("reset", data);
      toggleModal();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { extraClass: "reset-modal", outsideClickHandler: toggleModal, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t2("Reset") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t2(
        "Are you sure you want to reset the exercise? You will lose all your progress"
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SimpleButton,
          {
            text: t2("Reset"),
            extraClass: "pill bg-blue",
            action: handleReset
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SimpleButton,
          {
            text: t2("Cancel"),
            extraClass: "pill border-blue color-blue",
            action: toggleModal
          }
        )
      ] })
    ] });
  };
  const _ = "";
  const defaultSteps = [
    {
      title: "Welcome to LearnPack!",
      text: `This is a quick tutorial to help you get started. Click next to continue.`,
      id: null,
      position: ["100px", "20%"]
    },
    {
      title: "If you prefer, you can change the language!",
      text: `Click on the flag to change the language.`,
      id: "language-component",
      position: ["120px", "20%"]
    },
    {
      title: "The run button",
      text: `Use this button to compile or run your code. The behavior depends of the files in the exercise directory. You can also use the shortcut \`Ctrl\` + \`Enter\` to run the code.`,
      id: "build-button",
      position: ["80px", "20%"]
    },
    {
      title: "Options to get feedback",
      text: "Within this dropdown you can get feedback on your code. Let's try the available ones! You can use the following shortcuts:\n\n`Ctrl` + `Shift` + `Enter`: Run the tests if available. \n\n`Ctrl` + `Alt` + `Enter`: Open the chat with Rigobot",
      id: "feedback-button",
      position: ["210px", "20%"]
    },
    {
      title: "Reset button",
      text: "Sometimes you want to start over, use this button to `reset` the code to its original state.",
      id: "reset-button",
      position: ["100px", "20%"]
    },
    {
      title: "Open the sidebar",
      text: "Inside the sidebar you can go through the exercises and see your progress. Also you can report a bug.",
      id: "sidebar-toggle",
      position: ["100px", "20%"]
    }
  ];
  const Presentator = ({}) => {
    const [element, setElement] = reactExports.useState(null);
    const [currentStep, setCurrentStep] = reactExports.useState(0);
    const steps = defaultSteps;
    reactExports.useEffect(() => {
      const idToSearch = steps[currentStep].id;
      const element2 = document.getElementById(
        idToSearch ? idToSearch : "no-element"
      );
      if (element2) {
        setElement(element2);
      }
    }, [currentStep]);
    const handlePositionChange = (action) => {
      if (action === "next") {
        setCurrentStep((prev2) => prev2 + 1);
      }
      if (action === "prev") {
        setCurrentStep((prev2) => prev2 - 1);
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "no-element" }),
      element && reactDomExports.createPortal(
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            currentStep,
            element,
            title: steps[currentStep].title,
            text: steps[currentStep].text,
            position: steps[currentStep].position,
            handlePositionChange,
            numberOfSteps: steps.length
          }
        ),
        //   @ts-ignore
        element.parentNode
      )
    ] });
  };
  const Badge = ({
    text: text2,
    title,
    handlePositionChange,
    element,
    numberOfSteps,
    currentStep,
    position
  }) => {
    const { t: t2 } = useTranslation();
    const { setOpenedModals } = useStore((state) => ({
      setOpenedModals: state.setOpenedModals
    }));
    let cachedStyles = element ? {
      border: element.style.border,
      zIndex: element.style.zIndex,
      background: element.style.background,
      borderRadius: element.style.borderRadius
    } : {
      border: "",
      zIndex: "",
      background: "",
      borderRadius: ""
    };
    reactExports.useEffect(() => {
      if (!element)
        return;
      if (element.id !== "no-element") {
        element.style.border = "2px solid red";
      }
      element.style.zIndex = "1";
      element.style.borderRadius = "10px";
      element.style.background = "white";
      return () => {
        element.style.border = cachedStyles.border;
        element.style.zIndex = "0";
        element.style.borderRadius = cachedStyles.borderRadius;
        element.style.background = cachedStyles.background;
      };
    }, [element]);
    const next = () => {
      handlePositionChange("next");
    };
    const prev2 = () => {
      handlePositionChange("prev");
    };
    const closeTutorial = () => {
      setOpenedModals({ tutorial: false });
    };
    const handleClickBackdrop = (e2) => {
      if (e2.target.classList.contains("presentator")) {
        closeTutorial();
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: handleClickBackdrop, className: "presentator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { top: position[0], left: position[1] }, className: "_badge", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t2(title) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "_content",
            dangerouslySetInnerHTML: { __html: convertMarkdownToHTML(t2(text2)) }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "_footer", children: [
          !(currentStep === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx(
            SimpleButton,
            {
              extraClass: "pill",
              svg: svgs.prevArrowButton,
              action: prev2
            }
          ),
          !(currentStep === numberOfSteps - 1) && /* @__PURE__ */ jsxRuntimeExports.jsx(
            SimpleButton,
            {
              extraClass: "pill",
              svg: svgs.nextArrowButton,
              action: next
            }
          ),
          currentStep === numberOfSteps - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            SimpleButton,
            {
              extraClass: "pill border-blue color-blue on-hover-active",
              text: "Finish!",
              action: closeTutorial
            }
          )
        ] })
      ] })
    ] });
  };
  const formatMessage = (message) => {
    return message.replace("BAD_PROMPT", "Bad Prompt").replace("GOOD_PROMPT", "Good Prompt");
  };
  const DialogModal = () => {
    const { setOpenedModals, dialogData } = useStore((state) => ({
      setOpenedModals: state.setOpenedModals,
      dialogData: state.dialogData
    }));
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { outsideClickHandler: () => setOpenedModals({ dialog: false }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        dangerouslySetInnerHTML: {
          __html: convertMarkdownToHTML(formatMessage(dialogData.message))
        }
      }
    ) });
  };
  const modals = "";
  const ModalsContainer = () => {
    const { openedModals, token } = useStore((state) => ({
      openedModals: state.openedModals,
      token: state.token
    }));
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SocketDisconnectionModal, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CheckVideo, {}),
      openedModals.login && /* @__PURE__ */ jsxRuntimeExports.jsx(LoginModal, {}),
      openedModals.chat && token && /* @__PURE__ */ jsxRuntimeExports.jsx(Chat, {}),
      openedModals.rigobotInvite && /* @__PURE__ */ jsxRuntimeExports.jsx(RigobotInviteModal, {}),
      openedModals.solution && /* @__PURE__ */ jsxRuntimeExports.jsx(SolutionModal, {}),
      openedModals.reset && /* @__PURE__ */ jsxRuntimeExports.jsx(ResetModal, {}),
      openedModals.tutorial && /* @__PURE__ */ jsxRuntimeExports.jsx(Presentator, {}),
      openedModals.dialog && /* @__PURE__ */ jsxRuntimeExports.jsx(DialogModal, {})
    ] });
  };
  const ShortcutsListener = ({ children }) => {
    const { t: t2 } = useTranslation();
    const {
      currentExercisePosition,
      handlePositionChange,
      build,
      runExerciseTests,
      setOpenedModals,
      openedModals,
      isBuildable,
      isTesteable
    } = useStore((state) => ({
      currentExercisePosition: state.currentExercisePosition,
      handlePositionChange: state.handlePositionChange,
      exercises: state.exercises,
      build: state.build,
      runExerciseTests: state.runExerciseTests,
      setOpenedModals: state.setOpenedModals,
      openedModals: state.openedModals,
      isBuildable: state.isBuildable,
      isTesteable: state.isTesteable
    }));
    reactExports.useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === "ArrowRight" && !event.shiftKey) {
          handlePositionChange(currentExercisePosition + 1);
        }
        if (event.ctrlKey && event.key === "ArrowLeft" && !event.shiftKey) {
          handlePositionChange(currentExercisePosition - 1);
        }
        if (event.ctrlKey && !event.shiftKey && !event.altKey && event.key === "Enter" && isBuildable) {
          build(t2("Running..."));
        }
        if (event.ctrlKey && event.shiftKey && event.key === "Enter" && isTesteable) {
          runExerciseTests({
            toast: true,
            setFeedbackButton: true,
            feedbackButtonText: t2("Running..."),
            targetButton: "feedback"
          });
        }
        if (event.ctrlKey && event.altKey && event.key === "Enter") {
          setOpenedModals({ chat: !openedModals.chat });
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [currentExercisePosition, openedModals.chat]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shortcut", children });
  };
  function Home() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { id: "main-container", className: "", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ShortcutsListener, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ModalsContainer, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SocketHandler, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LessonContainer, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ie, {})
    ] });
  }
  const tagManagerArgs = {
    gtmId: "GTM-WCVQ4KJ",
    auth: "UziHoBlMGYrHZqefka0uXg",
    env: "env-1"
  };
  TagManager.initialize(tagManagerArgs);
  client.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Home, {}) })
  );
})();
//# sourceMappingURL=index.js.map
