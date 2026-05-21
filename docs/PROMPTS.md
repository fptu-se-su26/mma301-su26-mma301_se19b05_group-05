# Prompt Log

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
| Ngày bắt đầu | 21/5/2026 |
| Ngày cập nhật gần nhất | 21/5/2026 |

---

## 2. Mục đích của file Prompt Log

File này dùng để ghi lại các prompt quan trọng đã sử dụng trong quá trình thực hiện bài tập, lab, assignment hoặc project.

Sinh viên/nhóm cần ghi lại:

- Đã hỏi AI điều gì.
- Mục đích sử dụng prompt.
- Công cụ AI đã sử dụng.
- AI đã trả lời hoặc gợi ý gì.
- Kết quả đó có được áp dụng vào bài hay không.
- Sinh viên/nhóm đã kiểm tra, chỉnh sửa hoặc cải tiến gì sau khi nhận kết quả từ AI.

---

## 3. Công cụ AI đã sử dụng

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

---

## 4. Bảng tổng hợp prompt đã sử dụng

| STT | Ngày | Công cụ AI | Mục đích | Prompt tóm tắt | Kết quả chính | Có sử dụng vào bài không? | Minh chứng |
|---:|---|---|---|---|---|---|---|
| 1 | 2026-05-21 | Antigravity | Định tuyến Wishlist | Tại sao không click được wishlist trên navbar? | Bổ sung trigger định tuyến vào Tab Bar | Có | [Sửa đổi luồng Tab Navigation] |
| 2 | 2026-05-21 | Antigravity | Gỡ lỗi crash Mobile | Sửa lỗi "Unexpected text node" trên Mobile | Xóa khoảng trắng dư thừa trong JSX | Có | [Sửa lỗi Layout, Crash Text Node] |
| 3 | 2026-05-21 | Antigravity | Thiết kế giao diện và Back | Đổi nền trắng, fix header Web đè nút Back | Thêm padding Web và chuyển sang router.push | Có | [Tối ưu giao diện và điều hướng Wishlist] |

---

## 5. Prompt chi tiết

> Sinh viên/nhóm có thể nhân bản mẫu “Prompt số...” nhiều lần tùy số lượng prompt thực tế đã sử dụng.

---

### Prompt số 1

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 2026-05-21 |
| Công cụ AI | Antigravity / Gemini |
| Mục đích | Tìm lỗi nút Wishlist trên navbar không phản hồi |
| Phần việc liên quan | Coding / Debug |
| Mức độ sử dụng | Hỏi debug / Hỏi tối ưu |

#### 5.1. Prompt nguyên văn

```text
ở phần thanh expo starter sao tôi không ấn để điều hướng qua trang wishlist được
```

#### 5.2. Bối cảnh khi viết prompt

Mô tả ngắn gọn vì sao sinh viên/nhóm cần dùng prompt này.

```text
Đã tạo thành công file màn hình `src/app/wishlist.tsx`, tuy nhiên khi click vào mục Wishlist trên thanh Expo starter navbar ở giao diện Web và Mobile thì không có bất kỳ hành vi điều hướng nào xảy ra.
```

#### 5.3. Kết quả AI trả về

Tóm tắt nội dung AI đã trả lời hoặc gợi ý.

```text
AI chỉ ra rằng các nút điều hướng trên navbar được quản lý bởi file Custom Tab Bar (`app-tabs.tsx` cho Mobile và `app-tabs.web.tsx` cho Web). Nút bấm Wishlist hiện đang bị ẩn hoặc cấu hình không có định tuyến đúng (`href={null}` hoặc thiếu `<TabTrigger>`). AI đề xuất bổ sung trigger định tuyến vào Tab Bar.
```

#### 5.4. Kết quả đã áp dụng vào bài

Mô tả phần nào từ kết quả AI đã được sử dụng vào bài tập/project.

```text
Sử dụng mã bổ sung trigger do AI gợi ý để cập nhật vào `app-tabs.tsx` và `app-tabs.web.tsx` giúp tab Wishlist hiện thị trực quan và chuyển hướng chuẩn xác sang `/wishlist`.
```

#### 5.5. Phần sinh viên/nhóm đã chỉnh sửa hoặc cải tiến

Mô tả sinh viên/nhóm đã thay đổi, kiểm tra, sửa lỗi hoặc cải tiến gì so với kết quả AI trả về.

```text
Tự rà soát toàn bộ cấu trúc import trong `wishlist.tsx`, chủ động sửa đổi tất cả các import tương đối dài dòng thành đường dẫn tuyệt đối dạng `@/components/...` để làm sạch mã nguồn.
```

#### 5.6. Đánh giá chất lượng prompt

