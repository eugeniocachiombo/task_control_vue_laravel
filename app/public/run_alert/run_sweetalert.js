let sweetalert = (data) => {
    Swal.fire({
        icon: data.icon,
        title: data.title,
        html: data.html,
        showConfirmButton: data.btn ?? false,
        showCancelButton: data.btnCancel ?? false,
        confirmButtonText: data.btnText ?? "Ok",
        cancelButtonText: data.btnTextCancel ?? "Cancelar",
        cancelButtonColor: '#d33',
        timer: data.timer ?? null
    }).then((result) => {
        if (result.isConfirmed) {
           // Livewire.dispatch(data.methodConfirm)
        }
    });
}

export default sweetalert