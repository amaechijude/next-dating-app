import { GoSmiley } from "react-icons/go";
import { Button } from "./ui/button";
function Again() {
    return (
        <div className="text-3xl font-bold underline">
            Return Again

            <a href="/members">
            <Button        
            color="red"
            variant="link"           
            >Click Me <GoSmiley/> </Button>
            </a>

            
        </div>
    )
}

export default Again;