Đánh dấu các nhận xét phù hợp.

- [x] Prompt rõ ràng
- [x] Prompt có đủ bối cảnh
- [ ] Prompt còn thiếu thông tin
- [x] Prompt tạo ra kết quả tốt
- [ ] Prompt tạo ra kết quả chưa phù hợp
- [ ] Cần hỏi lại AI nhiều lần
- [ ] Cần tự kiểm tra và chỉnh sửa nhiều
- [ ] Kết quả AI có lỗi hoặc chưa chính xác

#### 5.7. Minh chứng liên quan

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | [Sửa đổi luồng Tab Navigation] |
| File liên quan | `src/components/app-tabs.tsx`, `src/components/app-tabs.web.tsx` |
| Screenshot | ![Wishlist Demo](../bai1/images/wishlist_demo.png) |
| Kết quả chạy/test | Click chuyển hướng tab mượt mà |
| Link tài liệu/báo cáo |  |
| Ghi chú khác |  |

#### 5.8. Ghi chú thêm

```text
Đã giải quyết dứt điểm vấn đề định tuyến căn bản.
```

---

### Prompt số 2

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 2026-05-21 |
| Công cụ AI | Antigravity / Gemini |
| Mục đích | Khắc phục lỗi crash hiển thị trên Mobile simulator |
| Phần việc liên quan | Debug |
| Mức độ sử dụng | Hỏi debug |

#### 5.1. Prompt nguyên văn

```text
Unexpected text node:  . A text node cannot be a child of a <View>.
```

#### 5.2. Bối cảnh khi viết prompt

```text
Ứng dụng chạy tốt trên Web, tuy nhiên khi khởi chạy trên Android Emulator/iOS Simulator thì bị crash lập tức tại trang Wishlist với màn hình đỏ báo lỗi Unexpected text node.
```

#### 5.3. Kết quả AI trả về

```text
Giải thích rằng React Native quản lý hiển thị rất nghiêm ngặt, không cho phép bất kỳ ký tự khoảng trắng hoặc chữ tự do nào nằm ngoài thẻ chữ hiển thị (phải nằm trong thẻ text). AI định vị lỗi do có khoảng trắng thừa ngay sát chú thích JSX trong `src/app/wishlist.tsx`.
```

#### 5.4. Kết quả đã áp dụng vào bài

```text
Sử dụng gợi ý để rà soát file `wishlist.tsx` và xóa bỏ ký tự trắng thừa.
```

#### 5.5. Phần sinh viên/nhóm đã chỉnh sửa hoặc cải tiến

```text
Tự loại bỏ các chú thích JSX không chuẩn cú pháp khác trong file để đảm bảo code chạy ổn định lâu dài.
```

#### 5.6. Đánh giá chất lượng prompt

- [x] Prompt rõ ràng
- [x] Prompt có đủ bối cảnh
- [ ] Prompt còn thiếu thông tin
- [x] Prompt tạo ra kết quả tốt
- [ ] Prompt tạo ra kết quả chưa phù hợp
- [ ] Cần hỏi lại AI nhiều lần
- [ ] Cần tự kiểm tra và chỉnh sửa nhiều
- [ ] Kết quả AI có lỗi hoặc chưa chính xác

#### 5.7. Minh chứng liên quan

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | [Sửa lỗi Layout, Crash Text Node] |
| File liên quan | `src/app/wishlist.tsx` |
| Screenshot | ![Wishlist Demo](../bai1/images/wishlist_demo.png) |
| Kết quả chạy/test | Ứng dụng khởi động ổn định không còn bị crash màn hình đỏ |
| Link tài liệu/báo cáo |  |
| Ghi chú khác |  |

#### 5.8. Ghi chú thêm

```text
Học được cơ chế render cực kỳ nghiêm ngặt của native engine trong React Native.
```

---

### Prompt số 3

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 2026-05-21 |
| Công cụ AI | Antigravity / Gemini |
| Mục đích | Sửa lỗi đè header trên Web và đổi màu nền |
| Phần việc liên quan | Coding / Debug / Testing |
| Mức độ sử dụng | Hỏi tối ưu |

#### 5.1. Prompt nguyên văn

```text
làm sao để trang wishlist có nền màu trắng, nút back hoạt động chuẩn xác không bị đè bởi thanh header trên Web?
```

#### 5.2. Bối cảnh khi viết prompt

```text
Tiêu đề trang Wishlist và nút Back bị đè mất bởi header bar tuyệt đối của Expo Starter trên trình duyệt Web, đồng thời màu nền trang bị mặc định tối màu chưa đẹp.
```

#### 5.3. Kết quả AI trả về

