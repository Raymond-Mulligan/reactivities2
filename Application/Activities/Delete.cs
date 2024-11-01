using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete : IRequest
    {

        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await this.context.Activities.FindAsync(request.Id);
                this.context.Remove(activity);
                await this.context.SaveChangesAsync();
            }
        }
    }
}