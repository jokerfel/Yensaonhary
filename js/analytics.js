/* Yến Sào Nhà Ry — đo lượt xem trang, sprint ngày 1 (27/11/2026).
 *
 * Bộ đếm đang chạy: Abacus API (abacus.jasoncameron.dev) — miễn phí,
 * KHÔNG cần tài khoản, không cần API key. Mỗi lượt tải trang gọi 1 lần
 * GET /hit/yensaonhary-netlify/<page-key> và tăng bộ đếm của trang đó lên 1.
 *
 * Cách đọc số liệu hàng ngày (không cần đăng nhập, ai cũng đọc được):
 *   curl https://abacus.jasoncameron.dev/get/yensaonhary-netlify/home
 *   curl https://abacus.jasoncameron.dev/get/yensaonhary-netlify/yen-chung-san
 *   ... thay <page-key> bằng slug của từng trang (xem data-page dưới đây).
 *   Nếu key chưa từng được đếm, API trả {"error":"Key not found"} = 0 lượt.
 *   Tổng lượt xem toàn site = cộng các key lại.
 *
 * Hạn chế, nói thẳng: đây là bộ đếm lượt tải trang, KHÔNG phải analytics
 * đầy đủ — nó đếm cả bot/crawler, không phân biệt khách mới/khách cũ,
 * không có nguồn truy cập, vị trí hay từ khóa. Bất kỳ ai biết tên key
 * cũng đọc/tăng được số liệu, và đây là dịch vụ miễn phí của 1 cá nhân,
 * không có SLA. Vì vậy số này dùng để theo dõi xu hướng ngày 1 của sprint,
 * KHÔNG dùng làm số liệu kinh doanh chính thức.
 *
 * Analytics đầy đủ (GA4 / GoatCounter / Cloudflare) đều bắt buộc phải có
 * tài khoản + mã site (Measurement ID / site ID) do chính anh Nhan tạo —
 * không thể tự tạo thay anh vì cần email xác minh của anh. Khi anh Nhan
 * cấp mã (ví dụ G-XXXXXXXXXX), thay đoạn TODO bên dưới bằng snippet thật
 * của GA4/GoatCounter, giữ nguyên bộ đếm Abacus song song để đối chiếu.
 *
 * TODO (khi có mã): dán snippet GA4 tại đây, ví dụ:
 *   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXX"></script>
 *   <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXX');</script>
 *   (G-XXXX là mã giả, CHƯA có mã thật — đừng bật đoạn này khi chưa có mã.)
 */
(function () {
    var script = document.currentScript;
    var page = (script && script.getAttribute('data-page')) || '';
    if (!page) {
        page = window.location.pathname.replace(/^\/+|\.html$/g, '') || 'home';
        page = page.replace(/\//g, '-');
    }
    var key = 'yensaonhary-netlify/' + encodeURIComponent(page);
    try {
        fetch('https://abacus.jasoncameron.dev/hit/' + key, { mode: 'cors', keepalive: true })
            .catch(function () { /* đếm lỗi thì bỏ qua, không làm vỡ trang */ });
    } catch (e) { /* trình duyệt cũ không có fetch: bỏ qua */ }
})();
