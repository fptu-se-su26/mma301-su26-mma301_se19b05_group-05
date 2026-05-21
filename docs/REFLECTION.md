# AI Learning Reflection

## 1. Thông tin chung

| Thông tin | Nội dung |
|---|---|
| Môn học | Multiplatform Mobile App Development_Phát triển ứng dụng di động đa nền tảng |
| Mã môn học | MMA301 |
| Lớp | SE19B05 |
| Học kỳ | 7 |
| Tên bài tập / Project | Làm giao diện trang của từng cá nhân |
| Tên sinh viên / Nhóm | Đinh Huy Hoàng / Nhóm 5 |
| MSSV / Danh sách MSSV | DE180623 |
| Giảng viên hướng dẫn | QuangLTN3 |
| Ngày hoàn thành reflection | 21/5/2026 |

---

## 2. Mục đích Reflection

File này dùng để sinh viên/nhóm tự đánh giá quá trình sử dụng AI trong học tập và thực hiện bài tập, lab, assignment hoặc project.

Reflection cần thể hiện:

- AI đã hỗ trợ gì trong quá trình học.
- Sinh viên/nhóm đã kiểm chứng kết quả AI như thế nào.
- Sinh viên/nhóm đã tự chỉnh sửa, cải tiến ra sao.
- Sinh viên/nhóm học được gì về môn học.
- Sinh viên/nhóm học được gì về cách sử dụng AI minh bạch và có trách nhiệm.

---

## 3. Tóm tắt quá trình sử dụng AI

Mô tả ngắn gọn quá trình sử dụng AI trong bài tập/project này.

```text
Chúng tôi đã sử dụng AI trong giai đoạn phát triển (Implementation) và kiểm thử (Testing & Debug) của màn hình Wishlist. AI đã đề xuất khung sườn UI ban đầu, hỗ trợ gỡ lỗi crash nghiêm trọng liên quan đến "Unexpected text node" trên thiết bị di động, và gợi ý căn chỉnh CSS thích ứng cho nền tảng Web. Phần lớn các đoạn code giao diện nền tảng do AI gợi ý đều được nhóm tinh chỉnh kỹ lưỡng và kiểm thử đa nền tảng trước khi áp dụng chính thức.
```

Gợi ý:

- Em/nhóm đã dùng AI ở giai đoạn nào?
- Dùng AI để hỗ trợ việc gì?
- Công cụ AI nào được sử dụng nhiều nhất?
- AI có giúp cải thiện chất lượng bài làm không?
- Có phần nào AI gợi ý nhưng em/nhóm không sử dụng không?

---

## 4. Công cụ AI đã sử dụng

Đánh dấu các công cụ AI đã sử dụng.

- [ ] ChatGPT
- [x] Gemini
- [ ] Claude
- [ ] GitHub Copilot
- [ ] Cursor
- [x] Antigravity
- [ ] Microsoft Copilot
- [ ] Perplexity
- [ ] Công cụ khác: ....................................

### Công cụ được sử dụng nhiều nhất

```text
Antigravity / Gemini
```

### Lý do sử dụng công cụ đó

```text
Có khả năng phân tích lỗi trực tiếp trên mã nguồn của dự án, đưa ra gợi ý sửa đổi định tuyến đa nền tảng chính xác và giải thích nguyên nhân crash rất trực quan.
```

---

## 5. AI đã hỗ trợ em/nhóm ở điểm nào?

Đánh dấu các nội dung phù hợp.

- [ ] Hiểu yêu cầu đề bài
- [x] Phân tích bài toán
- [x] Tìm ý tưởng giải pháp
- [ ] Thiết kế database
- [x] Thiết kế giao diện
- [ ] Thiết kế kiến trúc hệ thống
- [x] Viết code mẫu
- [x] Debug lỗi
- [ ] Viết test case
- [x] Review code
- [x] Tối ưu code
- [ ] Kiểm tra bảo mật
- [ ] Viết báo cáo
- [ ] Chuẩn bị thuyết trình
- [x] Tìm hiểu công nghệ mới
- [x] Khác: Tối ưu hóa điều hướng định tuyến đa nền tảng.

### Mô tả chi tiết

