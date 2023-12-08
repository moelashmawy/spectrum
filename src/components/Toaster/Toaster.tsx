import { ToastContainer as TContainer, toast, Flip } from "react-toastify";

const toastr = toast;

function Toastr() {
  return (
    <TContainer
      autoClose={1500}
      transition={Flip}
      limit={1}
      position={toast.POSITION.TOP_CENTER}
      theme="colored"
      pauseOnHover
      newestOnTop
      draggable={false}
      className="text-2xl"
    />
  );
}

export { Toastr, toastr };
