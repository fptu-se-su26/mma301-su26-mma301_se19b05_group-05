# Changelog

## 1. Quy định ghi Changelog

File này dùng để ghi lại các thay đổi quan trọng trong quá trình thực hiện bài tập, lab, assignment hoặc project.

Nguyên tắc ghi changelog:

- Chỉ ghi những gì đã hoàn thành thật sự.
- Không ghi kế hoạch nếu chưa thực hiện.
- Mỗi thay đổi nên có ngày, nội dung, người thực hiện và minh chứng.
- Nếu có AI hỗ trợ, cần ghi rõ AI đã hỗ trợ phần nào.
- Nếu có commit GitHub, cần ghi link commit.
- Nếu có lỗi đã sửa, cần ghi rõ lỗi, nguyên nhân và cách xử lý.

---

## 2. Thông tin project

| Thông tin | Nội dung |
|---|---|
| Môn học | MMA301 |
| Mã môn học | MMA301 |
| Lớp | SE19D05 |
| Học kỳ | SU26 |
| Tên bài tập / Project | bai1 |
| Tên sinh viên / Nhóm | Le Hai Nam / Nhóm 5 |
| MSSV / Danh sách MSSV | DE170688 |
| Giảng viên hướng dẫn | QuangLTN3 |
| Repository URL |  |
| Ngày bắt đầu | 20/5/2026 |
| Ngày hoàn thành | 21/5/2026 |

---

## 3. Tổng quan các phiên bản/giai đoạn

| Phiên bản/Giai đoạn | Thời gian | Nội dung chính | Trạng thái |
|---|---|---|---|
| Phase 01 | 20/5/2026 | Khởi tạo project | Completed |
| Phase 02 | 20/5/2026 | Phân tích yêu cầu | Completed |
| Phase 03 | 20/5/2026 | Thiết kế hệ thống | Completed |
| Phase 04 | 20-21/5/2026 | Implementation | Completed |
| Phase 05 | 21/5/2026 | Testing & Debug | Completed |
| Phase 06 | 21/5/2026 | Hoàn thiện báo cáo và demo | In Progress |

---

---

# [Phase 01] Khởi tạo project

## Ngày thực hiện

```text
21/05/2026
```

## Đã hoàn thành

- [ x] Tạo repository
- [ x] Tạo cấu trúc thư mục project
- [ x] Tạo file README.md
- [ x] Tạo thư mục `docs/`
- [ x] Tạo file `AI_AUDIT_LOG.md`
- [ x] Tạo file `PROMPTS.md`
- [ x] Tạo file `REFLECTION.md`
- [ x] Tạo file `CHANGELOG.md`
- [ x] Khởi tạo source code ban đầu
- [ x] Cài đặt thư viện/công cụ cần thiết
- [ x] Cấu hình môi trường chạy project

## Thay đổi chi tiết

|| STT | Nội dung thay đổi                          | Người thực hiện | File/Module liên quan | Minh chứng |
| --: | ------------------------------------------ | --------------- | --------------------- | ---------- |
|   1 | Tạo project Expo React Native              | Le Hai Nam      | package.json          |            |
|   2 | Cài đặt expo-router và dependencies        | Le Hai Nam      | node_modules          |            |
|   3 | Tạo cấu trúc thư mục app/components/assets | Le Hai Nam      | src/                  |            |


## AI có hỗ trợ không?

- [ x] Có
- [ ] Không

Nếu có, mô tả AI đã hỗ trợ phần nào:

```text
AI hỗ trợ giải thích cách cấu hình Expo Router và cách setup project Expo React Native.
```

## Commit/Screenshot minh chứng

```text
Dán link commit, screenshot hoặc mô tả minh chứng tại đây...
```

## Ghi chú

```text
Khởi tạo project thành công bằng Expo SDK.
```

---

# [Phase 02] Phân tích yêu cầu

## Ngày thực hiện

```text
21/05/2026
```

## Đã hoàn thành

- [x ] Xác định problem statement
- [ x] Xác định user roles
- [ x] Viết user stories
- [ x] Viết use cases
- [ x] Xác định functional requirements
- [ x] Xác định non-functional requirements
- [ x] Xác định business rules
- [ x] Xác định acceptance criteria
- [ x] Review yêu cầu với giảng viên/nhóm
- [ x] Chỉnh sửa yêu cầu sau feedback

## Thay đổi chi tiết

| STT | Nội dung thay đổi                           | Người thực hiện | File/Module liên quan | Minh chứng |
| --: | ------------------------------------------- | --------------- | --------------------- | ---------- |
|   1 | Xác định chức năng frontend furniture store | Le Hai Nam      | Requirement docs      |            |
|   2 | Xác định các route cần xây dựng             | Le Hai Nam      | Route structure       |            |
|   3 | Phân tích giao diện mobile/web              | Le Hai Nam      | UI planning           |            |

## AI có hỗ trợ không?

- [ x] Có
- [ ] Không

Nếu có, mô tả AI đã hỗ trợ phần nào:

