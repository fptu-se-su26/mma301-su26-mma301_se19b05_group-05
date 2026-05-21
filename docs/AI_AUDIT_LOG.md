# AI Audit Log

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
| Ngày hoàn thành | 21/5/2026 |

---

## 2. Công cụ AI đã sử dụng

Đánh dấu các công cụ AI đã sử dụng trong quá trình thực hiện bài tập/project.

- [ ] ChatGPT
- [x] Gemini
- [ ] Claude
- [ ] GitHub Copilot
- [ ] Cursor
- [x] Antigravity
- [ ] Perplexity
- [ ] Microsoft Copilot
- [ ] Công cụ khác: ....................................

---

## 3. Mục tiêu sử dụng AI

Mô tả ngắn gọn sinh viên/nhóm đã sử dụng AI để hỗ trợ những công việc nào.

Ví dụ:

- Phân tích yêu cầu bài toán
- Gợi ý ý tưởng giải pháp
- Thiết kế database
- Thiết kế giao diện
- Viết code mẫu
- Debug lỗi
- Tối ưu code
- Viết test case
- Kiểm tra bảo mật
- Viết báo cáo
- Chuẩn bị slide thuyết trình
- Tìm hiểu công nghệ mới

### Mô tả mục tiêu sử dụng AI

```text
Sử dụng AI (Antigravity/Gemini) để hỗ trợ thiết kế giao diện màn hình Wishlist, đăng ký tab điều hướng trên cả nền tảng Web và Native Mobile của Expo, đồng thời gỡ lỗi hiển thị (unexpected text node), đè header trên Web và tối ưu nút quay lại (Back navigation).
```

## 4. Nhật ký sử dụng AI chi tiết

> Mỗi lần sử dụng AI cho một phần quan trọng của bài tập/project, sinh viên cần ghi lại theo mẫu bên dưới.  
> Sinh viên/nhóm có thể nhân bản mẫu “Lần sử dụng AI” nhiều lần tùy theo số lần sử dụng AI thực tế.

---

### Lần sử dụng AI số 1

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 2026-05-21 |
| Công cụ AI | Antigravity / Gemini |
| Mục đích sử dụng | Thiết lập định tuyến (routing) cho tab Wishlist trên Web và Mobile |
| Phần việc liên quan | Frontend / Debug |
| Mức độ sử dụng | Hỗ trợ một phần |

#### 4.1. Prompt đã sử dụng

```text
ở phần thanh expo starter tôi không thể ấn để điều hướng qua trang wishlist được
```

#### 4.2. Kết quả AI gợi ý

Tóm tắt nội dung AI đã trả lời hoặc gợi ý.

```text
AI đã phân tích cấu trúc định tuyến của Expo Router và chỉ ra rằng tab Wishlist chưa được hiển thị do file cấu hình Tab bar (`src/components/app-tabs.tsx` cho Mobile và `src/components/app-tabs.web.tsx` cho Web) đang ẩn trigger (`href={null}` hoặc thiếu `<TabTrigger>`). AI đề xuất bổ sung trigger định tuyến vào Tab Bar để đăng ký tab Wishlist chính thức.
```

#### 4.3. Phần sinh viên/nhóm đã sử dụng từ AI

Mô tả rõ phần nào được sử dụng lại từ gợi ý của AI.

```text
Sử dụng các đoạn mã đăng ký tab:
- Web: Bổ sung `<TabTrigger value="wishlist" href="/wishlist">` vào danh sách Tab bar.
- Mobile: Thay đổi cấu hình trigger cho wishlist trong file `app-tabs.tsx` để có `href="/wishlist"` thay vì `href={null}`.
```

#### 4.4. Phần sinh viên/nhóm tự chỉnh sửa hoặc cải tiến

Mô tả sinh viên/nhóm đã thay đổi, kiểm tra, sửa lỗi hoặc cải tiến gì so với gợi ý ban đầu của AI.

```text
Tự kiểm tra giao diện và cấu trúc import của file `wishlist.tsx`, chủ động dọn dẹp các đường dẫn import tương đối thành dạng tuyệt đối sử dụng alias `@/components/...` giúp code sạch sẽ và chuẩn hóa theo dự án.
```

#### 4.5. Minh chứng

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | [Sửa đổi luồng Tab Navigation] |
| File liên quan | `src/components/app-tabs.tsx`, `src/components/app-tabs.web.tsx`, `src/app/wishlist.tsx` |
| Screenshot | ![Wishlist Demo](../bai1/images/wishlist_demo.png) |
| Kết quả chạy/test | Đã chuyển trang Wishlist thành công khi click trên thanh Tab bar ở cả Web và Mobile |
| Link video demo |  |
| Ghi chú khác |  |

