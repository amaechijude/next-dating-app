import { GoSmiley } from "react-icons/go";
import { Button } from "./ui/button";
function Again() {
    return (
        <div className="text-3xl font-bold underline">
            Return Again

            <Button
            color="danger"
            variant="link"            
            >Click Me <GoSmiley/> </Button>

            
        </div>
    )
}

export default Again;