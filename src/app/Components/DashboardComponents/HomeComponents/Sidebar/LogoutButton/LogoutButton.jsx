import { MdLogout } from "react-icons/md";
import { useRouter } from "next/navigation";
import swal from "sweetalert";
export default function LogoutButton() {
  const router = useRouter();
  const NavigateTOLogin = () => {
    swal({
      title: "Are you sure?",
      text: "You want to logout ? ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.removeItem("Email");
        router.push("/Login");
      } else {
        console.log("not logout");
      }
    });
  };
  return (
    <div className="p-4">
      <div
        onClick={NavigateTOLogin}
        className="flex items-center space-x-3 cursor-pointer bg-[#0085DB] p-2 rounded text-white"
      >
        <div className="p-2 rounded">
          <MdLogout className="text-white" />
        </div>
        <span>Logout</span>
      </div>
    </div>
  );
}
