function Modal({

    employee,

    onClose

}){
 console.log("Modal employee:", employee);
    if(!employee){

        return null;

    }

    return(

        <div className="modal">

            <div className="modal-content">

                <h2>

                    {employee.firstName}

                    {" "}

                    {employee.lastName}

                </h2>

                <p>

                    Company:

                    {employee.company.name}

                </p>

                <p>

                    Email:

                    {employee.email}

                </p>

                <p>

                    Phone:

                    {employee.phone}

                </p>

                <button  className="close-btn"

                onClick={onClose}

                >

                    Close

                </button>

            </div>

        </div>

    );

}

export default Modal;