```text
AI hỗ trợ gợi ý hướng thiết kế giao diện frontend và cách tổ chức navigation.
```

## Commit/Screenshot minh chứng

```text
Dán link commit, screenshot hoặc mô tả minh chứng tại đây...
```

## Ghi chú

```text
Tập trung vào Expo Router và giao diện React Native.
```

---

# [Phase 03] Thiết kế hệ thống

## Ngày thực hiện

```text
21/05/2026
```

## Đã hoàn thành

- [x ] Thiết kế kiến trúc tổng quan
- [ ] Thiết kế database/ERD
- [ ] Thiết kế API
- [x ] Thiết kế giao diện/wireframe
- [x ] Thiết kế flow xử lý
- [ ] Thiết kế class diagram
- [ ] Thiết kế sequence diagram
- [ ] Thiết kế security/authorization flow
- [x ] Review thiết kế
- [ x] Chỉnh sửa thiết kế sau feedback

## Thay đổi chi tiết

| STT | Nội dung thay đổi        | Người thực hiện | File/Module liên quan | Minh chứng |
| --: | ------------------------ | --------------- | --------------------- | ---------- |
|   1 | Thiết kế Home Screen     | Le Hai Nam      | index.tsx             |            |
|   2 | Thiết kế Settings Screen | Le Hai Nam      | settings.tsx          |            |
|   3 | Thiết kế navigation tabs | Le Hai Nam      | app-tabs.web.tsx          |            |


## AI có hỗ trợ không?

- [x ] Có
- [ ] Không

Nếu có, mô tả AI đã hỗ trợ phần nào:

```text
AI hỗ trợ sinh giao diện cơ bản cho Settings Screen và giải thích Expo Router.
```

## Commit/Screenshot minh chứng

```text
Dán link commit, screenshot hoặc mô tả minh chứng tại đây...
```

## Ghi chú

```text
Thiết kế theo phong cách mobile UI đơn giản.
```

---

# [Phase 04] Implementation

## Ngày thực hiện

```text
21/05/2026
```

## Đã hoàn thành

- [ x] Tạo project structure
- [ ] Cài đặt database connection
- [ ] Xây dựng backend
- [x ] Xây dựng frontend
- [ ] Xây dựng authentication/authorization
- [ ] Xử lý CRUD
- [ ] Xử lý validation
- [ ] Tích hợp API
- [ ] Xử lý upload/download file
- [ ] Xử lý lỗi
- [ x] Tối ưu giao diện
- [ x] Cập nhật README hướng dẫn chạy

## Thay đổi chi tiết

| STT | Nội dung thay đổi           | Người thực hiện | File/Module liên quan | Minh chứng |
| --: | --------------------------- | --------------- | --------------------- | ---------- |
|   1 | Xây dựng Home Screen        | Le Hai Nam      | index.tsx             |            |
|   2 | Xây dựng Settings Screen    | Le Hai Nam      | settings.tsx          |            |
|   3 | Sửa lỗi web route           | Le Hai Nam      | app-tabs.web.tsx      |            |
|   4 | Tối ưu giao diện và style   | Le Hai Nam      | styles                |            |

## AI có hỗ trợ không?

- [x ] Có
- [ ] Không

Nếu có, mô tả AI đã hỗ trợ phần nào:

```text
AI hỗ trợ tạo code giao diện frontend cơ bản.
```

## Commit/Screenshot minh chứng

```text
Dán link commit, screenshot hoặc mô tả minh chứng tại đây...
```

## Ghi chú

```text
Sử dụng Expo Router SDK 55.
```

---

# [Phase 05] Testing & Debug

## Ngày thực hiện

```text
21/05/2026
```

## Đã hoàn thành

- [ ] Viết test case
- [ x] Chạy test chức năng chính
- [ ] Kiểm tra output
- [ ] Kiểm tra validation
- [ x] Kiểm tra lỗi giao diện
- [ ] Kiểm tra lỗi database
- [ ] Kiểm tra phân quyền
- [ ] Kiểm tra bảo mật cơ bản
- [ x] Fix bug
- [ x] Chạy lại sau khi fix bug
- [ x] Ghi nhận kết quả test

## Danh sách lỗi đã xử lý

| STT | Lỗi phát hiện                   | Nguyên nhân               | Cách xử lý                     | Trạng thái |
| --: | ------------------------------- | ------------------------- | ------------------------------ | ---------- |
|   1 | Route /settings không hoạt động | Chưa sửa app-tabs.web.tsx | Thêm TabTrigger cho web        | Fixed      |
|   2 | Expo Go không hỗ trợ SDK 55     | SDK không tương thích     | Cân nhắc downgrade SDK         | Fixed      |
|   3 | Lỗi type ThemedText             | Sai type hỗ trợ           | Đổi type phù hợp               | Fixed      |
|   4 | Lỗi Expo Router cache           | Cache cũ                  | Clear cache bằng expo start -c | Fixed      |


## Thay đổi chi tiết