#### 4.6. Nhận xét cá nhân/nhóm

Sinh viên/nhóm học được gì sau lần sử dụng AI này?

```text
Hiểu rõ hơn về cơ chế định tuyến (routing) của Expo Router trong các dự án React Native đa nền tảng (Web và Mobile). Học cách đăng ký tab và quản lý thanh điều hướng tùy biến.
```

---

### Lần sử dụng AI số 2

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 2026-05-21 |
| Công cụ AI | Antigravity / Gemini |
| Mục đích sử dụng | Sửa lỗi render (Unexpected text node), sửa lỗi đè header trên Web |
| Phần việc liên quan | Frontend / Debug / Testing |
| Mức độ sử dụng | Hỗ trợ nhiều |

#### 4.1. Prompt đã sử dụng

```text
Unexpected text node:  . A text node cannot be a child of a <View>. Lỗi này là gì và sửa ở đâu?
Và làm thế nào để nút back hoạt động chuẩn xác không bị đè bởi thanh header trên Web?
```

#### 4.2. Kết quả AI gợi ý

```text
1. Giải thích lỗi crash trên Mobile: Do có khoảng trắng thừa nằm ngoài thẻ chữ hiển thị (`<ThemedText>`) ngay sát phần chú thích trong JSX của file `src/app/wishlist.tsx`.
2. Đề xuất căn lề trên Web: Sử dụng thuộc tính padding thích ứng thông qua kiểm tra nền tảng `Platform.OS === 'web'` để đẩy giao diện xuống 80px nhằm tránh bị header của Expo Starter đè lên nút Back.

```

#### 4.3. Phần sinh viên/nhóm đã sử dụng từ AI

```text
- Áp dụng sửa đổi loại bỏ khoảng trắng thừa gây crash trên thiết bị Mobile.
- Áp dụng kiểm tra nền tảng `Platform.OS === 'web'` để thêm padding thích ứng trên Web.
```

#### 4.4. Phần sinh viên/nhóm tự chỉnh sửa hoặc cải tiến

```text
- Tự tối ưu nút Back: AI gợi ý sử dụng `router.back()`, tuy nhiên nếu người dùng truy cập trực tiếp bằng đường dẫn URL hoặc tải lại trang thì lịch sử stack điều hướng sẽ trống, làm nút Back mất tác dụng. Nhóm đã tự cải tiến thành `router.push("/")` để luôn đảm bảo đưa người dùng quay lại trang chủ an toàn và đúng hành vi thiết kế.
- Kiểm thử chi tiết hành vi click và hiển thị trên cả 2 nền tảng để tối ưu hóa UX.
```

#### 4.5. Minh chứng

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | [Sửa lỗi Layout, Crash Text Node và Điều Hướng Back] |
| File liên quan | `src/app/wishlist.tsx` |
| Screenshot | ![Wishlist Demo](../bai1/images/wishlist_demo.png) |
| Kết quả chạy/test | Đã sửa dứt điểm lỗi crash trên simulator Mobile, giao diện không bị đè trên Web và nút Back hoạt động chính xác |
| Link video demo |  |
| Ghi chú khác |  |

#### 4.6. Nhận xét cá nhân/nhóm

```text
Học được bài học quan trọng về tính nghiêm ngặt của React Native khi không cho phép bất kỳ text node tự do nào bên ngoài các thẻ text (khác với HTML/Web thông thường). Nắm vững cách quản lý luồng điều hướng an toàn và cách căn chỉnh layout đa nền tảng linh hoạt.
```

---

### Lần sử dụng AI số 3

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng |  |
| Công cụ AI | ChatGPT / Gemini / Claude / GitHub Copilot / Cursor / Antigravity / Khác |
| Mục đích sử dụng |  |
| Phần việc liên quan | Requirement / Design / Database / Frontend / Backend / Testing / Debug / Report / Presentation / Other |
| Mức độ sử dụng | Hỗ trợ ý tưởng / Hỗ trợ một phần / Hỗ trợ nhiều / Sinh chính nội dung |

#### 4.1. Prompt đã sử dụng

```text
Dán nguyên văn prompt đã hỏi AI tại đây.
```

#### 4.2. Kết quả AI gợi ý

```text
Viết tại đây...
```

#### 4.3. Phần sinh viên/nhóm đã sử dụng từ AI