```text
Đề xuất sử dụng thuộc tính kiểm tra nền tảng `Platform.OS === 'web'` để cộng thêm `paddingTop: 80` cho safe area view khi chạy trên trình duyệt Web, đồng thời đổi nền container thành `#fff`.
```

#### 5.4. Kết quả đã áp dụng vào bài

```text
Áp dụng thuộc tính padding thích ứng và thay đổi màu nền trắng sáng cho safe area và container.
```

#### 5.5. Phần sinh viên/nhóm đã chỉnh sửa hoặc cải tiến

```text
Tự phát hiện nhược điểm của `router.back()` (bị lỗi khi người dùng truy cập trực tiếp bằng link hoặc tải lại trang do stack trống) và nâng cấp thành `router.push("/")` để đảm bảo nút Back luôn hoạt động chính xác.
```

#### 5.6. Đánh giá chất lượng prompt

- [x] Prompt rõ ràng
- [x] Prompt có đủ bối cảnh
- [ ] Prompt còn thiếu thông tin
- [x] Prompt tạo ra kết quả tốt
- [ ] Prompt tạo ra kết quả chưa phù hợp
- [ ] Cần hỏi lại AI nhiều lần
- [x] Cần tự kiểm tra và chỉnh sửa nhiều
- [ ] Kết quả AI có lỗi hoặc chưa chính xác

#### 5.7. Minh chứng liên quan

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | [Tối ưu giao diện và điều hướng Wishlist] |
| File liên quan | `src/app/wishlist.tsx` |
| Screenshot | ![Wishlist Demo](../bai1/images/wishlist_demo.png) |
| Kết quả chạy/test | Đã sửa dứt điểm lỗi đè layout Web và lỗi điều hướng Back |
| Link tài liệu/báo cáo |  |
| Ghi chú khác |  |

#### 5.8. Ghi chú thêm

```text
Giao diện và trải nghiệm điều hướng đã đạt chuẩn UX/UI.
```

---

## 6. Prompt quan trọng nhất

Chọn một prompt có ảnh hưởng lớn nhất đến bài tập/project.

### 6.1. Prompt được chọn

```text
Unexpected text node:  . A text node cannot be a child of a <View>.
```

### 6.2. Vì sao prompt này quan trọng?

```text
Vì nó giải quyết dứt điểm lỗi crash nghiêm trọng trên nền tảng Native Mobile (Android/iOS). Lỗi này thường rất khó nhận diện thủ công bằng mắt thường của lập trình viên mới học do các ký tự trắng thừa vô hình, và AI đã chỉ ra vô cùng chính xác giúp tiết kiệm thời gian phát triển dự án.
```

### 6.3. Kết quả prompt này mang lại

```text
Ứng dụng chạy mượt mà trên môi trường Mobile Native không còn lỗi màn hình đỏ, giao diện hiển thị chuyên nghiệp và ổn định.
```

### 6.4. Sinh viên/nhóm đã kiểm tra kết quả như thế nào?

```text
Khởi chạy Android Emulator, truy cập vào tab Wishlist và kiểm tra xem component có hiển thị đầy đủ và không bị văng ứng dụng nữa.
```

### 6.5. Sinh viên/nhóm đã cải tiến gì từ kết quả AI?

```text
Tự chuẩn hóa cấu trúc JSX sạch đẹp, đảm bảo tất cả các text node được bao bọc cẩn thận bởi thẻ `<ThemedText>`, tránh lặp lại lỗi render này ở các component khác.
```

---

## 7. Prompt chưa hiệu quả

Ghi lại ít nhất một prompt chưa tạo ra kết quả tốt hoặc chưa phù hợp.

### 7.1. Prompt chưa hiệu quả

```text
Làm cách nào để nút Back hoạt động quay lại trang trước?
```

### 7.2. Vì sao prompt này chưa hiệu quả?

```text
Prompt quá ngắn, thiếu bối cảnh cụ thể của luồng duyệt trang trong ứng dụng. AI đã đề xuất sử dụng `router.back()` một cách máy móc, dẫn đến việc nút Back bị vô hiệu hóa hoàn toàn khi người dùng tải lại trang ( stack lịch sử trang bị trống ).
```

### 7.3. Cách cải thiện prompt

```text
Cần cung cấp bối cảnh điều hướng đa nền tảng và ràng buộc cụ thể của Tab bar.
```

### 7.4. Prompt sau khi cải tiến

```text
Nút quay lại dùng router.back() bị lỗi khi người dùng tải lại trang Wishlist do stack lịch sử trống. Có cách nào làm nút này hoạt động an toàn và luôn đưa về Home không?
```

### 7.5. Kết quả sau khi cải tiến prompt

```text
AI đề xuất sử dụng `router.push("/")` hoặc `router.replace("/")` để luôn điều hướng an toàn và chắc chắn đưa người dùng về trang chủ Home Screen trong mọi trường hợp stack trống.
```

---

## 8. Bài học về cách viết prompt

### 8.1. Khi viết prompt, em/nhóm cần cung cấp thông tin gì để AI trả lời tốt hơn?

```text
- Nền tảng và công nghệ sử dụng (Expo, React Native, TypeScript).
- Chi tiết log lỗi chính xác kèm Component Stack.
- Bối cảnh duyệt trang và luồng người dùng thực tế.
- Đoạn mã nguồn hiện tại cần gỡ lỗi hoặc tối ưu.
- Tiêu chuẩn giao diện mong muốn (ví dụ màu nền trắng sáng).
```

### 8.2. Em/nhóm đã học được gì về cách đặt câu hỏi cho AI?

```text
Nên hỏi chi tiết từng lỗi kỹ thuật và chia nhỏ phần việc để AI hỗ trợ, tránh việc bắt AI viết cả file lớn dẫn đến các lỗi cú pháp JSX không mong muốn. Luôn đặt câu hỏi mang tính chất phản biện và tìm hiểu nguyên nhân cốt lõi.
```

### 8.3. Lần sau em/nhóm sẽ cải thiện prompt như thế nào?

```text
Cung cấp đầy đủ ngữ cảnh dự án và đính kèm trực tiếp file code hiện tại để AI hiểu cấu trúc luồng dữ liệu chính xác nhất trước khi đưa ra gợi ý.
```

---

## 9. Phân loại prompt đã sử dụng

Đánh dấu số lượng prompt theo từng nhóm.

| Loại prompt | Số lượng | Ví dụ prompt tiêu biểu |
|---|---:|---|
| Prompt phân tích yêu cầu | 0 |  |
| Prompt giải thích kiến thức | 0 |  |
| Prompt thiết kế giải pháp | 1 | Prompt định tuyến Wishlist Screen trong cấu hình Custom Tab Bar |
| Prompt thiết kế database | 0 |  |
| Prompt sinh code mẫu | 1 | Prompt sinh layout giao diện Wishlist |
| Prompt debug lỗi | 1 | Prompt sửa lỗi crash Unexpected Text Node trên simulator |
| Prompt viết test case | 0 |  |
| Prompt review code | 0 |  |
| Prompt tối ưu code | 1 | Prompt tối ưu padding trên Web và màu nền |
| Prompt viết báo cáo | 0 |  |
| Prompt chuẩn bị thuyết trình | 0 |  |
| Prompt khác | 0 |  |

---

## 10. Checklist chất lượng prompt

Sinh viên/nhóm tự kiểm tra chất lượng prompt đã dùng.

| Tiêu chí | Đã đạt? | Ghi chú |
|---|:---:|---|
| Prompt có mục tiêu rõ ràng | [x] | Xác định đúng lỗi hiển thị và định tuyến |
| Prompt có đủ bối cảnh | [x] | Mô tả chi tiết hành vi trên Web và Mobile |
| Prompt có nêu công nghệ/ngôn ngữ sử dụng | [x] | Rõ ràng về nền tảng Expo/React Native |
| Prompt có nêu yêu cầu đầu ra | [x] | Mong muốn giao diện không bị đè và nền trắng |
| Prompt không yêu cầu AI làm toàn bộ bài một cách máy móc | [x] | Chia nhỏ việc thiết kế, định tuyến và sửa lỗi |
| Prompt có yêu cầu AI giải thích hoặc phân tích | [x] | Hỏi rõ nguyên nhân lỗi text node |
| Kết quả AI được kiểm tra lại | [x] | Kiểm thử trực tiếp trên simulator |
| Kết quả AI được chỉnh sửa trước khi sử dụng | [x] | Tối ưu nút Back và alias import |
| Prompt quan trọng được ghi lại đầy đủ | [x] | Đã ghi đầy đủ 3 prompt kỹ thuật |
| Prompt sai/chưa hiệu quả được rút kinh nghiệm | [x] | Rút ra bài học về nút Back |

---

## 11. Cam kết sử dụng prompt minh bạch

Sinh viên/nhóm cam kết rằng:

- Các prompt quan trọng đã được ghi lại trung thực.
- Không che giấu việc sử dụng AI trong các phần quan trọng của bài.
- Không nộp nguyên văn kết quả AI nếu chưa kiểm tra và chỉnh sửa.
- Có khả năng giải thích các phần đã sử dụng từ AI.
- Chịu trách nhiệm với sản phẩm cuối cùng.

| Đại diện sinh viên/nhóm | Ngày xác nhận |
|---|---|
|  |  |
