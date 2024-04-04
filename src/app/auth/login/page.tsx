import { login } from '@/lib/actions/auth-action'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {validateRequest} from "@/lib/auth";
import {redirect} from "next/navigation";

export default async function Page() {
	const { user } = await validateRequest();
	if (user) return redirect("/");

	return (
		<>
			<h1>Sign in</h1>
			<form action={login}>
				<div>
					<Label htmlFor="username">Username</Label>
					<Input name="username" id="username" />
				</div>
				<div>
					<Label htmlFor="password">Password</Label>
					<Input type="password" name="password" id="password" />
				</div>
				<div className={'mt-4 flex w-full justify-end'}>
					<Button>Continue</Button>
				</div>
			</form>
		</>
	)
}
