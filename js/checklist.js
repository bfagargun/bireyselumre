// Hazırlık listesi: işaretler yalnızca bu tarayıcıda saklanır.
(function () {
  var KEY = 'bu-checklist:' + location.pathname;
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) {}
  var boxes = document.querySelectorAll('.prose li input[type="checkbox"]');
  boxes.forEach(function (box, i) {
    box.disabled = false;
    box.checked = !!saved[i];
    box.closest('li').classList.add('check-item');
    box.addEventListener('change', function () {
      saved[i] = box.checked;
      try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (e) {}
    });
  });
  var reset = document.getElementById('checklist-reset');
  if (reset) reset.addEventListener('click', function () {
    saved = {};
    try { localStorage.removeItem(KEY); } catch (e) {}
    boxes.forEach(function (b) { b.checked = false; });
  });
})();
