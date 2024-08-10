import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.jsx";
import { FaTelegramPlane } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
        <div
            className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary to-primary-foreground">
            <div className="bg-background p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex flex-col items-start space-y-6">
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src="/avatar.jpg" alt="Vooid" />
                            <AvatarFallback>V</AvatarFallback>
                        </Avatar>
                        <h1 className="text-4xl font-bold">Vooid</h1>
                    </div>
                    <div className="flex items-center space-x-4 text-muted-foreground">
                        <a href="https://github.com/wu-mx" className="hover:text-primary transition-colors">
                            <FiGithub className="w-6 h-6" />
                        </a>
                        <a href="https://x.com/wuoomx" className="hover:text-primary transition-colors">
                            <FaXTwitter className="w-6 h-6" />
                        </a>
                        <a href="https://t.me/voo_id" className="hover:text-primary transition-colors">
                            <FaTelegramPlane className="w-6 h-6" />
                        </a>
                    </div>
                    <p className="text-muted-foreground text-left">
                        Student from China, interested in programming.<br/>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I'm currently using JavaScript, Golang, and Python.<br/>
                    </p>
                </div>
            </div>
        </div>
    </main>
  );
}