```text
Viết tại đây...
```

#### 4.4. Phần sinh viên/nhóm tự chỉnh sửa hoặc cải tiến

```text
Viết tại đây...
```

#### 4.5. Minh chứng

| Loại minh chứng | Nội dung |
|---|---|
| Link commit |  |
| File liên quan |  |
| Screenshot |  |
| Kết quả chạy/test |  |
| Link video demo |  |
| Ghi chú khác |  |

#### 4.6. Nhận xét cá nhân/nhóm

```text
Viết tại đây...
```

---

## 5. Bảng tổng hợp mức độ sử dụng AI

Đánh dấu mức độ AI hỗ trợ ở từng hạng mục.

| Hạng mục | Không dùng AI | AI hỗ trợ ít | AI hỗ trợ nhiều | AI sinh chính | Ghi chú |
|---|:---:|:---:|:---:|:---:|---|
| Phân tích yêu cầu |  | [x] |  |  | Phân tích thiết kế của Expo Starter |
| Viết user story/use case | [x] |  |  |  |  |
| Thiết kế database | [x] |  |  |  |  |
| Thiết kế kiến trúc hệ thống | [x] |  |  |  |  |
| Thiết kế giao diện |  |  | [x] |  | Hỗ trợ thiết kế layout Wishlist |
| Code frontend |  |  | [x] |  | Đăng ký tab và chỉnh sửa style |
| Code backend | [x] |  |  |  |  |
| Debug lỗi |  |  | [x] |  | Sửa lỗi crash Text Node và đè layout |
| Viết test case | [x] |  |  |  |  |
| Kiểm thử sản phẩm |  | [x] |  |  |  |
| Tối ưu code |  | [x] |  |  | Tối ưu nút Back và alias import |
| Viết báo cáo |  | [x] |  |  | Sử dụng để hỗ trợ chuẩn hóa nội dung log |
| Làm slide thuyết trình | [x] |  |  |  |  |

---

## 6. Các lỗi hoặc hạn chế từ AI

Ghi lại các trường hợp AI trả lời sai, thiếu, chưa phù hợp hoặc sinh code không chạy.

| STT | Lỗi/hạn chế từ AI | Cách phát hiện | Cách xử lý/cải tiến |
|---:|---|---|---|
| 1 | Gợi ý dùng `router.back()` gây lỗi điều hướng khi không có stack lịch sử | Mở trang Wishlist trực tiếp qua URL/tab ẩn danh và bấm thử nút Back | Chuyển thành `router.push("/")` để luôn định hướng an toàn về trang chủ |
| 2 | Code UI mẫu có khoảng trắng thừa gây crash React Native trên Mobile | Chạy ứng dụng trên máy ảo/thiết bị thật Mobile bị văng màn hình đỏ | Rà soát kỹ lưỡng cấu trúc JSX và loại bỏ khoảng trắng nằm ngoài các thẻ text |
| 3 | Chưa tối ưu hóa layout trên nền Web, dẫn đến Header đè lên tiêu đề trang | Chạy thử ứng dụng trên môi trường trình duyệt Web | Kiểm tra thiết bị Web và thêm padding-top 80px thích ứng bằng `Platform.OS === 'web'` |

---

## 7. Kiểm chứng kết quả AI

Mô tả cách sinh viên/nhóm kiểm tra lại kết quả do AI gợi ý.

Có thể bao gồm:

- Chạy thử chương trình
- Viết test case
- So sánh với yêu cầu đề bài
- Kiểm tra output
- Đối chiếu tài liệu môn học
- Hỏi lại giảng viên
- Review cùng thành viên nhóm
- Kiểm tra lỗi bảo mật
- Kiểm tra bằng dữ liệu mẫu
- So sánh trước và sau khi dùng AI

### Nội dung kiểm chứng