```text
AI hỗ trợ dựng khung giao diện nhanh cho Wishlist, định vị chính xác lỗi cú pháp khoảng trắng trong JSX gây crash trên Simulator di động, và đề xuất căn chỉnh CSS cho layout Web để tránh bị đè nút Back bởi header bar tuyệt đối của template.
```

---

## 6. AI có giúp em/nhóm học tốt hơn không?

### 6.1. Những điểm AI giúp em/nhóm học tốt hơn

```text
- Biết cách tự debug lỗi nghiêm ngặt của React Native liên quan đến ký tự khoảng trắng thừa ngoài thẻ Text trong JSX.
- Nắm rõ luồng định tuyến và cách đăng ký trigger chuyển trang của Expo Router Tab Bar.
- Hiểu được cách sử dụng thư viện Platform để tối ưu responsive layout giữa trình duyệt Web và thiết bị di động Native.
```

### 6.2. Những điểm AI chưa giúp tốt hoặc gây khó khăn

```text
AI đề xuất nút Back sử dụng `router.back()` một cách máy móc, không tính đến trường hợp stack lịch sử điều hướng trống (khi người dùng tải lại trang Wishlist hoặc vào thẳng link), dẫn đến nút Back bị đơ. Sinh viên đã phải tự nghiên cứu cải tiến sang `router.push("/")`.
```

### 6.3. Em/nhóm có bị phụ thuộc vào AI không?

- [ ] Không phụ thuộc
- [x] Phụ thuộc ít
- [ ] Phụ thuộc trung bình
- [ ] Phụ thuộc nhiều

Giải thích:

```text
Sử dụng AI như một trợ lý để tăng tốc độ phát hiện bug cú pháp và gợi ý layout, nhưng nhóm luôn kiểm thử kỹ lưỡng, tìm hiểu sâu bản chất kỹ thuật của code và tự tay tối ưu luồng điều hướng của ứng dụng.
```

---

## 7. Em/nhóm đã kiểm tra kết quả AI như thế nào?

Đánh dấu các cách đã sử dụng.

- [x] Chạy thử chương trình
- [x] Kiểm tra output
- [ ] Viết test case
- [x] So sánh với yêu cầu đề bài
- [ ] Đối chiếu với tài liệu môn học
- [x] Review code
- [ ] Hỏi lại giảng viên
- [ ] Tra cứu tài liệu chính thống
- [ ] Thảo luận với thành viên nhóm
- [ ] Kiểm tra bằng dữ liệu mẫu
- [x] So sánh trước và sau khi dùng AI
- [ ] Khác: ....................................

### Mô tả quá trình kiểm chứng

```text
Nhóm khởi chạy đồng thời Expo server cho cả trình duyệt Web Chrome và máy ảo Android Emulator. Sau đó, tiến hành click chuyển đổi qua lại giữa các tab, thực hiện các hành động tải lại trang (F5) trực tiếp tại trang Wishlist, và kiểm thử click nút Back để đảm bảo hành vi hoạt động hoàn toàn chính xác.
```

### Ví dụ cụ thể về một lần kiểm chứng

| Nội dung | Mô tả |
|---|---|
| AI đã gợi ý gì? | Gợi ý sử dụng `router.back()` cho nút quay lại |
| Em/nhóm đã kiểm tra bằng cách nào? | Khởi chạy trang Wishlist ở chế độ tab ẩn danh trên trình duyệt Web (stack trống) và click nút Back |
| Kết quả kiểm tra | Cần chỉnh sửa (Nút Back bấm hoàn toàn không phản hồi) |
| Em/nhóm đã xử lý tiếp như thế nào? | Sửa đổi logic code thành `router.push("/")` để đảm bảo nút Back luôn đưa người dùng về Home an toàn |

---

## 8. Ví dụ AI gợi ý sai hoặc chưa phù hợp

Ghi lại ít nhất một ví dụ nếu có.

| Nội dung | Mô tả |
|---|---|
| AI đã gợi ý gì? | Sinh layout UI chứa ký tự khoảng trắng thừa bên ngoài các thẻ text hiển thị trong JSX |
| Vì sao gợi ý đó sai/chưa phù hợp? | Gây lỗi crash "Unexpected text node" nghiêm trọng, văng màn hình đỏ khi khởi chạy trên Mobile simulator |
| Em/nhóm phát hiện bằng cách nào? | Chạy ứng dụng trên máy ảo Android và click sang màn hình Wishlist |
| Em/nhóm đã sửa như thế nào? | Rà soát và xóa bỏ khoảng trắng thừa, đảm bảo tất cả text node nằm trong thẻ `<ThemedText>` |
| Bài học rút ra | Lập trình React Native trên thiết bị di động cực kỳ nghiêm ngặt về cú pháp hiển thị, khác biệt hoàn toàn so với Web |

