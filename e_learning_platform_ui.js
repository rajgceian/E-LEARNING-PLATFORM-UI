// Show alert & save course completion status
function markComplete() {
  alert("Course marked as completed!");
  localStorage.setItem("jsCourseCompleted", "true");

  const statusEl = document.getElementById("js-status");
  if (statusEl) statusEl.textContent = "✅ Completed";
}

// Load saved progress on page load
window.addEventListener("load", () => {
  const statusEl = document.getElementById("js-status");
  if (localStorage.getItem("jsCourseCompleted") === "true" && statusEl) {
    statusEl.textContent = "✅ Completed";
  }
});