```text
- Chạy thử chương trình: Khởi chạy song song cả máy chủ Web (nhấn 'w' trong Expo CLI) và máy ảo Android/iOS để kiểm tra tính tương thích.
- So sánh với yêu cầu đề bài: Đối chiếu giao diện và tính năng Wishlist đúng với tiêu chuẩn đề ra, đổi màu nền sang màu trắng chuẩn chỉnh.
- Kiểm tra output: Kiểm tra tính năng click tab, click nút Back hoạt động chính xác trong mọi tình huống (bao gồm cả tải lại trang).
```
```

---

## 8. Đóng góp cá nhân hoặc đóng góp nhóm

### 8.1. Đối với bài cá nhân

Mô tả phần sinh viên tự làm, phần AI hỗ trợ và phần đã tự cải tiến.

```text
- Phần sinh viên tự làm: Rà soát logic, phát hiện lỗi điều hướng của Expo tab bar, đề xuất thay đổi nút Back từ router.back() sang router.push("/"), dọn dẹp các đường dẫn import tương đối thành `@/components/`, đổi màu nền và màu giao diện trắng sáng.
- Phần AI hỗ trợ: Gợi ý các đoạn code đăng ký thẻ TabTrigger, phân tích lý do lỗi crash text node, gợi ý cách viết padding thích ứng trên Web.
- Phần tự cải tiến: Kiểm thử đa nền tảng và nâng cấp trải nghiệm người dùng tối đa.
```
```

### 8.2. Đối với bài nhóm

| Thành viên | MSSV | Nhiệm vụ chính | Có sử dụng AI không? | Minh chứng đóng góp |
|---|---|---|---|---|
|  |  |  | Có / Không |  |
|  |  |  | Có / Không |  |
|  |  |  | Có / Không |  |
|  |  |  | Có / Không |  |

---

## 9. Reflection cuối bài

### 9.1. AI đã hỗ trợ em/nhóm ở điểm nào?

```text
AI hỗ trợ đắc lực trong việc phát hiện và gỡ các lỗi kỹ thuật khó quan sát bằng mắt thường, thiết kế nhanh khung layout cho trang Wishlist, và gợi ý cấu trúc định tuyến đa nền tảng trong Expo Router.
```

### 9.2. Phần nào em/nhóm không sử dụng theo gợi ý của AI? Vì sao?

```text
Nhóm không sử dụng nguyên bản đề xuất `router.back()` cho nút quay lại. Vì nó không hoạt động tốt khi người dùng truy cập trực tiếp bằng đường link hoặc sau khi nhấn F5 tải lại trang (stack lịch sử điều hướng bị trống). Nhóm quyết định thay thế bằng `router.push("/")` để đảm bảo nút bấm luôn hoạt động hoàn hảo.
```

### 9.3. Em/nhóm đã kiểm tra tính đúng đắn của kết quả AI như thế nào?

```text
Chạy thử dự án trực tiếp trên cả hai môi trường (trình duyệt Web Chrome và máy ảo Mobile). Thực hiện kiểm thử biên (edge case) như tải lại trang và chuyển đổi qua lại giữa các tab để kiểm tra xem có xung đột hiển thị hay crash ứng dụng không.
```

### 9.4. Nếu không có AI, phần nào sẽ khó khăn nhất?

```text
Phần debug lỗi "Unexpected text node" trên React Native. Lỗi này xảy ra do ký tự trắng rất nhỏ nằm ngoài tầm kiểm soát trực quan, nếu không có AI phân tích cú pháp JSX để chỉ ra nguyên nhân, nhóm sẽ mất rất nhiều thời gian để rà soát thủ công từng dòng code.
```

### 9.5. Sau bài tập/project này, em/nhóm học được gì về môn học?

```text
Hiểu rõ sự khác biệt sâu sắc giữa lập trình web thông thường và lập trình ứng dụng di động đa nền tảng (React Native). Nắm vững cách Expo Router quản lý các tab màn hình cũng như sự khắt khe về mặt cú pháp hiển thị trên các thiết bị Mobile thực tế.
```

### 9.6. Sau bài tập/project này, em/nhóm học được gì về cách sử dụng AI có trách nhiệm?

```text
AI là một trợ lý tuyệt vời để tăng tốc độ phát triển và gỡ lỗi, nhưng con người vẫn đóng vai trò quyết định tối cao. Sinh viên phải luôn kiểm thử kết quả do AI sinh ra, chủ động cải tiến cho phù hợp với ngữ cảnh thực tế của ứng dụng thay vì sao chép một cách mù quáng.
```

---

## 10. Cam kết học thuật

Sinh viên/nhóm cam kết rằng:

- Nội dung AI hỗ trợ đã được ghi nhận trung thực.
- Không nộp nguyên văn kết quả AI mà không kiểm tra.
- Có khả năng giải thích các phần đã nộp.
- Chịu trách nhiệm về tính đúng đắn của sản phẩm cuối cùng.
- Hiểu rằng việc sử dụng AI không khai báo có thể ảnh hưởng đến kết quả đánh giá.

| Đại diện sinh viên/nhóm | Ngày xác nhận |
|---|---|
|  |  |