| STT | Nội dung thay đổi     | Người thực hiện | File/Module liên quan | Minh chứng |
| --: | --------------------- | --------------- | --------------------- | ---------- |
|   1 | Debug Expo Router     | Le Hai Nam      | app-tabs.web.tsx      |            |
|   2 | Sửa lỗi điều hướng    | Le Hai Nam      | settings.tsx          |            |
|   3 | Test route web/mobile | Le Hai Nam      | Expo Web              |            |


## AI có hỗ trợ không?

- [ x] Có
- [ ] Không

Nếu có, mô tả AI đã hỗ trợ phần nào:

```text
AI hỗ trợ phân tích lỗi route và đưa ra hướng debug Expo Router.
```

## Commit/Screenshot minh chứng

```text
Dán link commit, screenshot hoặc mô tả minh chứng tại đây...
```

## Ghi chú

```text
Đã kiểm tra bằng Expo Web.
```

---

# [Phase 06] Hoàn thiện báo cáo và demo

## Ngày thực hiện

```text
21/05/2026
```

## Đã hoàn thành

- [x ] Hoàn thiện source code
- [ x] Hoàn thiện README.md
- [ x] Hoàn thiện report
- [ ] Hoàn thiện slide
- [ ] Hoàn thiện video demo
- [x ] Kiểm tra lại `AI_AUDIT_LOG.md`
- [ x] Kiểm tra lại `PROMPTS.md`
- [ x] Hoàn thiện `REFLECTION.md`
- [ x] Kiểm tra lại `CHANGELOG.md`
- [ ] Đóng gói bài nộp

## Thay đổi chi tiết

| STT | Nội dung thay đổi       | Người thực hiện | File/Module liên quan | Minh chứng |
| --: | ----------------------- | --------------- | --------------------- | ---------- |
|   1 | Hoàn thiện AI Audit Log | Le Hai Nam      | AI_AUDIT_LOG.md       |            |
|   2 | Hoàn thiện Changelog    | Le Hai Nam      | CHANGELOG.md          |            |
|   3 | Kiểm tra lại project    | Le Hai Nam      | Source code           |            |


## AI có hỗ trợ không?

- [ x] Có
- [ ] Không

Nếu có, mô tả AI đã hỗ trợ phần nào:

```text
AI hỗ trợ format changelog và audit log.
```

## Commit/Screenshot minh chứng

```text
Dán link commit, screenshot hoặc mô tả minh chứng tại đây...
```

## Ghi chú

```text
Viết tại đây...
```

---

# 4. Tổng kết thay đổi cuối project

## 4.1. Các chức năng đã hoàn thành

| STT | Chức năng              | Trạng thái | Minh chứng | Ghi chú |
| --: | ---------------------- | ---------- | ---------- | ------- |
|   1 | Home Screen            | Completed  |            |         |
|   2 | Settings Screen        | Completed  |            |         |
|   3 | Expo Router Navigation | Completed  |            |         |
|   4 | Responsive Web Route   | Completed  |            |         |
|   5 | UI Mobile Layout       | Completed  |            |         |

---

## 4.2. Các chức năng chưa hoàn thành

| STT | Chức năng      | Lý do chưa hoàn thành | Hướng cải thiện           |
| --: | -------------- | --------------------- | ------------------------- |
|   1 | Backend API    | Chưa triển khai       | Tích hợp API sau          |
|   2 | Authentication | Chưa triển khai       | Thêm login/register       |
|   3 | Database       | Chưa triển khai       | Tích hợp backend/database |


---

## 4.3. Tổng hợp AI hỗ trợ trong project

| Hạng mục     | AI có hỗ trợ không? | Mức độ hỗ trợ | Ghi chú             |
| ------------ | ------------------- | ------------- | ------------------- |
| Requirement  | Có                  | Ít            | Gợi ý ý tưởng       |
| Design       | Có                  | Trung bình    | UI và navigation    |
| Database     | Không               |               |                     |
| Coding       | Có                  | Trung bình    | Sinh code frontend  |
| Debug        | Có                  | Trung bình    | Debug Expo Router   |
| Testing      | Có                  | Ít            | Hỗ trợ kiểm tra lỗi |
| Report       | Có                  | Trung bình    | Format tài liệu     |
| Presentation | Không               |               |                     |

---

## 4.4. Bài học rút ra

```text
Hiểu rõ hơn về Expo Router, React Native, navigation đa nền tảng và cách sử dụng AI để hỗ trợ phát triển frontend hiệu quả hơn.
```

---

## 4.5. Hướng cải thiện tiếp theo

```text
Phát triển backend, thêm authentication, tích hợp database và tối ưu UI/UX cho ứng dụng.
```

---

# 5. Cam kết cập nhật Changelog

Sinh viên/nhóm cam kết rằng nội dung changelog phản ánh đúng các thay đổi đã thực hiện trong quá trình làm bài tập/project.

| Đại diện sinh viên/nhóm | Ngày xác nhận |
|---|---|
| Le Hai Nam | 21/05/2026 |
