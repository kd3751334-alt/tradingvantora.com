const amountInput = document.getElementById("amount");
const walletMessage = document.getElementById("wallet-message");
function requestMessage(kind) {
  const amount = Number(amountInput.value);
  if (!Number.isFinite(amount) || amount <= 0 || amount > 50000) {
    walletMessage.textContent = "Enter an amount from ₱1 to ₱50,000 for this preview.";
    walletMessage.style.color = "#b44b42";
    return;
  }
  walletMessage.style.color = "#168b65";
  walletMessage.textContent = `${kind} preview recorded locally for ₱${amount.toLocaleString("en-PH", {minimumFractionDigits:2, maximumFractionDigits:2})}. No transaction was made.`;
}
document.getElementById("topup").addEventListener("click", () => requestMessage("Top-up request"));
document.getElementById("withdraw").addEventListener("click", () => requestMessage("Withdrawal request"));
const dialog = document.getElementById("plan-dialog");
document.querySelectorAll("[data-plan]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("dialog-title").textContent = button.dataset.plan;
    document.getElementById("dialog-description").textContent = `Example amount: ₱${Number(button.dataset.amount).toLocaleString("en-PH")}. This is a visual sample only; no investment is created.`;
    dialog.showModal();
  });
});
function closeDialog(){dialog.close();}
document.getElementById("close-dialog").addEventListener("click", closeDialog);
document.getElementById("dialog-ok").addEventListener("click", closeDialog);
