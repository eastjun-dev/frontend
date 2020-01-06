import Modal from "./components/Modal.js";
import NextButton from "./components/NextButton.js";
import { getData } from "./store/store.js";

const modal = new Modal(getData());
modal.setState(getData());