---

## 9. Phần đóng góp thật sự của sinh viên/nhóm

Mô tả rõ phần nào là đóng góp chính của sinh viên/nhóm, không phải chỉ copy từ AI.

```text
- Tự rà soát toàn bộ luồng Tab Bar Navigation và cấu hình chính xác trigger định tuyến đến màn hình Wishlist trong `app-tabs.tsx` và `app-tabs.web.tsx`.
- Chủ động phát hiện nhược điểm của router.back() và nâng cấp thành router.push("/") giúp loại bỏ bug trải nghiệm.
- Dọn dẹp sạch sẽ cấu trúc import trong `wishlist.tsx`, chuyển đổi toàn bộ đường dẫn tương đối thành tuyệt đối sử dụng alias `@/components/...`.
- Cấu hình màu nền trắng `#fff` sáng đẹp đồng bộ trên safe area và container.
```

---

## 10. So sánh trước và sau khi dùng AI

| Nội dung | Trước khi dùng AI | Sau khi dùng AI | Cải thiện đạt được |
|---|---|---|---|
| Hiểu yêu cầu | Hiểu ở mức cơ bản | Nắm rõ cấu trúc UI tab | Định hình layout rất nhanh |
| Phân tích bài toán | Chưa biết cách tổ chức tab | Biết cách đăng ký trigger | Định tuyến Tab bar hoạt động tốt |
| Thiết kế giải pháp | Nghĩ đến giao diện tĩnh | Nghĩ đến tương tác động | Nút back và tab bar mượt mà |
| Code/Implementation | Viết code chậm, dễ sai | Tốc độ viết code nhanh | Tiết kiệm 50% thời gian |
| Debug/Testing | Mất thời gian rà soát | Định vị lỗi cực nhanh | Sửa sạch 100% lỗi crash |
| Báo cáo/Thuyết trình | Viết báo cáo thủ công | Có tư duy phân tích log | Báo cáo chi tiết kỹ thuật |
| Làm việc nhóm | Phối hợp chưa ăn khớp | Thống nhất được giải pháp | Luồng code đồng bộ, thống nhất |

---

## 11. Bài học về môn học

Sau bài tập/project này, em/nhóm học được gì về kiến thức môn học?

```text
- Hiểu sâu sắc cơ chế hoạt động đa nền tảng của React Native và Expo Router.
- Nắm vững tính chất nghiêm ngặt của JSX trên native platform so với môi trường trình duyệt Web truyền thống.
- Học được cách quản lý Responsive Layout thích ứng và linh hoạt giữa Web và Mobile bằng Platform API.
```

---

## 12. Bài học về sử dụng AI có trách nhiệm

Sau bài tập/project này, em/nhóm học được gì về việc sử dụng AI một cách minh bạch, có trách nhiệm?

```text
- Không bao giờ được sao chép code từ AI một cách vô điều kiện; luôn phải tìm hiểu kỹ lưỡng bản chất kỹ thuật của mã nguồn.
- Mọi kết quả do AI sinh ra bắt buộc phải qua giai đoạn kiểm thử đa nền tảng nghiêm ngặt trên Simulator/thiết bị thực tế.
- Tự ý thức chịu trách nhiệm tối cao về sản phẩm của mình, chủ động cải tiến và nâng cấp các gợi ý chưa tối ưu của AI để đem lại trải nghiệm tốt nhất cho người dùng.
```

---

## 13. Điều em/nhóm sẽ không làm khi sử dụng AI

Đánh dấu các cam kết phù hợp.

- [x] Không dùng AI để làm toàn bộ bài mà không hiểu nội dung.
- [x] Không nộp nguyên văn kết quả AI nếu chưa kiểm tra.
- [x] Không che giấu việc sử dụng AI trong các phần quan trọng.
- [x] Không dùng AI để tạo nội dung sai lệch hoặc gian lận.
- [x] Không dùng AI thay thế hoàn toàn quá trình học.
- [x] Không bỏ qua yêu cầu, rubric hoặc hướng dẫn của giảng viên.

### Giải thích thêm nếu có

```text
Nhóm cam kết sử dụng AI đúng vai trò là trợ lý đắc lực hỗ trợ học tập và tăng tốc độ làm bài, chứ không thay thế tư duy lập trình cốt lõi của sinh viên.
```

---

## 14. Kế hoạch cải thiện lần sau

Lần sau em/nhóm sẽ sử dụng AI tốt hơn bằng cách nào?

```text
Cung cấp nhiều bối cảnh kỹ thuật cụ thể và chi tiết hơn cho AI, chia nhỏ các phần UI để AI hỗ trợ code mẫu tối ưu hơn, và tiếp tục duy trì thói quen kiểm thử biên toàn diện.
```

Gợi ý:

- Viết prompt rõ hơn.
- Cung cấp nhiều ngữ cảnh hơn cho AI.
- Không hỏi AI làm toàn bộ bài.
- Tập trung hỏi AI giải thích, gợi ý, review.
- Tự kiểm tra kỹ hơn.
- Ghi log thường xuyên hơn.
- Liên kết log với commit/screenshot rõ hơn.
- Thảo luận với nhóm trước khi áp dụng kết quả AI.
- Đối chiếu kết quả AI với tài liệu môn học.

---

## 15. Tự đánh giá mức độ hoàn thành

Sinh viên/nhóm tự đánh giá theo thang 1-5.

| Tiêu chí | Điểm tự đánh giá 1-5 | Ghi chú |
|---|:---:|---|
| Ghi nhận việc dùng AI trung thực | 5 | Ghi chép cực kỳ minh bạch và đầy đủ |
| Prompt có mục tiêu rõ ràng | 5 | Hỏi rõ lỗi và bối cảnh cụ thể |
| Kiểm chứng kết quả AI | 5 | Test kỹ càng trên cả Web và Mobile |
| Tự chỉnh sửa/cải tiến | 5 | Fix dứt điểm lỗi đè layout và tối ưu nút Back |
| Hiểu nội dung đã nộp | 5 | Làm chủ 100% mã nguồn điều hướng và style |
| Reflection có chiều sâu | 5 | Phân tích sâu sắc bài học JSX và Platform |
| Sử dụng AI có trách nhiệm | 5 | Đạt tiêu chuẩn học thuật của giảng viên |

---

## 16. Câu hỏi tự vấn cuối bài

Trả lời ngắn gọn các câu hỏi sau.

### 16.1. Nếu giảng viên hỏi về phần AI đã hỗ trợ, em/nhóm có giải thích lại được không?

```text
Chắc chắn giải thích được rõ ràng và tự tin 100% về cách hoạt động của Tab Bar Navigation và tính nghiêm ngặt của JSX.
```

### 16.2. Nếu không có AI, em/nhóm có thể tự làm lại phần quan trọng nhất không?

```text
Hoàn toàn có thể tự viết code đăng ký định tuyến tab và căn chỉnh style bằng Platform API theo đúng tiêu chuẩn.
```

### 16.3. Phần nào trong bài thể hiện rõ nhất năng lực thật sự của em/nhóm?

```text
Phần phát hiện lỗi của router.back() khi stack trống và chủ động thay thế bằng router.push("/") giúp hoàn thiện sản phẩm tối đa.
```

### 16.4. Em/nhóm muốn cải thiện kỹ năng nào sau bài này?

```text
Kỹ năng responsive layout nâng cao và kiểm thử ứng dụng di động tự động.
```

---

## 17. Cam kết Reflection

Em/nhóm cam kết rằng nội dung reflection này phản ánh trung thực quá trình sử dụng AI và quá trình học tập trong bài tập/project.

Sinh viên/nhóm hiểu rằng:

- AI là công cụ hỗ trợ học tập, không thay thế hoàn toàn năng lực cá nhân.
- Mọi kết quả AI gợi ý cần được kiểm tra trước khi sử dụng.
- Sinh viên/nhóm chịu trách nhiệm với sản phẩm cuối cùng.
- Sinh viên/nhóm cần giải thích được các phần đã nộp.

| Đại diện sinh viên/nhóm | Ngày xác nhận |
|---|---|
|  |  |
