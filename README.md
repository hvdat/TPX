# Thực Phẩm Xanh - Online Fruit Store
Phát Triển Ứng Dụng Web - Đồ Án Cuối Kỳ

## Mục lục
1. [Thông tin thành viên nhóm](#team-member)
2. [Mô tả đồ án](#desc)
3. [Các chức năng trong đồ án](#func)
4. [Thiết kế cơ sở dữ liệu](#db)
5. [UI/UX](#ui/ux)
6. [Hướng dẫn sử dụng đồ án](#guideline)
7. [Teamwork](#teamwork)

## 1. Thông tin thành viên nhóm:
- [19127352 - Hồ Vạn Đạt](https://www.github.com/zen-h01)
- [19127558 - Bùi Phú Thịnh](https://www.github.com/ShaneIsDev)

## 2. Mô tả đồ án:
- Đồ án xây dựng shop bán trái cây trên web bằng *nodejs, express, mysql*.
- Người dùng chọn những mặt hàng cần mua sau đó đặt hàng cho shop và shop sẽ giao những mặt hàng đã đặt theo địa chỉ và thông tin người dùng cung cấp
- Dùng *Heroku* để host và deploy đồ án lên internet.
- Dùng *Clever Cloud* để host mysql.

## 3. Các chức năng trong đồ án:

#### - Trang dành cho customer:
- Xem sản phẩm.
- Xem chi tiết sản phẩm.
- Add sản phẩm vào giỏ hàng mà không cần login.
- Giỏ hàng khi chưa đăng nhập vẫn được duy trì sau khi người dùng login.
- Ajax phân trang hiển thị sản phẩm.
- Lọc sản phẩm theo category.
- Thêm, xoá các sản phẩm trong giỏ hàng.
- Ngăn việc vào trang checkout, profile khi chưa đăng nhập.
- Đăng kí tài khoản theo ràng buộc không trùng email.
- Đăng nhập.
- Đăng xuất.
- Truy cập được Profile sau khi đăng nhập.
- Thay đổi thông tin profile cơ bản.
- Đổi mật khẩu.
- Yêu cầu nhập lại mật khẩu cũ khi thay đổi mật khẩu.
- Yêu cầu nhập lại mật khẩu cũ khi nhập sai.
- Thông tin các đơn hàng đã đặt trước đó và tình trạng.
- Đặt hàng sau khi hoàn tất những sản phẩm muốn mua.

#### - Trang dành cho admin:
- Add các sản phẩm vào database.
- Đăng nhập tài khoản admin.
- Đăng xuất tài khoản admin.
- Đăng kí và ràng buộc không trùng email.
- Cập nhật profile cho admin.
- Hiển thị phân trang cho danh sách sản phẩm .
- Hiển thị phân trang cho danh sách member.
- Hiển thị phân trang cho danh sách bình luận.
- Ajax cho trang danh sách: sản phẩm, member, bình luận.

## 4. Thiết kế cơ sở dữ liệu:
![Sơ đồ database](https://i.imgur.com/obeIed8.png "Sơ đồ database")

## 5. UI/UX:
- Customer site:
![Customer site 1](https://i.imgur.com/mmGQGhp.png)
![Customer site 2](https://i.imgur.com/te0Z9oa.png)
![Customer site 3](https://i.imgur.com/tAHNSrf.png)
- Admin site:
![Admin site](https://i.imgur.com/a6eOWfG.png)

## 6. Hướng dẫn sử dụng đồ án:
Bước 1: Để chạy 2 project ta cần cài đặt *nodejs*.
Bước 2: Truy cập vào folder web muốn chạy (customer hoặc admin-site).
Bước 3: Chạy lệnh `npm install`
Bước 3: Sau khi cài đặt xong các package ta chạy `npm start` để khởi động website.
Bước 4: Truy cập vào `localhost:3000` để mở sử dụng.

## 7.Teamwork:
- [19127352 - Hồ Vạn Đạt](https://www.github.com/zen-h01):
	- Thiết kế database.
	- Thiết kế UI cho site customer.
	- Ajax cho các trang: profile, giỏ hàng, sản phẩm.
	- Phân trang cho danh sách sản phẩm.
	- Tạo các chức năng quản lí giỏ hàng: thêm, xoá.
	- Filter cho danh sách sản phẩm theo category.
	- Làm chi tiết cho sản phẩm.
	- Các chức năng thay đổi thông tin trong hồ sơ cá nhân: chỉnh sửa thông tin, đổi mật khẩu.
	- Login/ logout cho người dùng.
	- Register: kiểm tra email trùng.
	- Quay clip hướng dẫn.
	- Viết báo cáo.
	- Làm việc với github.
	- Sử dụng passport cho authentication.
	- Buộc người dùng đăng nhập để có thể sử dụng được các chức năng: profile, thanh toán.
	- Yêu cầu nhập lại mật khẩu cũ để xác nhận khi thay đổi mật khẩu mới.
	- Thông tin về lịch sử các giỏ hàng.
	- Up lên host:  https://tpx-customer.herokuapp.com/
- [19127558 - Bùi Phú Thịnh](https://www.github.com/ShaneIsDev):
	- Thiết kế layout admin.
	- Thêm nội dung cho Database.
	- Ajax và Pagination cho trang member list.
	- Ajax và pagination cho trang product list.
	- Ajax và pagination cho comment list.
	- Việc Đăng nhập đăng xuất cho admin.
	- Việc Register cho admin.
	- Update profile cho admin.
	- Tạo trang cho phép upload product mới.
	- Viết báo cáo.
	- Upload code lên github (collab chung 1 repo).
	- Quay clip hướng dẫn.(https://shorturl.ae/SioDB).
	- Upload trang admin lên host thực tế: https://admin-thuc-pham-xanh.herokuapp.com/


[Thông tin thành viên nhóm]: #team-member
[Mô tả đồ án]: #desc
[Các chức năng trong đồ án]: #func
[Thiết kế cơ sở dữ liệu]: #db
[UI/UX]: #ui/ux
[Hướng dẫn sử dụng đồ án]: #guideline
[Teamwork]: #teamwork

