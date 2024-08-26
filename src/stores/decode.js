// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDecodeStore = defineStore("decode", () => {
  // Store Values, code is handled as a string to allow preceeding 0's
  const correctCode = ref("");
  const currentCode = ref("");
  const numAttemps = ref(0);
  const previousAttempts = ref([]);
  const codeSubmittedFlag = ref(false);
  const allowDuplicates = ref(true);
  const showResetCode = ref(false);

  function submitAttempt() {
    codeSubmittedFlag.value = true;
    incrementAttempts();
  }

  function toggleShowResetCode() {
    showResetCode.value = !showResetCode.value
  }

  function clearCurrentCode() {
    currentCode.value = "";
    codeSubmittedFlag.value = false;
  }

  function incrementAttempts() {
    numAttemps.value++;
    previousAttempts.value.push(currentCode.value);
  }

  function resetCode() {
    codeSubmittedFlag.value = false;
    showResetCode.value = false;
    currentCode.value = '';
    numAttemps.value = 0;
    previousAttempts.value = [];
  }

  // Generate 4 digit code between 0 - 9999
  function generateCode() {
    resetCode();

    let newCode = (Math.floor(Math.random() * 10000) + 10000)
      .toString()
      .substring(1);

    if (!allowDuplicates.value) {
      // Regex check to see if code contains duplicate values
      if (/(.).*\1/.test(newCode)) {
        do {
          newCode = (Math.floor(Math.random() * 10000) + 10000)
            .toString()
            .substring(1);
        } while (/(.).*\1/.test(newCode));
      }
    }

    correctCode.value = newCode;
  }

  // Returns true if the digit in the specified position is an exact match
  function getNumberCorrect(digitIndex) {
    return correctCode.value.substring(digitIndex, digitIndex + 1) === currentCode.value.substring(digitIndex, digitIndex + 1)
  }

  // Returns true if the number exists in the code but is not an exact match, it will return true for the amount of occurrances
  function getNumberExists(digitIndex) {
    const currentCodeArray = currentCode.value.split("");
    const correctCodeArray = correctCode.value.split("");

    // Get the digit at the specified index.
    const currentDigit = currentCode.value.substring(
      digitIndex,
      digitIndex + 1
    );

    let currentTrueCount = currentCode.value.split(currentDigit).length - 1;
    const correctTrueCount = correctCode.value.split(currentDigit).length - 1;

    let numberOfDigitsToShowExists =
      currentTrueCount > correctTrueCount ? correctTrueCount : currentTrueCount;

    // Remove the exact matches from the calculation.
    for (let i = 0; i < correctCodeArray.length; i++) {
      if (
        correctCodeArray[i] === currentCodeArray[i] &&
        correctCodeArray[i] === currentDigit
      ) {
        numberOfDigitsToShowExists--;
      }
    }

    for (let i = 0; i < digitIndex; i++) {
      if (currentCodeArray[i] === currentDigit) {
        numberOfDigitsToShowExists--;
      }
    }

    return (
      correctCodeArray.includes(currentDigit) && numberOfDigitsToShowExists > 0
    );
  }

  function updateCode(digit) {
    if (currentCode.value.length < 4) {
      currentCode.value = currentCode.value + digit.toString();
    }
  }

  function removeDigit() {
    currentCode.value = currentCode.value.slice(0, -1);
  }

  return {
    correctCode,
    currentCode,
    numAttemps,
    previousAttempts,
    codeSubmittedFlag,
    allowDuplicates,
    showResetCode,
    incrementAttempts,
    resetCode,
    generateCode,
    getNumberCorrect,
    getNumberExists,
    updateCode,
    removeDigit,
    submitAttempt,
    clearCurrentCode,
    toggleShowResetCode,
  };
});
